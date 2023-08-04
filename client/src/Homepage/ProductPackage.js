import React from "react";
import { ReactDOM } from "react";
import roadmap from "../images/roadmap.png";

function ProductPackage(){
    return (
      <section className="bg-black text-white">
        <br></br>

        <div className="d-flex flex-column justify-content-around" style={{height:"150dvh"}}>
          <div>
          <h3
            className="float-left  text-center  service-divs rounded"
            style={{
              backgroundColor: "#2411CB",
              boxShadow: "0 0 15px #2411CB",
            }}
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            Seeking a new job security?
          </h3>
          </div>

            <div>
          <h3
            className="float-right  text-center h3 service-divs rounded"
            style={{
              backgroundColor: "#d70fb3",
              boxShadow: "0 0 15px #d70fb3",
            }}
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            Dont know where to start from?
          </h3>
          </div>
            <div>
          <h3
            className="float-left  text-center h3 service-divs rounded"
            style={{
              backgroundColor: "#9932cc",
              boxShadow: "0 0 15px rgba(206, 109, 255, 5)",
            }}
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            Unable to choose the technologies you want to learn?
          </h3>
          </div>
          <div
            className=" d-flex flex-column justify-content-center align-items-center"
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            <h3>You came to the right place</h3>
            <h3> Start your programming journey with us!</h3>
            <br></br>
            <img src={roadmap} />
          </div>
        </div>
      </section>
    );
}
export default ProductPackage;