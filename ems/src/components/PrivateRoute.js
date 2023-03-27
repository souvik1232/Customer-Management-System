import React from "react";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("token") ? (
          <Component {...props} {...rest} />
        ) : (
          <Route path='/somePath' element={<Navigate replace to='/' />} />
        )
      }
    />
  );
};
export default PrivateRoute;
