import React from "react";

function NavBar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Connect
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link enabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="false"
                >
                  Contact Us
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Utilities
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Housing Services
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Grocerry and Food Services
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Healthcare Services
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Educational Institutions
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Transportation Services
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Community Services
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Financial Services
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Emergency Services
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Government Services
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Entertainment and Leisure:
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Technology Services
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
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
