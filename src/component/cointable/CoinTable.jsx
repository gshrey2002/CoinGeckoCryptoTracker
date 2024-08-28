import { useEffect, useState } from "react";
import { getCoinData } from "../../services/FetchCoinData";
import { useQuery } from "react-query";

function CoinTable(){

    const [page,setPage]=useState(1);

const {data,isLoading,isError,error}=useQuery(['coin',page],()=>getCoinData(page,'usd'),{
    retry:2,
    retryDelay:1000,
    cacheTime:1000*60*5,
})
useEffect(()=>{
    console.log(data);
},[data])

if(isLoading){
   return <div>loading...</div>;

}

if(isError){
   return  <div>Error :{error.message}</div>;
}


    return (
        
        <> coin table <button onClick={()=>setPage(page+1)}>click {page} </button> </>

        
       
    )
}

export default CoinTable;