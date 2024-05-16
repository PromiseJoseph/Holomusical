import React, { useContext } from "react";
import './assets/css/main.css'
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { UploadContext } from "./components/context/UploadProvider";

const Layout = () => {
    
    const { aos_init } = useContext(UploadContext)
   
    useEffect(() => {
        aos_init()
    }, [])
   
    return (
        <>
        
            <Header />
            <Outlet/>
            <Footer/>
        
        </>

    )
}
export default Layout