import React, { Component } from 'react';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';


function AboutUs() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, [])


    return ( <>
    <div className='flex flex-col w-full items-center gap-20 '>
        <button className='mt-12 about-btn text-[#495AEA] py-2 font-bold text-sm bg-[#ECEFFC] rounded-3xl max-[950px]:w-2/12 w-1/12' data-aos-delay="300" data-aos="fade-up" data-aos-anchor-placement="top-bottom"> about us</button>
        <p className='max-[900px]:text-3xl font-bold text-6xl w-1/2' data-aos-delay="500" data-aos="fade-up" data-aos-anchor-placement="top-bottom">We set out to liberate the investment world.</p>
        {/* <div className='scroll-img flex gap-8' data-aos-delay="700" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <img className='w-[550px]' src="https://www.getmidas.com/wp-content/uploads/2022/11/in-05.webp" alt="" />
        <img className='w-[550px]' src="https://www.getmidas.com/wp-content/uploads/2022/01/in-05.jpg" alt="" />
        <img className='w-[550px]' src="https://www.getmidas.com/wp-content/uploads/2022/11/in-05.webp" alt="" />
        <img className='w-[550px]' src="https://www.getmidas.com/wp-content/uploads/2022/01/in-05.jpg" alt="" />
    </div> */}



    <Splide
      options={ {
        rewind: true,
        gap   : '1rem',
        perPage: 4,
        arrows: false,

      } }
      aria-label="My Favorite Images"
    >
      <SplideSlide>
      <img className='w-[100%] h-auto' src="https://www.getmidas.com/wp-content/uploads/2022/11/in-05.webp" alt="" />
      </SplideSlide>
      <SplideSlide>
      <img className='w-[100%] h-auto]' src="https://www.getmidas.com/wp-content/uploads/2022/01/in-05.jpg" alt="" />
      </SplideSlide>
      <SplideSlide>
      <img className='w-[100%] h-auto' src="https://www.getmidas.com/wp-content/uploads/2022/11/in-05.webp" alt="" />
      </SplideSlide>
      <SplideSlide>
      <img className='w-[100%] h-auto' src="https://www.getmidas.com/wp-content/uploads/2022/11/in-05.webp" alt="" />
      </SplideSlide>
      <SplideSlide>
      <img className='w-[100%] h-auto' src="https://www.getmidas.com/wp-content/uploads/2022/11/in-05.webp" alt="" />
      </SplideSlide>
    </Splide>



        <p data-aos-delay="400" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex flex-col w-9/12 text-center text-xl gap-12 text-[#585768] font-normal '>
            <span data-aos-delay="500" data-aos="fade-up" data-aos-anchor-placement="top-bottom">“We believe investing should be accessible and fair to all. Our aim is to provide a democratic financial investment experience without privileges.” For this reason, there are no lower limits, hidden fees and complex transactions in Midas; There is a perspective that offers investment opportunities independent of economic factors.
</span>
            <span data-aos-delay="600" data-aos="fade-up" data-aos-anchor-placement="top-bottom">With this vision, you can invest in approximately 10 thousand stocks in the NASDAQ and New York Stock Exchange (NYSE), one of the largest stock exchanges in America, and in all Turkish companies in Borsa Istanbul with your Midas investment account, with the advantage of cost-free transactions and low commissions.
</span>
        </p>


        <div data-aos-delay="300" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='w-10/12 rounded-xl py-10 max-[660px]:flex-col flex bg-[#F6F7FE]'>
            <div data-aos-delay="500" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className=' w-1/3 max-[660px]:w-full  flex justify-center items-center '>
                <p className='text-6xl text-[#4959ea] text-center flex flex-col gap-5 font-semibold '>12 M
                <span className='text-lg text-[#0c1462]'>
                Total Group Capital Amount
                </span>
                </p>
            </div>
            
            <div data-aos-delay="600" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='w-1/3 max-[660px]:mt-5 max-[660px]:w-full flex justify-center items-center '>
                <p className='text-6xl text-[#4959ea] text-center flex flex-col gap-5 font-semibold '>+100
                <span className='text-lg text-[#0c1462]'>
                Number of Group Employees
                </span>
                </p>
            </div>

            



            <div data-aos-delay="700" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='w-1/3 max-[660px]:w-full max-[660px]:mt-5 flex justify-center items-center '>
                <p className='text-6xl text-[#4959ea] text-center flex flex-col gap-5 font-semibold '>$7B
                <span className='text-lg text-[#0c1462]'>
                Transaction Volume
                </span>
                </p>
            </div>
        
        </div>

        <p data-aos-delay="600" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='text-center max-[650px]:w-full  w-1/2 font-bold text-[40px]'>
            What services does Midas offer?
        </p>
        
        <div className='w-full flex flex-col gap-5'>


        
        <div data-aos-delay="400" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='w-full max-[950px]:flex-col px-24 flex gap-5 max-[474px]:px-0 '>

                <div data-aos-delay="600" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='max-[950px]:w-full flex border-[1px] border-[#eeeeee] items-center px-10 w-6/12 h-56 bg-[#FAFAFF] rounded-xl'>
                    <p className=' font-semibold text-[24px] flex w-full text-[#4959ea]  flex-col'>
                    American Stock
                        <span className='text-[18px] font-normal text-[#585768]'>
                        Exchanges We offer the opportunity to invest in the world's most popular companies traded on the Nasdaq
                         and New York Stock Exchange (NYSE).
                         </span>
                    </p>
                   
                </div>


                <div data-aos-delay="800" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='max-[950px]:w-full flex border-[1px] border-[#eeeeee] items-center px-10 w-6/12 h-56 bg-[#FAFAFF] rounded-xl'>
                    <p className=' font-semibold text-[24px] flex w-full text-[#4959ea]  flex-col'>
                    Borsa Istanbul
                        <span className='text-[18px] font-normal text-[#585768]'>
                        By adding Borsa Istanbul to our portfolio along with the American markets, 
                        we offer the opportunity to invest in Turkish stocks.
                         </span>
                    </p>
                   
                </div>


            </div>


            <div data-aos-delay="400" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='w-full max-[474px]:px-0 max-[950px]:flex-col px-24 flex gap-5'>

                <div data-aos-delay="600" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex border-[1px] max-[950px]:w-full border-[#eeeeee] items-center px-10 w-6/12 h-56 bg-[#FAFAFF] rounded-xl'>
                    <p className=' font-semibold text-[24px] flex w-full text-[#4959ea]  flex-col'>
                    American Stock
                        <span className='text-[18px] font-normal text-[#585768]'>
                        Exchanges We offer the opportunity to invest in the world's most popular companies traded on the Nasdaq
                         and New York Stock Exchange (NYSE).
                         </span>
                    </p>
                   
                </div>


                <div data-aos-delay="800" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex border-[1px] max-[950px]:w-full border-[#eeeeee] items-center px-10 w-6/12 h-56 bg-[#FAFAFF] rounded-xl'>
                    <p className=' font-semibold text-[24px] flex w-full text-[#4959ea]  flex-col'>
                    Borsa Istanbul
                        <span className='text-[18px] font-normal text-[#585768]'>
                        By adding Borsa Istanbul to our portfolio along with the American markets, 
                        we offer the opportunity to invest in Turkish stocks.
                         </span>
                    </p>
                   
                </div>

                    

            </div>

                    <div data-aos-delay="500" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='w-full flex justify-center'>
                    <p className='w-10/12'>

                    Investment services and activities are provided by licensed Midas Menkul Değerler A.Ş.
                     authorized by the Capital Markets. Access to the services offered Kognivia Yazılım A.Ş.
                      ('Midas Financial Technologies') through the Midas mobile application.

                    </p>

            </div>
            </div>

            <div data-aos-delay="300" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='h-full bg-[#F3FBFF] w-full flex flex-col gap-24'>
                <p className='mt-16 text-center text-[40px] font-bold '>
                History of Midas
                </p>

            {/* <div className='w-full flex '>
                <div className='flex w-4/12'>
                    <p className='rotate-year font-bold text-6xl text-[#4959ea]'>2020
                    <span className='text-base text-[#4959ea]'>
                    October</span>
                    </p>

                    <div className='w-full '>
                        <p className='flex flex-col text-xl font-semibold'>Midas Founded
                            <span className='font-normal text-[15px]'>
                            Midas was founded on October 28, 2020 by Egem Eraslan and Umut Bozkurt.
                            </span>
                        </p>
                    </div>
                </div>

                <div className='flex '>
                    <p className='rotate-year font-bold text-6xl text-[#4959ea]'>2020
                    <span className='text-base text-[#4959ea]'>
                    October</span>
                    </p>

                    <div className='w-full '>
                        <p className='flex flex-col text-xl font-semibold'>Midas Founded
                            <span className='font-normal text-[15px]'>
                            Midas was founded on October 28, 2020 by Egem Eraslan and Umut Bozkurt.
                            </span>
                        </p>
                    </div>
                </div>

                <div className='flex '>
                    <p className='rotate-year font-bold text-6xl text-[#4959ea]'>2020
                    <span className='text-base text-[#4959ea]'>
                    October</span>
                    </p>

                    <div className='w-full '>
                        <p className='flex flex-col text-xl font-semibold'>Midas Founded
                            <span className='font-normal text-[15px]'>
                            Midas was founded on October 28, 2020 by Egem Eraslan and Umut Bozkurt.
                            </span>
                        </p>
                    </div>
                </div>



            </div> */}






            <Splide
            data-aos-delay="300" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
      options={ {
        rewind: true,
        gap   : '1rem',
        perPage: 3,
        arrows: false,
      } }
      aria-label="My Favorite Images"
    >
      <SplideSlide data-aos-delay="500" data-aos="fade-up" data-aos-anchor-placement="top-bottom" >
      <div className='flex max-[1024px]:flex-col'>
                    <p className='rotate-year max-[1024px]:rotate-0 font-bold text-6xl text-[#4959ea]'>2020
                    {/* <span className='text-base text-[#4959ea]'>
                    October</span> */}
                    </p>

                    <div className='w-full mt-20'>
                        <p className='flex flex-col text-xl font-semibold'>Midas Founded
                            <span className='font-normal text-[15px]'>
                            Midas was founded on October 28, 2020 by Egem Eraslan and Umut Bozkurt.
                            </span>
                        </p>
                    </div>
                </div>
      </SplideSlide>
      <SplideSlide data-aos-delay="700" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <div className='flex max-[1024px]:flex-col'>
                    <p className='rotate-year font-bold text-6xl text-[#4959ea]'>2020
                    {/* <span className='text-base text-[#4959ea]'>
                    October</span> */}
                    </p>

                    <div className='w-full mt-20'>
                        <p className='flex flex-col text-xl font-semibold'>Midas Founded
                            <span className='font-normal text-[15px]'>
                            Midas was founded on October 28, 2020 by Egem Eraslan and Umut Bozkurt.
                            </span>
                        </p>
                    </div>
                </div>
      </SplideSlide>
      <SplideSlide data-aos-delay="900" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <div className='flex max-[1024px]:flex-col'>
                    <p className='rotate-year font-bold text-6xl text-[#4959ea]'>2020
                    {/* <span className='text-base text-[#4959ea]'>
                    October</span> */}
                    </p>

                    <div className='w-full mt-20'>
                        <p className='flex flex-col text-xl font-semibold'>Midas Founded
                            <span className='font-normal text-[15px]'>
                            Midas was founded on October 28, 2020 by Egem Eraslan and Umut Bozkurt.
                            </span>
                        </p>
                    </div>
                </div>
      </SplideSlide>

      <SplideSlide>
      <div className='flex max-[1024px]:flex-col'>
                    <p className='rotate-year font-bold text-6xl text-[#4959ea]'>2020
                    {/* <span className='text-base text-[#4959ea]'>
                    October</span> */}
                    </p>

                    <div className='w-full mt-20'>
                        <p className='flex flex-col text-xl font-semibold'>Midas Founded
                            <span className='font-normal text-[15px]'>
                            Midas was founded on October 28, 2020 by Egem Eraslan and Umut Bozkurt.
                            </span>
                        </p>
                    </div>
                </div>
      </SplideSlide>

      <SplideSlide>
      <div className='flex max-[1024px]:flex-col'>
                    <p className='rotate-year font-bold text-6xl text-[#4959ea]'>2020
                    {/* <span className='text-base text-[#4959ea]'>
                    October</span> */}
                    </p>

                    <div className='w-full mt-20'>
                        <p className='flex flex-col text-xl font-semibold'>Midas Founded
                            <span className='font-normal text-[15px]'>
                            Midas was founded on October 28, 2020 by Egem Eraslan and Umut Bozkurt.
                            </span>
                        </p>
                    </div>
                </div>
      </SplideSlide>
    </Splide>






            </div>




            <p className='text-center flex flex-col text-[40px] font-bold '>
            Our Investors
                <span className='font-normal text-base'>
                We continue with our investors who believe in Midas' potential and trust its future projects.
                </span>
            </p>


    


    <div className='w-full flex mt-10 justify-center' data-aos-delay="300" data-aos="fade-up" data-aos-anchor-placement="top-bottom">

                <div className='w-9/12 max-[1024px]:flex-col rounded-xl flex'>
                    <div className='w-5/12 max-[1024px]:w-full max-[1024px]:rounded-xl rounded-l-xl bg-blue-800'>
                        <img src="https://www.getmidas.com/wp-content/themes/basework/dist/img/midas-newsletter-illustration-2.png" alt="" />
                    </div>


                    <div className='w-7/12 max-[1024px]:w-full bg-blue-600 rounded-r-xl max-[1024px]:rounded-xl px-5 flex flex-col gap-10 items-center'>
                        <p className='mt-12 font-bold text-2xl text-white'>Subscribe to Midas Bulletin and follow the financial agenda.</p>
                        <form className='w-full flex gap-8 justify-center' action="">

                            <input className='bg-indigo-700 h-12 p-4  rounded-xl' type="email" placeholder='e-post adress' />
                            <button className='w-28 h-12 bg-white rounded-3xl'>Register</button>
                        </form>
                        <p className='text-white mb-6 font-normal text-[12px]'>
                            I consent to the processing of my personal data and,
                            if necessary, sensitive personal data within the scope of the Privacy Statement here.
                        </p>
                    </div>
                </div>
            </div>


            <div className='flex justify-center w-full items-center' data-aos-delay="300" data-aos="fade-up" data-aos-anchor-placement="top-bottom">

                <div className='flex justify-start max-[500px]:flex-col mt-4'>
                    <div className='w-3/12'>
                        <h3 className='font-bold text-lg leading-10'>Corporate</h3>
                        <ul className='list-disc pl-4 leading-6 font-medium text-sm'>
                            <li>About Us</li>
                            <li>Career</li>
                            <li>Contact</li>
                            <li>Documents</li>
                            <li>Discover</li>
                            <li>Privacy Policy</li>
                            <li>General Data Protection Policy</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>

                    <div className='w-3/12'>
                        <h3 className='font-bold text-lg leading-10'>Products</h3>
                        <ul className='list-disc pl-4 leading-6 font-medium text-sm'>
                            <li>BGAirdrop</li>
                            <li>BGChain</li>
                            <li>BGCoin</li>
                            <li>BGDex</li>
                            <li>BGExchange</li>
                            <li>BGExplorer</li>
                            <li>BGLaunchpad</li>
                            <li>BGNFT Marketplace</li>
                        </ul>
                    </div>

                    <div className='w-3/12'>
                        <h3 className='font-bold text-lg leading-10'>Products</h3>
                        <ul className='list-disc pl-4 leading-6 font-medium text-sm'>
                            <li>BGAirdrop</li>
                            <li>BGChain</li>
                            <li>BGCoin</li>
                            <li>BGDex</li>
                            <li>BGExchange</li>
                            <li>BGExplorer</li>
                            <li>BGLaunchpad</li>
                            <li>BGNFT Marketplace</li>
                        </ul>
                    </div>
                    <div className='w-3/12'>
                        <h3 className='font-bold text-lg leading-10'>Products</h3>
                        <ul className='list-disc pl-4 leading-6 font-medium text-sm'>
                            <li>BGAirdrop</li>
                            <li>BGChain</li>
                            <li>BGCoin</li>
                            <li>BGDex</li>
                            <li>BGExchange</li>
                            <li>BGExplorer</li>
                            <li>BGLaunchpad</li>
                            <li>BGNFT Marketplace</li>
                        </ul>
                    </div>


                </div>


            </div>



        </div>


    </> );
}

export default AboutUs;