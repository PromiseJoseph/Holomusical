import React from "react";
import { NavLink } from "react-router-dom";

const HomeHeroes = () => {
    return (
        <>
            {/* <!-- ======= Hero Section ======= --> */}
            <section id="hero" className="hero d-flex align-items-center">
                <div className="container">
                    <div className="row" >
                        <div className="col-xl-4">
                            <h2 data-aos="fade-up">Stream And Download Your Favs </h2>
                            <blockquote data-aos="fade-up" data-aos-delay="100">
                                <p>We provide you  latest and amazing songs to stream and download with the ability to make posts about your favourite songs in a different section </p>
                            </blockquote>
                            <div className="d-flex" data-aos="fade-up" data-aos-delay="200">

                                <NavLink className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Play Music</span></NavLink>
                            </div>

                        </div>
                    </div>

                </div>

            </section>{/*<!-- End Hero Section -->*/}
        </>
    )
}

export default HomeHeroes