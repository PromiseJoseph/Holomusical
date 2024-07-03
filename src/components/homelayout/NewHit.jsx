import React, { useState } from "react";

const NewHit = (props) => {
    const[control,setControl]= useState("bi bi-play-circle")
    //handles play 
  const playAudio = (id, e) => {
    const audio = document.getElementById(`${id}`)
    
    if (e.target.id =="pause") {
      audio.play()
      e.target.setAttribute("id", "play")
      setControl("bi bi-pause-circle")
    }
    else if (e.target.id = "play") {
      audio.pause()
      e.target.setAttribute("id", "pause")
      setControl("bi bi-play-circle")
    }
  }
    return (
        
        <>
            {/* Single Top Item */}
            <div className="single-new-item d-flex align-items-center justify-content-between mt-2" data-aos="fade-up" data-aos-delay="200">
                <div className="first-part d-flex align-items-center">
                    <div className="thumbnail">
                        <img src={props.img_path} alt={props.name} />
                    </div>
                    <div className="content-">
                        <h6>{props.artist}</h6>
                        <p>{props.name}</p>
                    </div>
                </div>
                <audio preload="auto" src={props.stream_path} controlsList="nodownload"  allowtransparency="false" id={props.id} />
                <div id="pause" className="text-center cursor-pointer fs-2 mb-2 " onClick={(e) => { playAudio(props.id, e) }}>
                    <i className={control} style={{ cursor: "pointer" }}  ></i>
                </div>
            </div>
        </>
    )
}
export default NewHit