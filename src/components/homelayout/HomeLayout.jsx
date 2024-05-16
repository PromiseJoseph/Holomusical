import React, { useEffect } from "react";
import HomeHeroes from "../Heroes/HomeHeroes";
import Features from "./About";
import UploadsStatic from "./UploadsStatic";
import { useContext } from "react";
import { UploadContext } from "../context/UploadProvider";

const HomeLayout = () => {
    const {aos_init} = useContext(UploadContext)
    useEffect(() => {
         aos_init()
        }, [])

    return (
        <>
            <HomeHeroes />
            <UploadsStatic />
            <Features/>
        </>
    )
}
export default HomeLayout