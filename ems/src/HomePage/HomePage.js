import { Hidden } from "@material-ui/core";
import React from "react";
import UserListMobile from "./UserListMobile";
import UserListTable from "./UserListTable";

function HomePage(props) {
  const { setToken } = props;
  return (
    <>
      <Hidden xsDown>
        <UserListTable setToken={setToken} />
      </Hidden>
      <Hidden smUp>
        <UserListMobile setToken={setToken} />
      </Hidden>
    </>
  );
}

export default HomePage;
