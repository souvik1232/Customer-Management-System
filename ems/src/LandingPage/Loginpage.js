import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Api/api";
import { useStyles } from "./style";
import image from "../LandingPage/login.png";
import image1 from "../HomePage/object.png";
import validatePassword from "../hooks/useValidation";
import CssTextField from "../components/customtextfield";

function Loginpage(props) {
  const { setToken } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = useState(false);
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const loginvariables = {
    userName: email,
    password: password,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(() => !validatePassword(password));
    validatePassword(password) &&
      loginUser(loginvariables).then((res) => {
        setToken(() => res.data.token);
        localStorage.setItem("token", res.data.token);
        if (res?.data?.user?.status === "Logged In" && !!email && !!password) {
          navigate("/userHome");
        }
      });
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          width: "100%",
          backgroundImage:
            "linear-gradient(to right, #0e88f1, #4481eb, #0e88f1, #3f86ed)",
          color: "white",
        }}
      >
        <Typography variant='h4' style={{ margin: "10px" }}>
          EMS
        </Typography>
        <img
          src={image1}
          alt='Company logo'
          style={{ height: "4vh", margin: "10px", alignSelf: "center" }}
        />
      </div>

      <div className={classes.container}>
        <img src={image} alt='Girl in a jacket' style={{ height: "90vh" }} />
        <div className={classes.login}>
          <Typography className={classes.heading} variant='h3'>
            Login
          </Typography>
          <div
            style={{
              marginTop: "70px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CssTextField
              className={classes.textArea}
              id='useremail'
              label='UserName'
              variant='outlined'
              value={email}
              onChange={(e) => handleEmailChange(e)}
            />
            <CssTextField
              className={classes.textArea}
              id='password'
              label={"Password"}
              type={showPassword ? "text" : "password"}
              variant='outlined'
              value={password}
              error={error}
              helperText={error ? "Wrong Password" : ""}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      edge='end'
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={(e) => handlePasswordChange(e)}
            />
          </div>
          <Button
            className={classes.loginbtn}
            variant='contained'
            onClick={handleSubmit}
            disableElevation
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;

Loginpage.prototypes = {
  setToken: PropTypes.func.isRequired,
};
