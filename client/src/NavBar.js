import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function NavBar(){
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  React.useEffect(() => {
    const sessionId = getCookie("sessionId");
    setIsAuthenticated(!!sessionId);
  }, []);

    function getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    }

     function handleLogout() {
    axios.get("http://localhost:3001/logout").then(() => {
      setIsAuthenticated(false);
    })
  };
    return (
      <nav
        className="sticky-top second-navbar"
        style={{ backgroundColor: "darkorchid" }}
      >
        <ul className="removebullets secondnav d-flex flex-row justify-content-between mb-0">
          <div>
            <li>
              <Link to="/" id="logo">
                *SoftCode
              </Link>
            </li>
          </div>
          <div className="d-flex flex-row rightsidenav">
            <li>
              <Link to="/aboutus" className="text-white mt-3 h5">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/ourservices" className="text-white mt-3 h5">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/ouremployees" className="text-white mt-3 h5">
                Our Employees
              </Link>
            </li>
            <li>
              <Link to="/contactus" className="text-white mt-3 h5 ">
                Contact Us
              </Link>
            </li>
            <li>
              {isAuthenticated ? (
                <Link
                  className="mt-3 h5 bg-white rounded"
                  id="signin-navbar"
                  style={{ color: "darkorchid" }}
                  to="/"
                  onClick={handleLogout}
                >
                  Sign Out
                </Link>
              ) : (
                <Link
                  className="mt-3 h5 bg-white rounded"
                  id="signin-navbar"
                  style={{ color: "darkorchid" }}
                  to="/SignIn"
                >
                  Sign In
                </Link>
              )}
            </li>
          </div>
        </ul>
      </nav>
    );
}
export default NavBar;