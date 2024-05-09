import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import UploadsLoader from "../api/UploadsLoader";
import { UploadContext } from "../context/UploadProvider";

const Uploads = (props) =>{
    
    
    //favorite setting
     const {addFav} = useContext(UploadContext);


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
    return(
    <>
   
 <div className="col " style={{ marginBottom: `${-1}px` }} >
 <div className="card" id="upload_single">
   <img className="card-img-top w-100 d-block fit-cover" style={height} src={props.img_path} />
   <div className="card-body p-4">
     <h4 className="card-title">{props.name}</h4>
     <p className="card-text"></p>
     <div className="d-flex" style={d_flex}>
       <img className="rounded-circle flex-shrink-0 me-3 fit-cover" width={50} height={50} src={props.img_path} />
       <div>
         <p className="fw-bold mb-0">{props.artist}</p>
         {/* <p className="text-muted mb-0">{props.description}</p> */}

       </div>
       <div className="d-flex-row text-end mt-4" style={{ marginLeft: `${80}px` }}>
         <i className="bi-heart mx-3" fill={"red"} id="icons" onClick={ addFav} />
         <i className="bi-headset mx-3" fill={"red"} />
         <i className="bi-plus mx-3" fill={"red"} />
       </div>
     </div>
   </div>
 </div>
</div>
  
      
       
    </>
    );

}
export default Uploads
// export const UploadProvider = ({children})=>{
//     return (
//         <>
//             <Uploads.Provider >
//                 {children}
//                 <Uploads/>
//             </Uploads.Provider>
//         </>
//     )
// }