import React, { createContext, useContext, useEffect } from "react";


const Uploads = (props) => {

  /* css */
  const height = {
    height: `${200}px`,
  }
  const width = {
    height: `${50}px`,
  }
  const d_flex = {
    paddingBottom: `${0}px`,
    marginBottom: `${-1}px`,
    marginRight: `${-2}px`,
  }
  return (
    <>
      

      <div className="col " style={{ marginBottom: `${-1}px` }} >
        <div className="card" id="upload_single">
          <img className="card-img-top w-100 d-block fit-cover" style={height} src={props.img_path} />
          <div className="card-body p-4">
            <h4 className="card-title">{props.name}</h4>
            <p className="card-text"></p>
            <div className="d-flex" style={d_flex}>
              <img className="rounded-circle flex-shrink-0 me-3 fit-cover" width={50} height={50} src={props.artist_image} />
              <div>
                <p className="fw-bold mb-0">{props.artist}</p>
                {/* <p className="text-muted mb-0">{props.description}</p> */}

              </div>
            </div>

          </div>
          <div className="d-flex mb-2 text-center mx-2">
            <button href={props.download_path} className="btn btn-light text-dark mb-2"><i className="bi bi-download fs-3 mx-2"></i>Download</button>
            
          </div>
         
          <audio controls src={props.stream_path} height="25" width="250" style={{border:0}}  allowtransparency="true" />
          
        </div>
      </div>



    </>
  );

}
export default Uploads;