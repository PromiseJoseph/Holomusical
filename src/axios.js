import axios from "axios"
const axiosClient = axios.create({
    withCredentials: true,
    withXSRFToken:true,
    baseURL:`http://localhost:8000/api/`,
 })

//  axiosClient.interceptors.response.use(response=>{
//     if(response.status == "401"){
//          response.data="Request failed our engineers are working on it" 
//          return response.data
//     }
//     return response.data
//  })

export default axiosClient