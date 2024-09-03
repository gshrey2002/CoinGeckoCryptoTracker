import { useParams } from "react-router-dom";

function CoinDetailsPage(){


    const {coinId}= useParams();
    return (

        <>
        {coinId}
        Coin details Page
        </>
    );
}

export default CoinDetailsPage;