import React from "react"
import ReactDOM from "react-dom"

function Footer(){
    return (
      <footer className="d-flex justify-content-between bg-black text-white">
        <div className="left-footer p-2">
          &copy; 2023 by Bitnine Global Inc. All Rights Reserved.
        </div>
        <div className="fnav-right">
          <ul className="socialmediaicons d-flex flex-row m-0">
            <li id="githubicon">
              <a href="">
                <i className="bi bi-github"></i>
              </a>
            </li>
            <li id="stackoverflowicon">
              <a href="">
                <i className="bi bi-stack-overflow"></i>
              </a>
            </li>
            <li id="youtubeicon">
              <a href="">
                <i className="bi bi-youtube"></i>
              </a>
            </li>
            <li id="twittericon">
              <a href="">
                <i className="bi bi-twitter"></i>
              </a>
            </li>
            <li id="linkedinicon">
              <a href="">
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
            <li id="facebookicon">
              <a href="">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li id="navericon">
              <a href="" className="kikor kiko-train">
                <i className="kikor kiko-naver"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
}
export default Footer;