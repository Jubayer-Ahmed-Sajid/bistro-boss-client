import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'https://bistro-boss-server-side-chb6ktge5-jubayer-ahmed-sajid.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;