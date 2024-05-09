import React from "react";
import { useContext } from "react";
import setContext from "../context/SetContext";
// import setContext from "./context/UploadProvider";
import "../../assets/css/style.css"
import { NavLink } from "react-router-dom";


const UploadsStatic = () => {
  //  const [favourite,setFavourite]= useContext(setContext)
  //  const Uploads= useContext(setContext);
  // const addfav= ()=>{
  //   setFavourite(favourite +1)
  //   console.log(favourite)
  // }

  const trending = [
    "img/trending/no1.jpg",
    "img/trending/no2.jpg",
    "img/trending/no3.jpg",
  ]
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
      <div className="" id="portfolio">
       
        <section className="portfolio sections-bg">
        <div className="text-center text-white p-3  font-4">
          <div className="section-header">
          <h2 className="fs-1 col-secondary" style={{fontFamily:"monospace"}}><strong>Top Trending Three </strong></h2>
          </div>
        </div>
          <div className="container" data-aos="fade-up">

            <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
              <div className="col " style={{ marginBottom: `${-1}px` }}>
                <div className="card" id="upload_single">
                  <img className="card-img-top w-100 d-block fit-cover" style={height} src={trending[0]} />
                  <div className="card-body p-4">
                    <h4 className="card-title">Lorem libero donec</h4>
                    <p className="card-text"></p>
                    <div className="d-flex" style={d_flex}>
                      <img className="rounded-circle flex-shrink-0 me-3 fit-cover" width={50} height={50} src={trending[0]} />
                      <div>
                        <p className="fw-bold mb-0">John Smith</p>
                        <p className="text-muted mb-0">Erat netus</p>

                      </div>
                      <div className="d-flex-row text-end mt-4" style={{ marginLeft: `${80}px` }}>
                        <i className="bi-heart mx-3" fill={"red"} id="icons" />
                        <i className="bi-headset mx-3" fill={"red"} />
                        <i className="bi-plus mx-3" fill={"red"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col " style={{ marginBottom: `${-1}px` }}>
                <div className="card" id="upload_single">
                  <img className="card-img-top w-100 d-block fit-cover" style={height} src={trending[1]} />
                  <div className="card-body p-4">
                    <h4 className="card-title">Lorem libero donec</h4>
                    <p className="card-text"></p>
                    <div className="d-flex" style={d_flex}>
                      <img className="rounded-circle flex-shrink-0 me-3 fit-cover" width={50} height={50} src={trending[1]} />
                      <div>
                        <p className="fw-bold mb-0">John Smith</p>
                        <p className="text-muted mb-0">Erat netus</p>

                      </div>
                      <div className="d-flex-row text-end mt-4" style={{ marginLeft: `${80}px` }}>
                        <i className="bi-heart mx-3" fill={"red"} id="icons" />
                        <i className="bi-headset mx-3" fill={"red"} />
                        <i className="bi-plus mx-3" fill={"red"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col " style={{ marginBottom: `${-1}px` }}>
                <div className="card" id="upload_single">
                  <img className="card-img-top w-100 d-block fit-cover" style={height} src={trending[2]} />
                  <div className="card-body p-4">
                    <h4 className="card-title">Lorem libero donec</h4>
                    <p className="card-text"></p>
                    <div className="d-flex" style={d_flex}>
                      <img className="rounded-circle flex-shrink-0 me-3 fit-cover" width={50} height={50} src={trending[2]} />
                      <div>
                        <p className="fw-bold mb-0">John Smith</p>
                        <p className="text-muted mb-0">Erat netus</p>

                      </div>
                      <div className="d-flex-row text-end mt-4" style={{ marginLeft: `${80}px` }}>
                        <i className="bi-heart mx-3" fill={"red"} id="icons" />
                        <i className="bi-headset mx-3" fill={"red"} />
                        <i className="bi-plus mx-3" fill={"red"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
          </div>
          
        </section>
        <div className="text-center pb-2">
        <NavLink to={"/uploads"}  className="btn btn-primary btn-xl text-uppercase" role="button" >Check Uploads</NavLink>
            <p className="text-light"></p>
          </div>
      </div>
    </>
  )
}
export default UploadsStatic