import React, { createContext, useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Uploads = (props) => {

  const[control,setControl]= useState("bi bi-play-circle")

 
  //handles play 
  const playAudio = (id, e) => {
    const audio = document.getElementById(`${id}`)

    if (e.target.id == "pause") {
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

  function updateProgress(e) {
    let propsId= e.target.getAttribute("id");
    const progress = document.getElementById(`progress-${propsId}`)
    const { duration, currentTime } = e.nativeEvent.srcElement;
    const progressPerCent = (currentTime / duration) * 100;
    progress.style.width = `${progressPerCent}%`;
  }
  // Set Progress
  function setProgress(id,e) {
    const audio = document.getElementById(id)
    const width = e.pageY + e.clientY ;
    const clickX = e.clientX;
  
    const duration = audio.duration;
    console.log(audio,width,duration,e)
    audio.currentTime = (clickX / width)*duration;

  }
  /* css */
  const height = {
    height: `${150}px`,
    // width: `${200}px`
  }
  
  const d_flex = {
    paddingBottom: `${0}px`,
    marginBottom: `${-1}px`,
    marginRight: `${-2}px`,
  }
  return (
    <>

      <div className="col" style={{ marginBottom: `${-1}px` }} >
        <div className="card" id="upload_single" >
          <img className="card-img-top w-60 d-block fit-cover" style={height} src={props.img_path}  id={props.name}/>
          <div className="card-body p-4">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text"></p>
            <div className="d-flex" style={d_flex}>
              <img className="rounded-circle flex-shrink-0 me-3 fit-cover" width={50} height={50} src={props.artist_image} />
              <div> 
                <p className="fw-bold mb-0">{props.artist}</p>
                {/* <p className="text-muted mb-0">{props.description}</p> */}
              </div>
            </div>
          </div>
          <div className="d-flex mb-1 text-center mx-2">
            <NavLink to={props.download_path} className="btn btn-light text-dark mb-2"><i className="bi bi-download fs-5 mx-2"></i></NavLink>
          </div>
          <div class="progress-container" id="progress-container" onClick={e=>{setProgress(props.id,e)}} >
            <div class="progress" id={`progress-${props.id}`} ></div>
          </div>
          <audio preload="auto"  src={props.stream_path} controlsList="nodownload" onTimeUpdate={(e)=>updateProgress(e)}  height="25" width="250" style={{ border: 0 }} allowtransparency="false" id={props.id} />
          <div id="pause" className="text-center cursor-pointer fs-2 mb-2 " onClick={(e) => { playAudio(props.id, e) }}> 
          <span className="fw-bolder fs-4 me-2 text-dark">{"<< "}</span>
          <i className={control} style={{cursor:"pointer"}}></i>
          <span className="bold fs-4 fw-bolder mx-2">{" >>"}</span>
          </div>
         
        </div>
      </div >

    </>
  );

}
export default Uploads;