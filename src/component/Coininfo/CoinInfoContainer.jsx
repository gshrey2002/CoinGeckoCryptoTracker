import CoinInfo from "./CoinInfo"
import { useQuery } from "react-query";
import currencyStore from "../../States/state";
import { useState } from "react";
import { getCoinHistoricData } from "../../services/fetchCoinHistoricData";
import  { Facebook } from 'react-content-loader'
import Alert from "../Alert/Alert";


function CoinInfoContainer({coinId}){
    const {currency}=currencyStore();
// console.log(coinId);
const [days,setDay]=useState(1);
const [interval,setCoinInterval]=useState('daily')
    const {data:historicdata , isLoading ,isError,error}= useQuery(['coinHistoricdata',coinId,currency,days,interval],()=>
        getCoinHistoricData(coinId,interval,days,currency),{
            cacheTime:1000*60*2,
            staleTime:1000*60*2
        }
    )

    if (isLoading) {
        // return <div> page Loading...</div>;
        return <Facebook />
    }
    if (isError) {
        return <Alert message="Error Fetching Data" type="error" />
      }
return (
    <>
    <CoinInfo historicdata={historicdata} setDay={setDay} setCoinInterval={setCoinInterval} days={days} currency={currency} />
    </>
)

}
export default CoinInfoContainer