import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, userRole, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      userRole === "admin" || userRole === "subadmin" ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default ProtectedRoute;
