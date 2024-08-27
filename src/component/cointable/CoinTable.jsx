import { useEffect } from "react";
import { getCoinData } from "../../services/FetchCoinData";

function CoinTable(){

useEffect(()=>{
console.log("coin table mounted");
getCoinData(1,'usd');
},[])

    return (
        <>
        CoinTable

        
        </>
    )
}

export default CoinTable;