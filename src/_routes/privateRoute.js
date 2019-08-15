import React from "react";
import {Route,Redirect} from "react-router-dom";

export const PrivateRoute = ({ component: Component,isAuthorized=true,isAuthenticated, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? isAuthorized ? <Component {...props} />
          : <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          : <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        }
      />
    );
  }