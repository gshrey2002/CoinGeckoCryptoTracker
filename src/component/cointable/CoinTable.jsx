import { useEffect, useState } from "react";
import { getCoinData } from "../../services/FetchCoinData";
import { useQuery } from "react-query";

function CoinTable(){

    const [page,setPage]=useState(1);

const {data,isLoading,isError,error}=useQuery(['coin',page],()=>getCoinData(page,'usd'),{
    // retry:2,
    // retryDelay:1000,
    cacheTime:1000*60*25,
    staleTime:1000*60*5
})
useEffect(()=>{
    console.log(data);
},[data])

if (isLoading) {
    return <div>Loading...</div>;
}

if(isError){
   return  <div>Error :{error.message}</div>;
}


    return (
        
        // <> coin table <button onClick={()=>setPage(page+1)}>click {page} </button> </>

        <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
            <div className="w-full bg-yellow-500 text-black flex py-4 px-2 font-semibold items-center justify-center">
                {/* columss */}
            <div className="basis-[35%]">
coins
            </div >

            <div className="basis-[25%]">
price
            </div>

            <div className="basis-[20%]">
24 hours change
            </div>

            <div className="basis-[20%]">
                market cap
            </div>




            </div>

            <div className="flex flex-col w-[80vw] mx-auto">
            {isLoading && <div>loading...</div>}
            {data && data.map((coin)=>{
                return (

                    <div key={coin.id} className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between">

                        <div className="flex items-center justify-start gap-3 basis-[35%]">

                            <div className="w-[5rem] h-[5rem]">
                                <img src={coin.image} className="w-full h-full" />
                            </div>

                            <div>

                                <div className="text-3xl">{coin.name}</div>
                                <div className="text-xl">{coin.symbol}</div>
{/* {coin.name} */}
                           </div>

                        </div>

                         <div className="basis-[25%]">{coin.current_price}</div>
                         <div className="basis-[20%]">{coin.price_change_24h}</div>
                         <div className="basis-[20%]">{coin.market_cap}</div>

                    </div>
                )
            })}

            
            </div>
            <div className="flex gap-4 justify-center items-center">
<button 
disabled={page==1}
onClick={()=>setPage(page-1)} 
className="btn btn-primary btn-wide text-white text-2xl"
>Prev</button>
<button onClick={()=>setPage(page+1)} className="btn btn-secondary btn-wide text-white text-2xl">Next</button>

            </div> 

        </div>
      
        
       
    )
}

export default CoinTable;