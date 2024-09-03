import { useParams } from "react-router-dom";
import { getCoinDetails } from "../services/fetchCoinDetails";
import { useQuery } from "react-query";
import { useEffect } from "react";
// import { CurrencyContext } from "../Context/CoinContext";
import currencyStore from "../States/state"
import  { Facebook } from 'react-content-loader'


import parse from 'html-react-parser';

function CoinDetailsPage(){


    const {currency}=currencyStore();
    const {coinId}= useParams();
    const {data:coin,isLoading,isError,error}=useQuery(["coin",coinId],()=>getCoinDetails(coinId)
    ,{
        // retry:2,
        // retryDelay:1000,
        cacheTime:1000*60*25,
        staleTime:1000*60*5,
        keepPreviousData: true,
    })

    // useEffect(()=>{
    //     console.log(data)
    //   },[data])
    if (isLoading) {
        // return <div> page Loading...</div>;
        return <Facebook />
    }
    if (isError) {
        return <div>Error: {error?.message || "Something went wrong!"}</div>; // Improved error handling
      }

     
    return (

       
    <div className="flex flex-col md:flex-row">

        <div className="md:w-1/3 w-full flex flex-col items-center mt-6 md:mt-0 border-r-2 border-gray-700">


            <img 
            alt={coin ?. name}
            src={coin ?. image ?.large}
            className="h-52 mb-4"
            />
            <h1 className="text-4xl font-bold mb-5"
            >{coin ?. name}</h1>
            <p className="w-full px-6 py-4 text-justify">
{parse(coin ?.description ?.en)}
            </p>

            <div className="w-full flex flex-col md:flex-row md:justify-around">

                <div className=" flex items-center mb-4 md:mb-0">
                        <h2 className="text-xl font-bold">
                        Rank

                        </h2>
                        <span className="ml-3 text-xl">
                        {coin?. market_cap_rank }
                        </span>

                </div>
                <div className=" flex items-center mb-4 md:mb-0">
                <h2 className="text-xl text-yellow-400 font-bold">
                       Current Price

                        </h2>
                        <span className="ml-3 text-xl">
                        {coin?. market_data.current_price[currency] }
                        </span>

                </div>


            </div>
        </div>
<div className="md:w-2/3 w-full p-6">

coin details
</div>


    </div>
        
    );
}

export default CoinDetailsPage;