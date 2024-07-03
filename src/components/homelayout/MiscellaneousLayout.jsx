import React from "react";
import { Data, Trending } from "../Data/Data";
import NewHit from "./NewHit";
import { TrendingArtist } from "./TrendingLayout";

// filters number of data to be rendered
export const datafilter = (num, data) => {
    let count = 0
    let newdata = []
    for (let i = 0; i < data.length; i++) {
        count++
        count <= num ? newdata.push(data[i]) : "";
    }
    console.log(newdata)
    return (newdata)
}

const MiscellaneousLayout = () => {
    const data = datafilter(5, Data())
    const trending = Trending()
    return (
        <>
            <section className="miscellaneous-area section-padding-50-0">
                <div className="text-center text-white p-3  font-4">
                    <div className="section-header">
                        <h2 className="fs-1 text-dark" style={{ fontFamily: "monospace" }}><strong>See what’s new </strong></h2>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {/* NewHit section  here */}
                        <div className="col-12 col-lg-6">
                            <div className="new-hits-area mb-20">
                                <div className="section-heading text-left mb-20 " data-aos="fade-up" data-aos-delay="200">
                                    
                                    <h2>New Hits</h2>
                                </div>
                                {/* NewHit here */}
                                {
                                    data ?
                                        data.map((item) => {
                                            return (
                                                <NewHit
                                                    id={item.id}
                                                    name={item.name}
                                                    artist={item.artist}
                                                    img_path={item.img_path}
                                                    stream_path={item.stream_path}
                                                />
                                            )
                                        })
                                        : null
                                }
                            </div>
                        </div>
                        {/* TrendingArtist section  here  */}
                        <div className="col-12 col-lg-6">
                            <div className="popular-artists-area mb-20">
                                <div className="section-heading text-left mb-20" data-aos="fade-up" data-aos-delay="200">
                                    <h2>Trending Artists</h2>
                                </div>

                                {/* TrendingArtist  here */}
                                {
                                    trending ?
                                        trending.map((item) => {
                                            return (
                                                <TrendingArtist
                                                    artist={item.artist}
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
            </section >
        </>
    )
}
export default MiscellaneousLayout