import React from "react";

function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
            </ul>
            {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.togglemode}
              />
              <label className="form-check-label mx-2" for="flexSwitchCheckDefault">
                {props.mode === "light" ? "dark" : "light"}
              </label>
            </div>
            <div
              class="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" value="blue" name="btnradio" id="btnradio1" autocomplete="off" checked=""/>
                <label class="btn btn-outline-primary" for="btnradio1">blue</label>

                <input type="radio" class="btn-check" value="yellow" name="btnradio" id="btnradio2"  autocomplete="off"/>
                <label class="btn btn-outline-warning" for="btnradio2">yellow</label>

                <input type="radio" class="btn-check" value="red" name="btnradio" id="btnradio3" autocomplete="off"/>
                <label class="btn btn-outline-danger" for="btnradio3">red</label>

                <input type="radio" class="btn-check" value="green" name="btnradio" id="btnradio4" autocomplete="off"/>
                <label class="btn btn-outline-success" for="btnradio4">green</label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
