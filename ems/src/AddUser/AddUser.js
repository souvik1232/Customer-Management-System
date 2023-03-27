import React from "react";
import { Hidden } from "@material-ui/core";
import AdduserDesktop from "./AdduserDesktop";
import AddUserMobile from "./AddUserMobile";

function AddUser() {
  return (
    <>
      <Hidden xsDown>
        <AdduserDesktop />
      </Hidden>
      <Hidden smUp>
        <AddUserMobile />
      </Hidden>
    </>
  );
}

export default AddUser;
