import React, { useContext, useEffect, useState } from "react"
import UploadHeroes from "../Heroes/UploadHeroes"
import Uploads from "./Uploads"
import { Data } from "../Data/Data"
import { UploadContext } from "../context/UploadProvider"


const UploadLayout = () => {
    const { aos_init } = useContext(UploadContext)
    useEffect(() => {
        aos_init()},[])
    return (
        <>
            <main id="main">
                <UploadHeroes section="Uploads" hero="uploadhero" />
                <UploadFormat />
            </main>

        </>
    )
}
export default UploadLayout


export const UploadFormat = () => {
    const data = Data()
    console.log(data)
    return (
        <div className="" >
            <section className="portfolio sections-bg">
                <div className="container" data-aos="fade-up">
                    <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
                        {
                            data ?
                            data.map((item) => {
                                return (
                                    <Uploads
                                        id={item.id}
                                        name={item.name}
                                        description={item.description}
                                        artist={item.artist}
                                        img_path={item.img_path}
                                        artist_image={item.artist_image}
                                        stream_path={item.stream_path}
                                        download_path={item.download_path}
                                    />
                                )
                            })
                            : null
                        }
                    </div>
                </div>
            </section>
        </div>

    )
}
