import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./style";
import image1 from "../LandingPage/login.png";
import CssTextField from "../components/customtextfield";

function MobileLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    !!email && !!password && navigate("/userHome");
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
