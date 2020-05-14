import React, { useState } from "react";

const SignedIn = ({ setUserLoggedIn, history }) => {
    // login information set up here
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // to prevent page from refreshing
    const handleOnSubmit = e => {
        e.preventDefault();
        setUserLoggedIn(true);
        history.push("/my-bookshelf");
    };

    return (
        <form onSubmit={handleOnSubmit}>
        <p>Please enter your username and password and click the Submit button to continue.</p>
        <label>Username</label>
        <input type="text"
          id="username"
          name="username"
          className="form-control"
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
        <label>Password</label>
        <input type="password"
          id="password"
          className="form-control"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    );
};

export default SignedIn;
