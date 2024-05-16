import React from "react";
import UploadHeroes from "../Heroes/UploadHeroes";
import About from "../homelayout/About";
import Service from "./Service";
import Team from "./Team";
import { useEffect } from "react";
import { useContext } from "react";
import { UploadContext } from "../context/UploadProvider";
const AboutLayout = () => {
    const {aos_init} = useContext(UploadContext)
          
    useEffect(() => {
        aos_init()
    }, []);
    return (
        <>
            <main id="main">
                <UploadHeroes section="About" hero="abouthero"/>
                <About/>
                <Service/>
                <Team/>
            </main>

            
        </>
    )
}
export default AboutLayout