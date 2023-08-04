import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SignIn(){
  const [signIn, setSignIn]=React.useState({
    email:"",
    password:"",
    success:""
  })

  function HandleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3001/SignIn", signIn)
      .then((res) => {
        if (res.data === "Sign in failed") {
          setSignIn((prevSignIn) => ({
            ...prevSignIn,
            success: false,
          }));
          console.log("sign in failed");
        } else {
          // Sign-in was successful, you can redirect the user to a dashboard or home page
          console.log("Sign in successful!");
          setSignIn((prevSignIn) => ({
            ...prevSignIn,
            success: true,
          }));
           const sessionId = res.data.sessionId;
          //  console.log(sessionId)
           document.cookie = `sessionId=${sessionId}; path=/;`;
          //  console.log(document.cookie);
           window.location.href = "/profile";
        }
      })
      .catch((err) => console.log(err));
  }

  
    function handleChange(event) {
      const { name, value } = event.target;
      setSignIn((prevSignIn) => ({
        ...prevSignIn,
        [name]: value,
      }));
    }

  const warning = () => {
    return (
      <div className="alert alert-danger" role="alert">
        Sign in failed. Please check your email and password and try again.
      </div>
    );
  };
return (
  <section
    className="bg-black text-white signinsection"
    style={{ height: "100dvh" }}
  >
    <div className="d-flex flex-column justify-content-center w-25 m-auto justify-content-around h-100 ">
      <div className="signindiv bg-black">
        <form className="d-flex flex-column" onSubmit={HandleSubmit}>
          <h1 className="text-center">Sign In</h1>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="form-control"
            name="email"
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            id="password"
            name="password"
            onChange={handleChange}
            required
          />
          <br></br>
          <button type="submit">Sign In</button>
          {signIn.success === false && warning()}
          <br></br>
          <Link to="/SignUp" className="text-center">
            Dont have an account?<br></br> Click to create one!
          </Link>
        </form>
      </div>
    </div>
  </section>
);
}
export default SignIn;