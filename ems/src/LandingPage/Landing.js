import { Hidden } from "@material-ui/core";
import React from "react";
import Loginpage from "./Loginpage";
import MobileLogin from "./MobileLogin";

function Landing() {
  return (
    <>
      <Hidden xsDown>
        <Loginpage />
      </Hidden>
      <Hidden smUp>
        <MobileLogin />
      </Hidden>
    </>
  );
}

export default Landing;
