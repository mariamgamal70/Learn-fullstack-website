import React from "react";
import backend from "../images/backend.png"
import frontend from "../images/frontend.png"
import database from "../images/database2.png"
function ProductKeyFeatures(){
    return (
      <section
        className="d-flex flex-column align-items-center p-5 bg-black text-white"
        style={{
          height: "100dvh",
        }}
      >
        <h1>Key features</h1>
        <br></br>
        <br></br>

        <p className="w-50 text-center p-3">
          We offer programming courses for the web development track to help you
          secure a job in the tech community
        </p>
        <div className="d-flex justify-content-around align-items-center w-100">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front p-5">
                <h1>Frontend</h1>
                <img src={frontend} style={{ width: "100px" }} />
              </div>
              <div className="flip-card-back p-1">
                <p>HTML</p>
                <p>CSS</p>
                <p>Javascript</p>
                <p>React</p>
                <p>Angular</p>
                <p>etc...</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front p-5">
                <h1>Backend</h1>
                <img src={backend} style={{ width: "100px" }} />
              </div>
              <div className="flip-card-back p-1">
                <p>Flask</p>
                <p>Node.js</p>
                <p>Django</p>
                <p>PHP</p>
                <p>etc...</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front p-5">
                <h1>Database</h1>
                <img src={database} style={{ width: "100px" }} />
              </div>
              <div className="flip-card-back p-1">
                <p>MySQL</p>
                <p>MongoDB</p>
                <p>PostgreSQL</p>
                <p>etc...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
export default ProductKeyFeatures;