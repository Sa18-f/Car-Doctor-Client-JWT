import axios from "axios";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})
const useAxiosSecure = () => {
    useEffect(() => {
        axiosSecure.interceptors.response.use(res =>{
            return res;
        }, error => {
            console.log( 'error tracked in the interceptors' ,error.response);
            // if(error.response.status === 401 || error.response.status === 403 ){
            //     console.log('logout the user')
            // }
        })
    })

    return axiosSecure;
};

export default useAxiosSecure;