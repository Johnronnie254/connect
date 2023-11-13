import React from "react";

function NavBar() {
  return (
    <>
      <nav classNameName="navbar navbar-expand-lg navbar-light bg-light">
        <div classNameName="container-fluid">
          <a classNameName="navbar-brand" href="#">
            Connect
          </a>
          <button
            classNameName="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span classNameName="navbar-toggler-icon"></span>
          </button>
          <div
            classNameName="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
              <li classNameName="nav-item">
                <a classNameName="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li classNameName="nav-item">
                <a classNameName="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li classNameName="nav-item">
                <a
                  classNameName="nav-link enabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="false"
                >
                  Contact Us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Utilities
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Housing Services
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Grocerry and Food Services
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Healthcare Services
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Educational Institutions
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Transportation Services
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Community Services
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Financial Services
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Emergency Services
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Government Services
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Entertainment and Leisure:
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Technology Services
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
