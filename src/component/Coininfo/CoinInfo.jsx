import Alert from "../Alert/Alert"
import { Line } from 'react-chartjs-2';
import {CategoryScale  } from "chart.js"
import {Chart} from "chart.js/auto"

Chart.register(CategoryScale);

function CoinInfo({historicdata,setDays,setCoinInterval}){


    if(!historicdata){
        return <Alert message="no Data Found" type="info" />
    }
return(
   <div
   className="flex flex-col items-center justify-center mt-6 p-6 w-full md:w-2/3"
   >
    <p>hello</p>
     <Line 
     data={{
        labels:[1,2,3,4,5],
        datasets:[
            {
                label:"line1",
            data:[1,3,44,67,5]
             },
            {
                label:"line2",
              data:[45,6,8,5,3]
             }
        ]
     }}
     
     />

   </div>
)
} 
export default CoinInfo