import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="header">
      <nav class="navbar navbar-expand-lg navbar-light border-bottom mb-5">
        <div class="navbar-brand px-4">
          <div class="d-inline p-3 prime">Matthew Shepardson</div>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link to="/" className="link">About</Link>
              </li>
              <li class="nav-item">
                <Link to="/portfolio" className="link">Portfolio</Link>
              </li>
              <li class="nav-item">
                <Link to="/contact" className="link">Contact</Link>

              </li>
            </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
