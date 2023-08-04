import React from "react";
import { Link } from "react-router-dom";


function Intro(){
    return (
      <section className="intro">
        <div
          className=" d-flex flex-column justify-content-center align-items-center"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <div>
            <h1
              className="p-3  "
              style={{ color: "white", }}
            >
              Unleash a New Future
            </h1>
          </div>
          <div className="introbutton">
            <Link to="/SignUp">Sign Up Now!</Link>
          </div>
        </div>
      </section>
    );
}
export default Intro;