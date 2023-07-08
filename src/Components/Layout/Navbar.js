import React from "react";
import { Link, NavLink } from "react-router-dom";

/*
Responsive behaviors
Navbars can use .navbar-toggler, .navbar-collapse, and .navbar-expand{-sm|-md|-lg|-xl|-xxl} classNamees to determine when their content collapses behind a button. 
In combination with other utilities, you can easily choose when to show or hide particular elements.

For navbars that never collapse, add the .navbar-expand className on the navbar.
For navbars that always collapse, don’t add any .navbar-expand className.
*/
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary py-4">
        <div className="container container-fluid ">
          <NavLink className="navbar-brand" to="#">
            <h5>CRUD Operation</h5>
          </NavLink>
          {/* <Link to='/'>Home</Link> */}
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <NavLink className="nav-link active" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/About"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/Contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <Link className="btn btn-outline-light w-25" to="/user/add">Add Users</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// <li className="nav-item">
//   <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
// </li>
/* <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a> */
//   <li className="nav-item active">
//   <a className="nav-link" href="#">
//     About
//   </a>
// </li>
// <li className="nav-item active">
//   <a className="nav-link" href="#">
//     Contact
//   </a>
// </li>
