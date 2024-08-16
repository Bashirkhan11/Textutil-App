import React from "react";

function Nav(props){

    return <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
  <div className="container-fluid">
    <a className="navbar-brand text-warning fs-1 fw-bold border rounded-circle border-light border-5" href="/">Textutil</a>

        <div className={`form-check form-switch mx-5 text-${props.mode === "light" ? "dark" : "light"}`}>
  <input className="form-check-input" onClick={props.update} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault"> <strong>{props.mode === "light" ? "Dark Mode" : "Light Mode"}<strong/></strong></label>
</div>   
        
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold ">
        <li className="nav-item mx-3">
          <a className="nav-link active border border-light border-2" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" aria-current="page" href="/">About</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" aria-current="page" href="/">Contact Us</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="/">LogIn</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
}
export default Nav;