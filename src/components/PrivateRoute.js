import React, { useContext } from "react";
import { AuthContext } from "../context/auth";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      exact
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;

/* -----previous code below-----
return (
    <Route
      {...rest}
      exact
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );

++++++new code++++++ 
import React, { useContext } from "react";
import { AuthContext } from "../context/auth";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ component: Element, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      exact
      render={(props) =>
        user ? <Element {...props} /> : <Navigate to="/login" />
      }
    />
  );
};

export default PrivateRoute;
*/
