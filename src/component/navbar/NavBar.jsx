import { useContext } from "react"
import { CurrencyContext } from "../../Context/CoinContext"
import currencyContext from "../../States/state"
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import xmark from "../../assets/xmark.svg"
import SearchBox from "../SearchBar/SearchBox";



function NavBar(){
  const navigate=useNavigate();

    const {setCurrency}=currencyContext();
    let [searchBox, setSearchBox] = useState(false);

   
    function goToHome(){
      navigate("/")
    }
    // const {setCurrency}=useContext(CurrencyContext);

return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li onClick={()=>setCurrency('inr')}><a>INR</a></li>
          <li onClick={()=>setCurrency('usd')}><a>USD</a></li>
          {/* <li><a>About</a></li> */}
        </ul>
      </div>
    </div>
    <div className="navbar-center">
      <a onClick={goToHome} className="btn btn-ghost text-xl">Crypto Tracker</a>
    </div>
    {searchBox && <SearchBox/>}
    <div className="navbar-end">
      <button className="btn btn-ghost btn-circle" onClick={()=> {setSearchBox(!searchBox)}}>

          {!searchBox ? <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                : <img className='h-[60%] w-[60%]' src={xmark}></img>
                }
      </button>
      
    </div>
  </div>
)
}
export default NavBar