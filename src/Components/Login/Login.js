import React, { useState, useContext } from "react";
import { FirebaseContext } from "../../store/Context";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../olx-logo.png";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const handlelogin = (e) => {
    e.preventDefault();
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <div className="loginParentDiv">
        <img className="logo" width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handlelogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id="email"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="password"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to='/signup'>signup</Link>
      </div>
    </div>
  );
}

export default Login;
