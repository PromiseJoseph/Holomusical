import React from "react";
import { appName } from "./Header";

const Footer = () => {
    return (
        <>
            <footer id="footer" className="footer pb-3">

                <div className="footer-content">
                    <div className=" text-center d-block">

                        <div className="copyright col">
                            &copy; Copyright <strong><span>{appName}</span></strong>. All Rights Reserved
                            
                        </div>
                       
                    </div>
         <div className="social-links  d-flex mt-3 text-center"  >
                                <a href="#" className="twitter  mx-2"><i className="bi bi-twitter"></i></a>
                                <a href="#" className="facebook mx-2 "><i className="bi bi-facebook"></i></a>
                                <a href="#" className="instagram mx-2 "><i className="bi bi-instagram"></i></a>
                                <a href="#" className="linkedin mx-2"><i className="bi bi-linkedin"></i></a>
                                <a href="#" className="linkedin mx-2"><i className="bi bi-github"></i></a>
                        </div>

                </div>

            </footer>

            <a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

            {/* <div id="preloader"></div> */}
        </>
    )
}

export default Footer