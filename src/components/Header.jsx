import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// import setContext from "./context/UploadProvider";
export const appName = "HOLOMUSICAL"

const Header = () => {
  useEffect(() => {
    const selectHeader = document.querySelector('#header');
    if (selectHeader) {
      document.addEventListener('scroll', () => {
        window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
      });
    }
  })
  
  /**
     * Mobile nav toggle
     */

  const mobileNavToogle = event => {
    event.preventDefault();
    const mobileNavShow = document.querySelector('.mobile-nav-show');
    const mobileNavHide = document.querySelector('.mobile-nav-hide');
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  


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
            
            <i className="mobile-nav-toggle mobile-nav-show bi bi-list" onClick={e => mobileNavToogle(e)}></i>
            <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" onClick={e => mobileNavToogle(e)}></i>

            <nav id="navbar" className="navbar">
              <ul>

                <li><NavLink to={"/"}
                >Home</NavLink>  </li>

                <li><a href="#">Blog</a></li>

                <li><NavLink to="/uploads"
                ><span>Uploads</span> </NavLink> </li>

                {/* <li><NavLink to={"/about"}
                >About</NavLink></li> */}

                <li><a href="#">Portfolio</a></li>

                <li> <NavLink to={"/contact"}
                >Contact</NavLink></li>
                
              </ul>
            </nav>{/*<!-- .navbar -->*/}

          </div>
        </header>{/*<!-- End Header -->*/}
      </div>
    </>
  )
}
export default Header


