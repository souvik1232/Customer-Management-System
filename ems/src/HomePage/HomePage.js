import { Hidden } from "@material-ui/core";
import React from "react";
import UserListMobile from "./UserListMobile";
import UserListTable from "./UserListTable";

function HomePage() {
  return (
    <>
      <Hidden xsDown>
        <UserListTable />
      </Hidden>
      <Hidden smUp>
        <UserListMobile />
      </Hidden>
    </>
  );
}

export default HomePage;
