import React from "react";
import "../../assets/css/style.css"
import { NavLink } from "react-router-dom";
import { Trending } from "../Data/Data";


const TrendingLayout = () => {

  const trending = Trending()

  return (
    <>
      <div className="dark-background" id="">

        <section className="portfolio sections-bg ">
          <div className="text-center text-white p-3  font-4">
            <div className="section-header">
              <h2 className="fs-1 text-light" style={{ fontFamily: "monospace" }}><strong>Top Trendings </strong></h2>
            </div>
          </div>

          <div className="col-12">
            <div className="albums-slideshow owl-carousel">
              <div className="container" data-aos="fade-up">

                <div className="row gy-3 row-cols-1 row-cols-md-2 row-cols-xl-3">
                  {/* SingleTrend here */}
                  {
                    trending ?
                      trending.map((item) => {
                        return (
                          <SingleTrend
                            name={item.name}
                            artist={item.artist}
                            img_path={item.img_path}
                            artist_image={item.artist_image}
                          />
                        )
                      })
                      : null
                  }

                </div>

              </div>
            </div>
          </div>

        </section>
        <div className="text-center pb-2">
          <NavLink to={"/uploads"} className="btn btn-primary btn-xl text-uppercase" role="button" >Check Uploads</NavLink>
          <p className="text-light"></p>
        </div>
      </div>
    </>
  )
}
export default TrendingLayout

export const TrendingArtist = (props) => {
  return (
    <>
      <div className="single-artists d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
        <div className="thumbnail">
          <img src={props.artist_image} alt={props.artist} />
        </div>
        <div className="mx-3 fs-4 text-muted">
          <p>{props.artist}</p>
        </div>
      </div>
    </>
  )
}

export const SingleTrend = (props) => {
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
      <div className="col " style={{ marginBottom: `${-1}px` }}>
        <NavLink to={`/uploads#${props.name}`}>
        <div className="card" id="upload_single">
          <img className="card-img-top w-100 d-block fit-cover" style={height} src={props.img_path} />
          <div className="card-body p-4">
            <h4 className="card-title">{props.name}</h4>
            <p className="card-text"></p>
            <div className="d-flex" style={d_flex}>
              <img className="rounded-circle flex-shrink-0 me-3 fit-cover" width={50} height={50} src={props.artist_image} />
              <div>
                <p className="fw-bold mb-0">{props.artist}</p>
              </div>
            </div>
          </div>
        </div>
        </NavLink>
      </div>
    </>
  )
}