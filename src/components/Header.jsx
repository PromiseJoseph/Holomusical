import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
// import setContext from "./context/UploadProvider";
export const appName = "HOLOMUSICAL"
 
const Header = () => {
  

  return (
    <>
      <div className="page-index">

        {/* <!-- ======= Header ======= --> */}
        <header id="header" className="header d-flex align-items-center fixed-top">
          <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

            <a href="index.html" className="logo d-flex align-items-center">
              {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
              <img src="assets/img/logo.png" alt="" />
              {/* <input/> */}
              <h1 className="d-flex align-items-center">{appName}</h1>
            </a>

            <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
            <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

            <nav id="navbar" className="navbar">
              <ul>
                <li><NavLink to={"/"} className={({Active})=>{
                  {Active ? "text-#56b8e6" : "text-secondary"}
                }} >Home</NavLink></li>
                <li><a href="#">Favourite</a></li>

                <li className="dropdown"><NavLink to={"/uploads"}><span>Uploads</span> <i className="bi bi-chevron-down dropdown-indicator"></i> </NavLink>
                  <ul>
                    <li><a href="#">Foreign</a></li>
                    <li><a href="#">Naija</a></li>
                  </ul>
                 
                </li>
                <li><NavLink to={"/about"} className={({isActive})=>{
                  {isActive ? "text-#56b8e6" : "text-secondary"}
                }} >About</NavLink></li>
                <li><a href="#">Portfolio</a></li>
                <li> <NavLink to={"/contact"} className={({isActive})=>{
                  {isActive ? "text-#56b8e6" : "text-secondary"}
                }}>Contact</NavLink></li>
              </ul>
            </nav>{/*<!-- .navbar -->*/}

          </div>
        </header>{/*<!-- End Header -->*/}
      </div>

    </>
  )
}
export default Header


