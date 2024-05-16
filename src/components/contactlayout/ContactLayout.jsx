import React, { useContext, useEffect } from "react";
import UploadHeroes from "../Heroes/UploadHeroes";
import Contact from "./Contact";
import { UploadContext } from "../context/UploadProvider";


const ContactLayout = () => {
    const {aos_init} = useContext(UploadContext)
    useEffect(() => {
          aos_init();
    }, []);
    return (
        <>
            <main id="main">
                <UploadHeroes section="Contact" hero="contacthero"/>
                <Contact/>
            </main>
        </>
    );
}
export default ContactLayout