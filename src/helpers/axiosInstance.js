import axios from "axios";
import { COIN_GECKO_API_URL } from "./Constant";

const axiosInstance=axios.create({
    baseURL:COIN_GECKO_API_URL,
})

export default axiosInstance