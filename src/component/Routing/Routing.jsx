import { Route, Routes } from "react-router-dom";
// import Home from "../../Pages/Home";
// import CoinDetailsPage from "../../Pages/CoinDetailsPage";
import MainLayout from "../../Pages/Layout";
import {lazy , Suspense} from "react"
import ContentLoader, { Facebook } from 'react-content-loader'
import CustomErrorBoundary from "../Error Boundary/ErrorBoundary";


const Home=lazy(()=>import( "../../Pages/Home"));
const CoinDetailsPage=lazy(()=>import( "../../Pages/CoinDetailsPage"));

function Routing(){


    return (
        <CustomErrorBoundary>
        <Routes>

            <Route path="/" element={<MainLayout />} >

<Route index element={
<Suspense fallback ={<Facebook />}>

<Home/>
</Suspense>


} />
<Route path="/details/:coinId" element={
<Suspense fallback={<Facebook />}>
<CoinDetailsPage />

</Suspense>

} />
            </Route>
       
        </Routes>
    </CustomErrorBoundary>
    )
}

export default Routing;