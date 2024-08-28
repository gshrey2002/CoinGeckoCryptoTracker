import axios from "axios";
import axiosInstance from "../helpers/axiosInstance";

export async function getCoinData(page=1,currency='inr'){
    const perPage=10;
try {

    const response=await axiosInstance.get(`/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}`)
    // console.log(response);
    
    return response.data
} catch (error) {
    console.error(error);
    return null;
}
}