 import React, { useContext, useEffect } from "react";
 import axios from "axios";
 import axiosClient from "../../axios";
 import setContext from "../context/SetContext";
 import { UploadContext } from "../context/UploadProvider";

 const UploadsLoader = async (url)=>{
          return await axiosClient.get(url)
  };

  export default UploadsLoader
