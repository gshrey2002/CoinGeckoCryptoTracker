import { useState } from 'react'

import './App.css'
import CoinTable from './component/cointable/CoinTable'
import NavBar from './component/navbar/NavBar'
import Banner from './component/banner/Banner'

function App() {
  const [currency, setCurrency] = useState('usd')


  return (
    <>
    {currency}
      <div>
      <NavBar setCurrency={setCurrency} />
        <Banner/>
        
        <CoinTable currency={currency}/>
       </div>
    </>
  )
}

export default App
