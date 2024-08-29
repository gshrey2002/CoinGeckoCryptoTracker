import Banner from "../component/banner/Banner"
import CoinTable from "../component/cointable/CoinTable"
import NavBar from "../component/navbar/NavBar"


function Home(){


    return (

        <>
          <div>
      <NavBar  />
        <Banner/>
        
        <CoinTable />
       </div>
        
        </>
    )
}

export default Home