import React, { useState } from "react";

import { createContext } from "react";
import setContext from "./SetContext";
import { useContext } from "react";

export const UploadContext = createContext();

const UploadProvider = ({ children }) => {
const [data,setData] =useState([]);
const [status,setStatus]= useState(false)
const aos_init = ()=>{
    AOS.init({
      duration: 800,
      easing: 'slide',
      once: true,
      mirror: false
    });
  }
const addFav= (e)=>{
    new Promise((resolve) => {
    setTimeout(resolve( console.log(e)), 4000)
    })
}

let fetchedData=[] 
    const provider=<UploadContext.Provider value={{data,setData,fetchedData,addFav,status,setStatus,aos_init}}>
            {children}
        </UploadContext.Provider>
     
    return (
        provider   
    )
}

export default UploadProvider