import React, { useRef } from "react";
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [review, setReview] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",

    });
    const [msg, setMsg] = useState({
        Status: false,
        type: "",
        message: "",
    })

    const [loading, setLoading] = useState(false);

    //Email.js keys
    const KEY = {
        SERVICE_ID: "service_3chwnvn",
        TEMPLATE_ID: "template_drswrbj",
        PUBLIC_KEY: "KYOZLbrSBbE4UDZg9",
    }


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)
        emailjs
            .sendForm(KEY.SERVICE_ID, KEY.TEMPLATE_ID, form.current, {
                publicKey: KEY.PUBLIC_KEY,
            })
            .then(
                (response) => {
                    if (response == "SUCCESS!") {
                        setLoading(false)
                        setMsg({
                            Status: true,
                            type: "success",
                            message: "Your message has been sent. Thank you!"
                        })
                    }
                },
                (error) => {
                    setLoading(false)
                    if (error) {
                        setMsg({
                            Status: true,
                            type: "error",
                            message: "An error occured while sending your message!"
                        })
                    }
                },
            );
    };

    // useEffect(()=>{
    //     setReview(reviewData);
    // },[reviewData])

    return (
        <>

            <section id="contact" className="contact">
                <div className="container position-relative" data-aos="fade-up">
                    <div className="row gy-4 row-cols-1 row-cols-md-2 mb-4 ">
                        <div class="col-lg-6">
                            <div class="info-box card">
                                <i class="bi bi-telephone"></i>
                                <h3>Call Us</h3>
                                <p>...........<br />.............</p>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="info-box card">
                                <i class="bi bi-envelope"></i>
                                <h3>Email Us</h3>
                                <p>..................<br />holopals977@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-4 d-flex justify-content-end">

                        { /* preview */}
                        <div className="col-lg-6" data-aos="flip-right" data-aos-delay="250">

                            <div className="card bg-light">
                                <div className="card-body">
                                    <div className=" d-flex flex-row mb-1">
                                        <h5 className="card-title mx-4 text-muted f-4">Name :</h5>
                                        <h6 className="mt-1" style={{ textTransform: "capitalize" }} > {review.name}</h6>
                                    </div>
                                    <div className=" d-flex flex-row mb-1 ">
                                        <h5 className="card-title mx-4 text-muted f-4" >Email :</h5>
                                        <h6 className="mt-1" style={{ textTransform: "capitalize" }}> {review.email}</h6>
                                    </div>

                                    <h6 className="text-muted card-subtitle mt-2 mb-2 text-center f-2" style={{ textTransform: "uppercase" }}>{review.subject}</h6>
                                    <p className="card-text" style={{ textTransform: "capitalize" }}>{review.message}</p>
                                </div>
                            </div>
                        </div>
                        {/* form */}
                        <div className="col-lg-6" data-aos="flip-right" data-aos-delay="250">

                            <form method="post" role="form" className="php-email-form" ref={form} onSubmit={sendEmail}>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" value={review.name} placeholder="Your Name" onChange={e => setReview({ ...review, name: e.target.value })} required />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" id="email" value={review.email} placeholder="Your Email" onChange={e => setReview({ ...review, email: e.target.value })} required />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="subject" id="subject" value={review.subject} placeholder="Subject" onChange={e => setReview({ ...review, subject: e.target.value })} required />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Message" onChange={e => setReview({ ...review, message: e.target.value })} required></textarea>
                                </div>
                                
                                {loading == true ? <div className="text-center"><button type="submit" disabled>Loading...</button></div> :  <div className="text-center"><button type="submit">Send Message</button></div> }
                                {msg.Status ==true && msg.type == "success" ? <div className="text-success text-centerr"><p>{msg.message}</p></div> : 
                                msg.Status==true && msg.type == "error" ? <div className="text-danger text-center"><p>{msg.message}</p></div> : null}
                                
                            </form>

                        </div>

                    </div>

                </div>
            </section>



        </>
    );
}
export default Contact