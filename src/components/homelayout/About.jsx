import React from "react"

const About = () => {
    return (
        <>

            <section id="why-us" className="why-us mb-4">
                <div className="container" data-aos="fade-up">

                    <div className="section-header">
                        <h2>Why Us</h2>

                    </div>

                    <div className="row g-0" data-aos="fade-up" data-aos-delay="200">

                        <div className="col-xl-5 img-bg" style={{ backgroundImage: "url('img/why-us-bg.jpg')" }}></div>
                        <div className="col-xl-7 slides p-5  position-relative">
                            <div className="item">
                                <h3 className="mb-3">Let's give you the excitement</h3>
                                <h4 className="mb-3">stay connected with us for thrilling uploads</h4>
                                <p>Stream and download favs at your covenient space and time</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           </>
    )
}

export default About