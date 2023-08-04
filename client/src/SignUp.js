import React from "react";
import axios from "axios";
 
function SignUp(){
  const [signUpForm, setSignUpForm]=React.useState({
    firstname:"",
    lastname:"",
    birthdate:"",
    email:"",
    password:""
  })
  
  function HandleSubmit(event){
    event.preventDefault();
      axios
        .post("http://localhost:3001/SignUp", signUpForm)
        .then((res) => {
          window.location.href = "/SignIn";
        })
        .catch((err) => console.log(err));
  }
  
  function handleChange(event) {
    const { name, value } = event.target;
    setSignUpForm((prevSignUpForm) => ({
      ...prevSignUpForm,
      [name]: value,
    }));
  }
    return (
      <section
        className="bg-black text-white signupsection"
        style={{ height: "100dvh" }}
      >
        <div className="signupdiv pt-5">
          <form
            className="p-5 w-50 m-auto bg-black signupform"
            onSubmit={HandleSubmit}
          >
            <div className="row">
              <div className="col">
                <label htmlFor="firstname" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstname"
                  placeholder="First name"
                  aria-label="First name"
                  name="firstname"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="lastname" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                  id="lastname"
                  name="lastname"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-3 mt-3">
              <label htmlFor="birthdate" className="form-label">
                Birthdate
              </label>
              <input
                type="date"
                className="form-control"
                id="birthdate"
                name="birthdate"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3 ">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className=" w-50">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    );
}

export default SignUp;