import React from "react";
import { Hidden } from "@material-ui/core";
import AdduserDesktop from "./AdduserDesktop";
import AddUserMobile from "./AddUserMobile";

function AddUser(props) {
  const { setToken } = props;
  return (
    <>
      <Hidden xsDown>
        <AdduserDesktop setToken={setToken} />
      </Hidden>
      <Hidden smUp>
        <AddUserMobile setToken={setToken} />
      </Hidden>
    </>
  );
}

export default AddUser;
