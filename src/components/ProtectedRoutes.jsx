import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({
    component: Component,
    isUserLoggedIn,
    setUserLoggedIn,
    ...restOfPropsFromParent
}) => {
    return (
        <Route 
            {...restOfPropsFromParent}
            render={propsFromRouter => {
                return isUserLoggedIn ? (
                    <Component 
                        {...propsFromRouter}
                        setUserLoggedIn={setUserLoggedIn}
                    />
                ) : (
                    <Redirect
                        to="/"
                        {...propsFromRouter}
                        {...restOfPropsFromParent}
                    />
                );
            }}
        />
    );
};