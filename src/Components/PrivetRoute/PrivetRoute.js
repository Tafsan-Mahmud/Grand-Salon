import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContex } from '../../App';

const PrivetRoute = ({ children, ...rest }) => {
  const [logedInUser, setLogedInUser] = useContext(UserContex);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        logedInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  )
};

export default PrivetRoute;