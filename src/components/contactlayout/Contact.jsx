import React from "react";
import { useState,useEffect } from "react";


const Contact = () => {
    const [review,setReview] = useState({ 
        name:"",
        email:"",
        subject:"",
        message:"",

    });
     

    // useEffect(()=>{
    //     setReview(reviewData);
    // },[reviewData])
   
    return (
        <>
            
            <section id="contact" className="contact">
                <div className="container position-relative" data-aos="fade-up">

                    <div className="row gy-4 d-flex justify-content-end">
                                { /* preview */}
                        <div className="col-lg-6" data-aos="flip-right" data-aos-delay="250">

                            <div className="card">
                                <div className="card-body">
                                    <div className=" d-flex flex-row mb-1">
                                        <h5 className="card-title mx-4 text-muted f-4">Name :</h5>
                                        <h6 className="mt-1"  style={{textTransform:"capitalize"}} > {review.name}</h6>
                                    </div>
                                    <div className=" d-flex flex-row mb-1 ">
                                        <h5 className="card-title mx-4 text-muted f-4" >Email :</h5>
                                        <h6 className="mt-1"  style={{textTransform:"capitalize"}}> {review.email}</h6>
                                    </div>

                                    <h6 className="text-muted card-subtitle mt-2 mb-2 text-center f-2" style={{textTransform:"uppercase"}}>{review.subject}</h6>
                                    <p className="card-text" style={{textTransform:"capitalize"}}>{review.message}</p>
                                </div>
                            </div>
                        </div>
                                {/* form */}
                        <div className="col-lg-6" data-aos="flip-right" data-aos-delay="250">

                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name"  value={review.name} placeholder="Your Name" onChange={e =>setReview({...review, name:e.target.value})} required/>
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" id="email"  value={review.email} placeholder="Your Email" onChange={e =>setReview({...review, email:e.target.value})} required/>
                                    </div>
                                </div> 
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="subject" id="subject"  value={review.subject} placeholder="Subject" onChange={e =>setReview({...review, subject:e.target.value})} required/>
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Message" onChange={e =>setReview({...review, message:e.target.value})} required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>

                        </div>

                    </div>

                </div>
            </section>

     

        </>
    );
}
export default Contact