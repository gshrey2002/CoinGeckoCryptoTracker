import { useContext, useEffect, useState } from "react";
import { getCoinData } from "../../services/FetchCoinData";
import { useQuery } from "react-query";
import { CurrencyContext } from "../../Context/CoinContext";
import currencyStore from "../../States/state"
import { useNavigate } from "react-router-dom";

function CoinTable(){

    const [page,setPage]=useState(1);
    const {currency}=currencyStore();
    const [loading, setLoading] = useState(false);
    const [allData, setAllData] = useState([]);
    const [frequencyMap, setFrequencyMap] = useState({}); // Initialize frequency map
    const navigate=useNavigate();


    // const {currency}=useContext(CurrencyContext);

const {data,isLoading,isError,error}=useQuery(['coin',page,currency],()=>getCoinData(page,currency),{
    // retry:2,
    // retryDelay:1000,
    cacheTime:1000*60*25,
    staleTime:1000*60*5,
    keepPreviousData: true,
})

useEffect(() => {
    if (data) {
        // Concatenate new data with old data
        setAllData((prevData) => {
            const newData = [...prevData, ...data];
            
            // Update frequency map
            const updatedFrequencyMap = { ...frequencyMap };
            data.forEach(coin => {
                updatedFrequencyMap[coin.id] = (updatedFrequencyMap[coin.id] || 0) + 1;
            });
            setFrequencyMap(updatedFrequencyMap);
            
            return newData;
        });
        setLoading(false); 
    }
}, [data]);

// useEffect(() => {
//     console.log(data);
//     if (loading && !isLoading) {
//       setLoading(false); // Reset loading state after new data is fetched
//     }
//   }, [data, isLoading, loading]);



if(isError){
   return  <div>Error :{error.message}</div>;
}

const handleScroll = debounce(() => {
    if (
        document.body.scrollHeight - 300 <
        window.scrollY + window.innerHeight
    ) {
        setLoading(true);
    }
}, 500);

  function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }
  function handleCoinClick(id){
navigate(`/details/${id}`)
  }
//   window.addEventListener("scroll", debounce(handleScroll, 500));

      useEffect(() => {
        if (loading == true) {
          setPage((prevPage) => prevPage + 1);
        }
      }, [loading]);

      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll); 
        };
    }, [handleScroll]);

      if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error: {error?.message || "Something went wrong!"}</div>; // Improved error handling
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
            {/* {data && data.map((coin)=>{ */}
            {/* {console.log(allData)} */}
            
                {allData && allData.map((coin) => {
                return (

                    <div onClick={()=>handleCoinClick(coin.id)} key={coin.id + page} className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between cursor-pointer">

                        <div className="flex items-center justify-start gap-3 basis-[35%]">

                            <div className="w-[5rem] h-[5rem]">
                                <img src={coin.image} className="w-full h-full" />
                            </div>

                            <div>
                                <div className="text-3xl">{coin.name}</div>
                                <div className="text-xl">{coin.symbol}</div>
                                <div className="text-sm">Loaded {frequencyMap[coin.id]} times</div> 
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
{/* <button 
disabled={page==1}
onClick={()=>setPage(page-1)} 
className="btn btn-primary btn-wide text-white text-2xl"
>Prev</button>
<button onClick={()=>setPage(page+1)} className="btn btn-secondary btn-wide text-white text-2xl">Next</button> */}
{loading && <h1>Loading....</h1>}

            </div> 

        </div>
      
        
       
    )
}

export default CoinTable;