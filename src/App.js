import React, { useEffect, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";
import SignupPage from "./Pages/Signup";
import LoginPage from "./Pages/Login";
import { AuthContext, FirebaseContext } from "./store/Context";
import CreatePage from "./Pages/Create";
import ViewPost from "./Pages/ViewPost";
import Post from "./store/postcontext";
function App() {
  const { userSet } = useContext(AuthContext);
  const { Firebase } = useContext(FirebaseContext);

  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      userSet(user);
    });
  });
  return (
    <Post>
      <div>
        <Router>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/create">
            <CreatePage />
          </Route>
          <Route path="/view">
            <ViewPost />
          </Route>
        </Router>
      </div>
  </Post>
  );
}

export default App;
