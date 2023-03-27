import {
  Button,
  IconButton,
  InputAdornment,
  Typography,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./style";
import image1 from "../LandingPage/login.png";
import CssTextField from "../components/customtextfield";
import validatePassword from "../hooks/useValidation";
import { loginUser } from "../Api/api";

function MobileLogin(props) {
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
        if (res?.data?.user?.status === "Logged In" && !!email && !!password) {
          navigate("/userHome");
        }
      });
  };
  return (
    <div className={classes.mobilelogin}>
      <img
        src={image1}
        alt='Girl in a jacket'
        style={{
          height: "50%",
          margin: "10px",
          alignSelf: "center",
          width: "50%",
        }}
      />
      <Typography className={classes.heading} variant='h3'>
        Login
      </Typography>
      <div
        style={{ marginTop: "70px", display: "flex", flexDirection: "column" }}
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
          label='Password'
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
      >
        Login
      </Button>
    </div>
  );
}

export default MobileLogin;
