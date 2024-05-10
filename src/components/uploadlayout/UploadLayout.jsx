import React, { useContext, useEffect } from "react"
import UploadsLoader from "../api/UploadsLoader"
import UploadHeroes from "../Heroes/UploadHeroes"
import Uploads from "./Uploads"
import axios from "axios"
import axiosClient from "../../axios"

import { UploadContext } from "../context/UploadProvider"
const UploadLayout = () => {
    const { data,status} = useContext(UploadContext)
    return (
        <>
            <main id="main">
                <UploadHeroes section= "Uploads"/>
                <div className="" id="portfolio">

                    <section className="portfolio sections-bg">
                        <div className="container" data-aos="fade-up">
                            <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
                                {
                                   status === true ?
                                        data.map((item) => {
                                        return (
                                            <Uploads
                                                id={item.id} 
                                                name={item.name}
                                                description={item.description}
                                                artist={item.artist}
                                                img_path={item.img_path}
                                            />
                                        )
                                    })
                                    :
                                    <>
                                   <h1 style={{color:"white"}}>No Available Item  </h1> 
                                   </>
                                }
                            </div>
                        </div>
                    </section>
                </div>
            </main>

        </>
    )
}
export default UploadLayout