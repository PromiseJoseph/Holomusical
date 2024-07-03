import React, { useEffect } from "react";
import HomeHeroes from "../Heroes/HomeHeroes";
import Features from "./About";

import { useContext } from "react";
import { UploadContext } from "../context/UploadProvider";
import Trending from "./TrendingLayout";
import Miscellaneous from "./MiscellaneousLayout";

const HomeLayout = () => {
    const { aos_init } = useContext(UploadContext)
    useEffect(() => {
        aos_init()
    }, [])

    return (
        <>
            <HomeHeroes />
            <Trending/>
            <Features/>
            <Miscellaneous/>
        </>
    )
}
export default HomeLayout