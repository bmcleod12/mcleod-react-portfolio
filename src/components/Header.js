import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <Link to="/" className="navbar-brand">Brenna McLeod</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
          <li className="nav-item">
       <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
      Home
         </Link>
       </li>
     <li className="nav-item">
         <Link
              to="/about"
              className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
