import React from "@material-ui/core";
import { Component } from "react";
import { useContext } from "react";
import { UserContext } from "../store/UserContext";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
  export const PrivateRoute=({component:Component, ...rest})=>{
    const userContext=useContext(UserContext);
    console.log(userContext);

    return (
      
        <Route
          {...rest}
          render={(props) => {
            if (userContext.data.isLoggedIn) {
              return <Component {...props} />;
            } 
            else {
              console.log(userContext);

              return (
                <Redirect
                  to={{
                    pathname: "/SignIn",
                    state: {
                    from: props.location,
                    },
                  }}
                /> );
            }
          }}/>
         
      ); 
}
export default PrivateRoute;