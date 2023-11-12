import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


function Header() {


return(<>



  <header className='flex items-center max-[755px]:justify-between mt-4'>
    <div className='w-2/12 h-20 flex justify-center items-center'>
      <svg width=" 60" height="36" viewBox="0 0 60 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M11.1796 0.895883C15.3626 -1.19567 20.4491 0.499806 22.5405 4.68283L36.3678 32.3374C36.6293 32.8603 36.4174 33.4961 35.8945 33.7576L34.3908 34.5093C30.2079 36.6008 25.1214 34.9053 23.0299 30.7224L9.20256 3.0678C8.94112 2.54491 9.15311 1.90912 9.676 1.64767L11.1796 0.895883ZM34.6998 0.895883C38.8827 -1.19567 43.9692 0.499806 46.0607 4.68283L59.888 32.3374C60.1495 32.8603 59.9375 33.4961 59.4146 33.7576L57.911 34.5093C53.728 36.6008 48.6415 34.9053 46.5501 30.7224L32.7228 3.0678C32.4613 2.54491 32.6732 1.90912 33.1961 1.64767L34.6998 0.895883ZM5.82169 23.7264C2.60645 23.7264 0 26.3328 0 29.5481C0 32.7633 2.60645 35.3698 5.82169 35.3698C9.03693 35.3698 11.6434 32.7633 11.6434 29.5481C11.6434 26.3328 9.03693 23.7264 5.82169 23.7264Z" fill="#4959EA"></path>
      </svg>
    </div>


    <div className='w-8/12 flex justify-center '>
      <button className='header-btn h-1/2 font-semibold text-base p-2 mr-6 w-1/12'><NavLink to={"/login"}>Login</NavLink></button>
      <button className='header-btn h-1/2 font-semibold text-base p-2 mr-6 w-1/12'><NavLink to={"/fees"}>Fees</NavLink></button>
      <button className='header-btn h-1/2 font-semibold text-base p-2 mr-6 w-1/12'><NavLink to={"/midasears"}>Midas' Ears</NavLink></button>
      <button className='header-btn h-1/2 font-semibold text-base p-2 mr-6 w-1/12'><NavLink to={"/aboutus"}>about us</NavLink></button>
      <button className='header-btn h-1/2 font-semibold text-base p-2 mr-6 w-1/12'><NavLink to={"/LiveMarket"}>Live Market</NavLink></button>
      <button className='header-btn h-1/2 font-semibold text-base p-2 mr-6 w-1/12'><NavLink to={"/"}>Home</NavLink></button>

    </div>

    <button className='bg-blue-600 max-[755px]:w-4/12  text-base font-semibold h-10 text-white w-44 rounded-2xl'>Uygulamayı İndir</button>
  </header>

</>
)
};

export default Header;