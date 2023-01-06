import useForm from "../../Hooks/useForm";
import React from "react";
import Logo from "../../olx-logo.png";
import "./Signup.css";
import Loading from "../spinner/spinner";
import { Link } from "react-router-dom";

export default function Signup() {
  const {
    email,
    password,
    username,
    phone,
    usererr,
    emailerr,
    passworderr,
    phoneerr,
    getform,
    isloading,
    validate,
  } = useForm();

  return (
    <>
      {isloading ? (
        <Loading />
      ) : (
        <div className="signupParentDiv">
          <img className="logo" width="200px" height="200px" src={Logo} alt=""></img>
          <form onSubmit={getform}>
            <label htmlFor="fname">Username</label>
            <br />
            <input
                className="input"
                value={username}
                type="text"
              onChange={(e)=>validate(e.target.name,e.target.value)}
              id="username"
              name="username"
            />
            <p className='error' >{usererr}</p>
            <br />
            <label htmlFor="fname">Email</label>
            <br />
            <input
                className="input"
                value={email}
                type="text"
              onChange={(e)=>validate(e.target.name,e.target.value)}
              id="email"
              name="email"
              />
              <p className='error' >{emailerr}</p>
            <br />
            <label htmlFor="lname">Phone</label>
            <br />
            <input
                className="input"
                value={phone}
                type="number"
              onChange={(e)=>validate(e.target.name,e.target.value)}
              id="phone"
              name="phone"
              />
              <p className='error' >{phoneerr}</p>
            <br />
            <label htmlFor="lname">Password</label>
            <br />
            <input
                className="input"
                value={password}
                type="password"
              onChange={(e)=>validate(e.target.name,e.target.value)}
              id="pass"
              name="password"
              />
              <p className='error' >{passworderr}</p>
            <br />
            <br />
            <button>Signup</button>
          </form>
         <Link to='/login'>login</Link>
        </div>
      )}
    </>
  );
}
