import React from "react";
import { Link } from "react-router-dom";
import { IoLogIn } from "react-icons/io5";
const Header = ({ userRole, setUserRole }) => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "black" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
            CYBER-SECURITY
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/secureCommunication">
                  SecureCommunication
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/intrusionDetection">
                  IntrusionDetection
                </Link>
              </li>
              {userRole === "admin" ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/auth">
                    <IoLogIn fontSize={25} />
                  </Link>
                </li>
              )}

              {userRole === "admin" && (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    onClick={() => setUserRole("user")}
                  >
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
