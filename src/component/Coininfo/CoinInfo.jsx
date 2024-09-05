import Alert from "../Alert/Alert"
import { Line } from 'react-chartjs-2';
import {CategoryScale  } from "chart.js"
import {Chart} from "chart.js/auto"

Chart.register(CategoryScale);

function CoinInfo({historicdata,setDay,setCoinInterval,days,currency}){

    function handleDayChange(e){
        console.log(e.target.options[e.target.selectedIndex].value);
        const daySelected=e.target.options[e.target.selectedIndex].value;
        if(daySelected==1){
            setCoinInterval('')
        }else{
            setCoinInterval("daily")
        }
        setDay(e.target.options[e.target.selectedIndex].value);

    }

    const chartDays=[
        {
            label:'24h',
            value:1
        },
        {
            label:'7 days',
            value:7
        },
        {
            label:'30 days',
            value:30
        },
        {
            label:'90 days',
            value:90
        },
        {
            label:'365 days',
            value:365
        }
    ]

    if(!historicdata){
        return <Alert message="no Data Found" type="info" />
    }
return(
   <div
   className="flex flex-col items-center justify-center  mt-6 p-6 w-full "
   >
    <div className="h-800px w-full" >
     <Line 
     data={{
        labels:historicdata.prices.map(coinTime=>{
            let date=new Date(coinTime[0]) //converting time
            let time=date.getHours() > 12 ? `${date.getHours() - 12} : ${date.getMinutes()} PM ` : `${date.getHours() - 12} : ${date.getMinutes()} AM `

            return days===1 ? time : date.toLocaleDateString()
        }),
        datasets:[
         {
            label:`Price in past ${days} day in ${currency.toUpperCase()}`,
            data:historicdata.prices.map(coinPrice=>coinPrice[1]),


         }
        ]
     }}
     options={{
        responsive:true,
        maintainAspectRatio:false,
        elements:{
            point:{
                radius:0
            }
        }
     }}
     
     
     />
     </div>

     <div className="flex justify-center mt-5 w-full">
     <select className="select select-primary w-full max-w-xs"
 onChange={handleDayChange}>
     {chartDays.map((day,index)=>{
        return (
            <option selected={days==day.value} key={index} value={day.value}>{day.label}</option>
        )
     })}
</select>
    

     </div>

   </div>
)
} 
export default CoinInfo