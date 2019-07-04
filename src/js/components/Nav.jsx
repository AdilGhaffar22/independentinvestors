import React from "react";
function Nav() {
  return (
    <div className="container">
      <nav className="navbar py-5 navbar-expand-md navbar-light bg-white">
        <a href="" className="nav-brand">
          <img src="./images/independent-investors-logo.png" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item"><a href="" className="nav-link px-2">ABOUT US</a></li>
          <li className="nav-item"><a href="" className="nav-link mx-2">TESTIMONIALS</a></li>
          <li className="nav-item"><a href="" className="nav-link">WHAT WE OFFER</a></li>
          <li className="nav-item"><a href="" className="nav-link">CONTACT US</a></li>
        </ul>
        </div>
        <button className="phone mt-4 p-1 px-2 text-white"><i className="fas fa-phone"></i> &nbsp; +44 203 695 1157</button>
      </nav>
    </div>
  )
}
export default Nav;
