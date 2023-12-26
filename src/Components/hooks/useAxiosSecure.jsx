import axios from "axios";
// import useAuth from "./useAuth";
// import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL:  'http://localhost:5000'
});
const useAxiosSecure = () => {
    // const navigate = useNavigate()

    // const {signOutUser} = useAuth()
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        console.log('Interceptor is heated', token)
         config.headers.authorization = `bearer ${token}`
         return config;
        // Do something before request is sent
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });
    axiosSecure.interceptors.response.use(function (response) {

        return response;
      }, async(error)=> {
        const status = error?.response?.status
        console.log(status)
        if(status === 401 || status === 403){
            // await signOutUser()
            // navigate('/login')
           
        }
        return Promise.reject(error);
      });
    return axiosSecure
};

export default useAxiosSecure;