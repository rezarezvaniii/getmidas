import React, { Component } from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Livemarket() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

    return ( <>
    <p className='max-[570px]:text-3xl text-center font-bold text-6xl' data-aos-delay="300" data-aos="fade-up" data-aos-anchor-placement="top-bottom">Live Stock Market</p>
    <p className='text-blue-600 text-base text-center mt-5' data-aos-delay="300" data-aos="fade-up" data-aos-anchor-placement="top-bottom" href="#"><a href="#">Anasayfa Canlı Borsa (15 dakika gecikmeli)</a></p>

    <div className='w-full flex justify-center'>
        <div className='w-7/12 max-[939px]:w-full  '>

        {/* <input data-aos-delay="400" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='w-full form-Ara h-10 my-8 rounded-lg' type="text" placeholder='   Hisse Ara...'/> */}

        <div className="form-Ara rounded-xl mb-4 h-10 fadeInUp-scroll visible" data-delay="400">
                    <form action="" className='flex h-9' id="search_form">
                        <button>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.6">
                                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#585768" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                    <path d="M20.9984 20.9999L16.6484 16.6499" stroke="#585768" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </g>
                            </svg>
                        </button>
                        <input type="text" className='w-11/12 outline-none' name="search" value="" id="search" placeholder="Hisse Ara…"/>
                    </form>
                </div>


        <div className='scroll-table flex justify-between ' data-aos-delay="500" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div className='flex justify-center py-9 px-12 rounded-md bg-[#FBFBFE] border-[1px] border-[#eeeeee]'>
            <p className='flex flex-col gap-2 font-semibold text-xs'>BIST100
                <span className='text-green-500 '>7.460,20</span>
                -0,13%
            </p>
        </div>

        <div className='flex justify-center py-9 px-12 rounded-md bg-[#FBFBFE] border-[1px] border-[#eeeeee]'>
            <p className='flex flex-col gap-2 font-semibold text-xs'>BIST100
                <span className='text-red-500 '>7.460,20</span>
                -0,13%
            </p>
        </div>

        <div className='flex justify-center py-9 px-12  rounded-md bg-[#FBFBFE] border-[1px] border-[#eeeeee]'>
            <p className='flex flex-col gap-2 font-semibold text-xs'>BIST100
                <span className='text-green-500 '>7.460,20</span>
                -0,13%
            </p>
        </div>

        <div className='flex justify-center py-9 px-12  rounded-md bg-[#FBFBFE] border-[1px] border-[#eeeeee]'>
            <p className='flex flex-col gap-2 font-semibold text-xs'>BIST100
                <span className='text-red-500 '>7.460,20</span>
                -0,13%
            </p>
        </div>

        <div className='flex justify-center py-9 px-12  rounded-md bg-[#FBFBFE] border-[1px] border-[#eeeeee]'>
            <p className='flex flex-col gap-2 font-semibold text-xs'>BIST100
                <span className='text-green-500 '>7.460,20</span>
                -0,13%
            </p>
        </div>
        </div>


        <div className='scroll-table flex justify-between mt-5' data-aos-delay="600" data-aos="fade-up" data-aos-anchor-placement="top-bottom">


        <div className='flex justify-center py-5 px-8  rounded-md bg-[#FBFBFE] border-[1px] border-[#eeeeee]'>
            <p className='flex gap-2 font-semibold text-base'>BIST100
                
            </p>
        </div>

        <div className='flex justify-center py-5 px-8  rounded-md bg-[#FBFBFE] border-[1px] border-[#eeeeee]'>
            <p className='flex gap-2 font-semibold text-base'>BIST100
                
            </p>
        </div>

        <div className='flex justify-center py-5 px-8  rounded-md bg-[#FBFBFE] border-[1px] border-[#eeeeee]'>
            <p className='flex gap-2 font-semibold text-base'>BIST100
                
            </p>
        </div>

        <div className='flex justify-center py-5 px-8  rounded-md bg-[#FBFBFE] border-[1px] border-[#eeeeee]'>
            <p className='flex gap-2 font-semibold text-base'>BIST100
                
            </p>
        </div>

        <div className='flex justify-center py-5 px-8  rounded-md bg-[#FBFBFE] border-[1px] border-[#eeeeee]'>
            <p className='flex gap-2 font-semibold text-base'>BIST100
                
            </p>
        </div>

        <div className='flex justify-center py-5 px-8  rounded-md bg-[#FBFBFE] border-[1px] border-[#eeeeee]'>
            <p className='flex gap-2 font-semibold text-base'>BIST100
                
            </p>
        </div>
        </div>


       <div className='w-full scroll-table'><table className="text-black bg rounded-md bg-[#FBFBFE] border-[1px] border-[#eeeeee] py-16 leading-10 mt-5 w-full" data-aos-delay="700" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
    {/* td one */}
    <tr className="font-semibold pl-2 text-white h-16 bg-[#495AEA] text-lg ">
            
    <td className='rounded-tl-lg pl-2'>
        Share
      </td>
      <td>
        Last
      </td>
      <td>
        Buy
      </td>
      <td>
       Sell
      </td>
      <td>
       Difference
      </td>
      <td>
      Lowest
      </td>

      <td>
      Highest
      </td>

      <td>
      AOF
      </td>

      <td>
       Volume TL
      </td>

      <td className='rounded-tr-lg '>
      Volume Lot
      </td>

</tr>

									

<tr className=" mb-12">
      <td className="underline p-2 flex gap-3 decoration-table ">
      ADEL
      <div className='bg-green-500 h-5 w-5 mt-3 flex justify-center items-center rounded-full'>
      <svg className='' width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className='rounded-full' fill-rule="evenodd" clip-rule="evenodd" d="M4.39035 2.1867V0H14V9.60378H11.7973V3.73788L1.55117 13.998L0 12.4683L10.2496 2.1867H4.39035Z" fill="#ffffff"></path>
                                        </svg>
        </div>
        </td>
        <td className='p-2'>
        335,40
        </td>
        <td className='p-2'>
        335,40
        </td>
        <td className='p-2'>
        335,60
        </td>
        <td className='text-green-500'>
          7,12%
        </td>
        <td className='p-2'>
        310,00
        </td>
        <td className='p-2'>
        340,00
        </td>
        <td className='p-2'>
        325,66
        </td>
        <td className='p-2'>
        88.359.933,90
        </td>
        <td className='p-2'>
        271,323
        </td>
      </tr>
      <tr className=" mb-12">
      <td className="underline p-2 flex gap-3 decoration-table ">
      ADEL
      <div className='bg-red-500 h-5 w-5 mt-3 flex justify-center items-center rounded-full'>
      <svg className='' width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className='rounded-full' fill-rule="evenodd" clip-rule="evenodd" d="M4.39035 2.1867V0H14V9.60378H11.7973V3.73788L1.55117 13.998L0 12.4683L10.2496 2.1867H4.39035Z" fill="#ffffff"></path>
                                        </svg>
        </div>
        </td>
        <td className='p-2'>
        335,40
        </td>
        <td className='p-2'>
        335,40
        </td>
        <td className='p-2'>
        335,60
        </td>
        <td className='text-red-500'>
          7,12%
        </td>
        <td className='p-2'>
        310,00
        </td>
        <td className='p-2'>
        340,00
        </td>
        <td className='p-2'>
        325,66
        </td>
        <td className='p-2'>
        88.359.933,90
        </td>
        <td className='p-2'>
        271,323
        </td>
      </tr>

      <tr className=" mb-12">
      <td className="underline p-2 flex gap-3 decoration-table ">
      ADEL
      <div className='bg-green-500 h-5 w-5 mt-3 flex justify-center items-center rounded-full'>
      <svg className='' width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className='rounded-full' fill-rule="evenodd" clip-rule="evenodd" d="M4.39035 2.1867V0H14V9.60378H11.7973V3.73788L1.55117 13.998L0 12.4683L10.2496 2.1867H4.39035Z" fill="#ffffff"></path>
                                        </svg>
        </div>
        </td>
        <td className='p-2'>
        335,40
        </td>
        <td className='p-2'>
        335,40
        </td>
        <td className='p-2'>
        335,60
        </td>
        <td className='text-green-500'>
          7,12%
        </td>
        <td className='p-2'>
        310,00
        </td>
        <td className='p-2'>
        340,00
        </td>
        <td className='p-2'>
        325,66
        </td>
        <td className='p-2'>
        88.359.933,90
        </td>
        <td className='p-2'>
        271,323
        </td>
      </tr>

      <tr className=" mb-12">
      <td className="underline p-2 flex gap-3 decoration-table ">
      ADEL
      <div className='bg-red-500 h-5 w-5 mt-3 flex justify-center items-center rounded-full'>
      <svg className='' width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className='rounded-full' fill-rule="evenodd" clip-rule="evenodd" d="M4.39035 2.1867V0H14V9.60378H11.7973V3.73788L1.55117 13.998L0 12.4683L10.2496 2.1867H4.39035Z" fill="#ffffff"></path>
                                        </svg>
        </div>
        </td>
        <td className='p-2'>
        335,40
        </td>
        <td className='p-2'>
        335,40
        </td>
        <td className='p-2'>
        335,60
        </td>
        <td className='text-red-500'>
          7,12%
        </td>
        <td className='p-2'>
        310,00
        </td>
        <td className='p-2'>
        340,00
        </td>
        <td className='p-2'>
        325,66
        </td>
        <td className='p-2'>
        88.359.933,90
        </td>
        <td className='p-2'>
        271,323
        </td>
      </tr>

      <tr className=" mb-12">
      <td className="underline p-2 flex gap-3 decoration-table ">
      ADEL
      <div className='bg-green-500 h-5 w-5 mt-3 flex justify-center items-center rounded-full'>
      <svg className='' width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className='rounded-full' fill-rule="evenodd" clip-rule="evenodd" d="M4.39035 2.1867V0H14V9.60378H11.7973V3.73788L1.55117 13.998L0 12.4683L10.2496 2.1867H4.39035Z" fill="#ffffff"></path>
                                        </svg>
        </div>
        </td>
        <td className='p-2'>
        335,40
        </td>
        <td className='p-2'>
        335,40
        </td>
        <td className='p-2'>
        335,60
        </td>
        <td className='text-green-500'>
          7,12%
        </td>
        <td className='p-2'>
        310,00
        </td>
        <td className='p-2'>
        340,00
        </td>
        <td className='p-2'>
        325,66
        </td>
        <td className='p-2'>
        88.359.933,90
        </td>
        <td className='p-2'>
        271,323
        </td>
      </tr>

      <tr className=" mb-12">
      <td className="underline p-2 flex gap-3 decoration-table ">
      ADEL
      <div className='bg-red-500 h-5 w-5 mt-3 flex justify-center items-center rounded-full'>
      <svg className='' width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className='rounded-full' fill-rule="evenodd" clip-rule="evenodd" d="M4.39035 2.1867V0H14V9.60378H11.7973V3.73788L1.55117 13.998L0 12.4683L10.2496 2.1867H4.39035Z" fill="#ffffff"></path>
                                        </svg>
        </div>
        </td>
        <td className='p-2'>
        335,40
        </td>
        <td className='p-2'>
        335,40
        </td>
        <td className='p-2'>
        335,60
        </td>
        <td className='text-red-500'>
          7,12%
        </td>
        <td className='p-2'>
        310,00
        </td>
        <td className='p-2'>
        340,00
        </td>
        <td className='p-2'>
        325,66
        </td>
        <td className='p-2'>
        88.359.933,90
        </td>
        <td className='p-2'>
        271,323
        </td>
      </tr>

      <tr className=" mb-12">
      <td className="underline p-2 flex gap-3 decoration-table ">
      ADEL
      <div className='bg-red-500 h-5 w-5 mt-3 flex justify-center items-center rounded-full'>
      <svg className='' width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className='rounded-full' fill-rule="evenodd" clip-rule="evenodd" d="M4.39035 2.1867V0H14V9.60378H11.7973V3.73788L1.55117 13.998L0 12.4683L10.2496 2.1867H4.39035Z" fill="#ffffff"></path>
                                        </svg>
        </div>
        </td>
        <td className='p-2'>
        335,40
        </td>
        <td className='p-2'>
        335,40
        </td>
        <td className='p-2'>
        335,60
        </td>
        <td className='text-red-500'>
          7,12%
        </td>
        <td className='p-2'>
        310,00
        </td>
        <td className='p-2'>
        340,00
        </td>
        <td className='p-2'>
        325,66
        </td>
        <td className='p-2'>
        88.359.933,90
        </td>
        <td className='p-2'>
        271,323
        </td>
      </tr>

      <tr className=" mb-12">
      <td className="underline p-2 flex gap-3 decoration-table ">
      ADEL
      <div className='bg-red-500 h-5 w-5 mt-3 flex justify-center items-center rounded-full'>
      <svg className='' width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className='rounded-full' fill-rule="evenodd" clip-rule="evenodd" d="M4.39035 2.1867V0H14V9.60378H11.7973V3.73788L1.55117 13.998L0 12.4683L10.2496 2.1867H4.39035Z" fill="#ffffff"></path>
                                        </svg>
        </div>
        </td>
        <td className='p-2'>
        335,40
        </td>
        <td className='p-2'>
        335,40
        </td>
        <td className='p-2'>
        335,60
        </td>
        <td className='text-red-500'>
          7,12%
        </td>
        <td className='p-2'>
        310,00
        </td>
        <td className='p-2'>
        340,00
        </td>
        <td className='p-2'>
        325,66
        </td>
        <td className='p-2'>
        88.359.933,90
        </td>
        <td className='p-2'>
        271,323
        </td>
      </tr>

      <tr className=" mb-12">
      <td className="underline p-2 flex gap-3 decoration-table ">
      ADEL
      <div className='bg-red-500 h-5 w-5 mt-3 flex justify-center items-center rounded-full'>
      <svg className='' width="10" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className='rounded-full' fill-rule="evenodd" clip-rule="evenodd" d="M4.39035 2.1867V0H14V9.60378H11.7973V3.73788L1.55117 13.998L0 12.4683L10.2496 2.1867H4.39035Z" fill="#ffffff"></path>
                                        </svg>
        </div>
        </td>
        <td className='p-2'>
        335,40
        </td>
        <td className='p-2'>
        335,40
        </td>
        <td className='p-2'>
        335,60
        </td>
        <td className='text-red-500'>
          7,12%
        </td>
        <td className='p-2'>
        310,00
        </td>
        <td className='p-2'>
        340,00
        </td>
        <td className='p-2'>
        325,66
        </td>
        <td className='p-2'>
        88.359.933,90
        </td>
        <td className='p-2'>
        271,323
        </td>
      </tr>

      




      </table>

        </div> 

        </div>


    </div>


    </> );
}

export default Livemarket;