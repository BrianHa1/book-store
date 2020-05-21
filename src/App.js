import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "../src/components/ProtectedRoutes";
import "./App.css";
import SignedIn from "../src/View/SignedIn";
import MyBookshelf from "../src/View/MyBookshelf";

// app runs here
function App() {
  // these variables are for if the user is logged in or not
  const [isUserLoggedIn, setUserLoggedIn] = useState();

  return (
    <div className="App">
      {/* BrowserRouter included here because Switch can't be used outside of a router */}
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={propsFromRouter => (
              <SignedIn
                {...propsFromRouter}
                setUserLoggedIn={setUserLoggedIn}
              />
            )}
          />
          <ProtectedRoute
            exact
            path="/my-bookshelf"
            component={MyBookshelf}
            isUserLoggedIn={isUserLoggedIn}
            setUserLoggedIn={setUserLoggedIn}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;