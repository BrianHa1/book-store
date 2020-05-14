import React from "react";
// import { Route } from "react-router-dom";

const MyBookshelf = ({ setUserLoggedIn }) => {
    return (
        <div>
            <h1>You are logged in.</h1>
            <button onClick={() => setUserLoggedIn(false)}>Log Out</button>
        </div>
    );
};

export default MyBookshelf;
