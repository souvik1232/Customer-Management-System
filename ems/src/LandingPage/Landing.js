import { Hidden } from "@material-ui/core";
import React from "react";
import Loginpage from "./Loginpage";
import MobileLogin from "./MobileLogin";

function Landing(props) {
  const { setToken } = props;
  return (
    <>
      <Hidden xsDown>
        <Loginpage setToken={setToken} />
      </Hidden>
      <Hidden smUp>
        <MobileLogin setToken={setToken} />
      </Hidden>
    </>
  );
}

export default Landing;
