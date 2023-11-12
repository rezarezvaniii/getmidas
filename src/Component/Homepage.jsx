import React, { Component } from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react';
import testImg from "../assets/ABD-Overview-1.png";
import ImgStepper from "../assets/Onboarding-1-1.png";
import ImgLastter from "../assets/tesla-phone-1.png";


function Homepage() {
console.log(testImg);

    const [isDivExpanded, setDivExpanded] = useState(false);
    const [isImgExpanded, setImgExpanded] = useState(true);
    const [isSpanExpanded, setSpanExpanded] = useState(true);


    const handleButtonClick = () => {
      setDivExpanded(!isDivExpanded);
      setImgExpanded(true);
      setSpanExpanded(true);

    };


    const handleImgClick = () => {
        setImgExpanded(!isImgExpanded);
        setSpanExpanded(true);
        setDivExpanded(true);

      };


      const handleSpanClick = () => {
        setSpanExpanded(!isSpanExpanded);
        setImgExpanded(true);
        setDivExpanded(true);

      };



    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, [])





    return (
        <>

            <div className=' mt-36 flex flex-col gap-5 items-center px-10' data-aos-delay="300" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <p className='font-bold text-7xl max-[1024px]:text-4xl text-center leading-normal'>Borsa İstanbul and American Stock Exchanges in One Application!</p>
                <span className='font-semibold max-[1024px]:text-base text-lg text-center w-1/2'>With your Midas investment account, you can become a partner with the world giants in the US stock exchanges by investing any amount you want, and you can invest in Turkish companies in Borsa Istanbul with the advantage of low commissions and cost-free transactions.
                </span>


            </div>
            <div className='w-full h-[900px] relative' data-aos-delay="300" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <img className=' w-40 max-[1024px]:w-24 max-[768px]:left-16 absolute left-52' src="https://www.getmidas.com/wp-content/uploads/2022/01/apple.png" alt="" />
                <img className='mini-image w-24 max-[500px]:hidden absolute left-20  top-48 ' src="https://www.getmidas.com/wp-content/uploads/2022/01/dollar-50.png" alt="" />
                <img className=' w-24 max-[500px]:left-5 absolute max-[1024px]:left-44 left-72 top-96 ' src="https://www.getmidas.com/wp-content/uploads/2022/01/tesla.png" alt="" />
                <img className=' absolute max-[500px]:left-0 max-[1024px]:left-20 max-[1024px]:w-24 top-[600px] left-36 w-32 ' src="https://www.getmidas.com/wp-content/uploads/2022/01/amazon.png" alt="" />

                <video autoPlay loop muted className="w-[900px] max-[570px]:w-[350px] max-[1192px]:w-[750px] max-[1024px]:w-[600px] max-[768px]:left-16 max-[768px]:w-[500px] max-[1024px]:left-44 -z-30 left-72  h-[900px] absolute" poster="https://www.getmidas.com/wp-content/uploads/2022/09/ABD_00000.png" >
                    <source src="https://www.getmidas.com/wp-content/uploads/2022/09/ABD-Overview-1.mp4" type="video/mp4" />
                </video>
                <img className=' w-36 max-[500px]:right-16 max-[1024px]:w-24 absolute right-96 top-16' src="https://www.getmidas.com/wp-content/uploads/2022/01/dollar-10.png" alt="" />
                <img className='mini-image w-44  max-[1024px]:w-24 max-[500px]:right-5 absolute right-16' src="https://www.getmidas.com/wp-content/uploads/2022/01/turkcell.png" alt="" />
                <img className='w-28 absolute max-[1024px]:right-36 max-[1024px]:w-24 right-56 top-72' src="https://www.getmidas.com/wp-content/uploads/2022/01/aselsan.png" alt="" />
                <img className=' w-32 max-[500px]:right-0 absolute right-16 top-[600px]' src="https://www.getmidas.com/wp-content/uploads/2022/01/migros.png" alt="" /> 
            </div>


            <p className='text-center max-[500px]:text-2xl my-16 font-bold text-[40px] '>Why Midas?</p>


            <div data-aos-delay="300" data-aos="fade-up" className='w-full px-10 max-[1024px]:flex-wrap max-[768px]:flex-col  max-[1024px]:justify-center flex gap-5'>



                <div data-aos-delay="300" data-aos="fade-right" className='flex flex-col p-6 h-[550px] max-[768px]:w-full relative font-semibold text-xl items-center gap-10 w-4/12 bg-[#E8F8FF] rounded-xl'>
                    <p className='mt-12 font-bold text-[28px]'>
                        Low Commission
                    </p>
                    <span className='text-center text-[18px] font-normal text-[#777777]'>
                        You can invest in Borsa Istanbul with the advantage of free transactions and low commissions. On American exchanges, you can perform all your transactions for only 1.5 dollars.
                    </span>
                    <img className='absolute bottom-0 w-80' src="https://www.getmidas.com/wp-content/uploads/2022/09/3-ay-ucretsiz-min.png" alt="" />
                </div>



                <div data-aos-delay="300" data-aos="fade-right" className='flex flex-col p-6 h-[550px] max-[768px]:w-full relative font-semibold text-xl items-center gap-10 w-4/12 bg-[#E8F8FF] rounded-xl'>
                    <p className='mt-12 font-bold text-[28px]'>
                        Free Live Data
                    </p>
                    <span className='text-center text-[18px] font-normal text-[#777777]'>
                        Instant and free access to live market data on the American Stock Exchanges and Borsa Istanbul on the same platform is at Midas for the first time in Turkey!
                    </span>
                    <img className='absolute bottom-0 w-64' src="https://www.getmidas.com/wp-content/uploads/2022/01/2-1.png" alt="" />
                </div>



                <div data-aos-delay="300" data-aos="fade-right" className='flex flex-col p-6 h-[550px] max-[768px]:w-full relative font-semibold text-xl items-center gap-10 w-4/12 bg-[#E8F8FF] rounded-xl'>
                    <p className='mt-12 font-bold text-[28px]'>
                        Borsa Istanbul (BIST)
                    </p>
                    <span className='text-center text-[18px] font-normal text-[#777777]'>
                        Invest in your favorite Turkish companies such as Turkcell, Aselsan, and Turkish Airlines traded in Borsa Istanbul with the Midas investment account.                </span>
                    <img className='absolute bottom-0 w-80' src="https://www.getmidas.com/wp-content/uploads/2022/09/Borsa-I%CC%87stanbul-min.png" alt="" />
                </div>


                <div data-aos-delay="300" data-aos="fade-right" className='flex flex-col p-6 h-[550px] max-[768px]:w-full relative font-semibold text-xl items-center gap-10 w-4/12 bg-[#E8F8FF] rounded-xl'>
                    <p className='mt-12 font-bold text-[28px]'>
                        Amerikan Borsaları
                    </p>
                    <span className='text-center text-[18px] z-20 font-normal text-[#777777]'>
                        With the Midas investment account, you can safely invest in world-famous companies such as Apple, Tesla, Amazon. Moreover,
                        SIPC account security up to $ 500,000 for investment accounts on American stock exchanges is at Midas!</span>
                    <img className='absolute bottom-0 w-80' src="https://www.getmidas.com/wp-content/uploads/2022/09/why-midas-item-body-image-4.png" alt="" />
                </div>



            </div>


            <div className='w-full max-[850px]:flex-col bg-[#495AEA] mt-10 px-10 flex gap-5'>

                <div data-aos-delay="300" data-aos="flip-up" className='flex max-[850px]:w-full mt-8 max-[1024px]:flex-col items-center gap-10 pl-5 w-6/12 bg-[#E8F8FF] rounded-xl'>
                    <p className='my-8 font-bold text-[28px] flex w-8/12 flex-col'>
                        Piece Share

                        <span className='text-[18px] font-norma text-[#777777]'>
                            The "Part Share" feature, which allows you to divide a share of many companies traded in the American
                            stock exchanges into parts and buy them in an amount that fits your budget,
                            is in Midas for the first time in Turkey.</span>
                    </p>
                    <div className='w-4/12'>
                        <img src="https://www.getmidas.com/wp-content/uploads/2022/09/why-midas-item-body-image-5.png" alt="" />
                    </div>
                </div>


                <div data-aos-delay="300" data-aos="flip-up" className='flex max-[850px]:w-full mt-8 max-[1024px]:flex-col items-center gap-10 pl-5 w-6/12 bg-[#E8F8FF] rounded-xl'>
                    <p className='my-8 font-bold text-[28px] flex w-8/12 flex-col'>
                        Piece Share

                        <span className='text-[18px] font-norma text-[#777777]'>
                            The "Part Share" feature, which allows you to divide a share of many companies traded in the American
                            stock exchanges into parts and buy them in an amount that fits your budget,
                            is in Midas for the first time in Turkey.</span>
                    </p>
                    <div className='w-4/12'>
                        <img src="https://www.getmidas.com/wp-content/uploads/2022/09/why-midas-item-body-image-5.png" alt="" />
                    </div>
                </div>


            </div>



            <div className='flex max-[900px]:flex-col  bg-[#495AEA]'>

                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='w-1/2 max-[880px]:w-10/12 flex flex-col items-end ml-10 gap-10'>
                    <p className='font-bold text-white text-[40px] mt-36' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        Easy investment in 3 steps</p>

                    <p onClick={handleButtonClick} className='roadmap-tran max-[880px]:w-full text-2xl cursor-pointer text-white flex flex-col w-1/2 gap-4  font-bold 'data-aos-delay="300" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        Download Midas, open investment account
                        <span style={{ display: isDivExpanded ? 'none' : 'block' }} className='roadmap-tran text-lg text-[18px] text-white font-normal' >
                            When your account is opened, you can transfer money to Midas and start investing in the stocks you want right away.
                        </span>
                    </p>


                    <p onClick={handleImgClick} className='text-2xl max-[880px]:w-full font-bold cursor-pointer flex flex-col w-1/2 gap-4 text-white'data-aos-delay="300" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        Transfer money to your Midas investment account, start your investments now
                        <span style={{ display: isImgExpanded ? 'none' : 'block' }} className='roadmap-tran text-lg text-[18px] text-white font-normal' >
                            When your account is opened, you can transfer money to Midas and start investing in the stocks you want right away.
                        </span>
                    </p>

                    <p onClick={handleSpanClick} className='text-2xl max-[880px]:w-full cursor-pointer font-bold flex flex-col w-1/2 gap-4 text-white' data-aos-delay="300" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        Make your investments easily and safely
                        <span className={`${isSpanExpanded ? 'opacyti-animat' : 'roadmap-tran'}  text-lg text-[18px] text-white font-normal`} >
                            When your account is opened, you can transfer money to Midas and start investing in the stocks you want right away.
                        </span>
                    </p>
                </div>

                <div className='w-1/2 max-[900px]:w-full flex justify-center' data-aos="fade-up"data-aos-delay="300" data-aos-anchor-placement="top-bottom">
                    <img  className={`${isDivExpanded ? 'opacyti-animat' : 'roadmap-tran'} w-80 my-24`} data-aos="fade-up" data-aos-anchor-placement="top-bottom" src={testImg} alt="" />
                    <img  className={`${isImgExpanded ? 'opacyti-animat' : 'roadmap-tran'} w-80 my-24`} data-aos="fade-up" data-aos-anchor-placement="top-bottom" src={ImgStepper} alt="" />
                    <img  className={`${isSpanExpanded ? 'opacyti-animat' : 'roadmap-tran'} w-80 my-24`} data-aos="fade-up" data-aos-anchor-placement="top-bottom" src={ImgLastter} alt="" />
                </div>

            </div>

            <div className='flex flex-col items-center gap-10 my-10'>
                <p className='text-[40px] flex flex-col w-4/12 max-[890px]:w-full gap-4 text-center font-bold'data-aos-delay="300" data-aos="fade-up" data-aos-anchor-placement="top-bottom">Your Investments Are Safe
                    <span className='text-gray-700 text-[16px] font-normal'>
                        We all work to earn money, we save to secure our future.
                        Therefore, your investment account in Midas is Midas Menkul Değerler A.Ş. secured by partnership.
                    </span>
                </p>

                <div className='flex gap-5 px-12 max-[890px]:flex-col' data-aos-delay="300" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <div className='flex bg-[#F4F8FB] w-3/12 rounded-3xl max-[890px]:w-full p-8 gap-10 flex-col'>
                        <img className='w-16 bg-white' src="https://www.getmidas.com/wp-content/uploads/2022/01/safe-invest-item-image-1.svg" alt="" />
                        <p className='flex flex-col font-bold text-2xl gap-5'>Takasbank Assurance
                            <span className=' font-normal text-[16px]'>
                                Investments you make with Midas in Borsa Istanbul are kept under the guarantee of Takasbank within the scope of the Capital
                                Markets Law No. 6362.

                            </span>
                        </p>

                    </div>


                    <div className='flex bg-[#F4F8FB] w-3/12 rounded-3xl max-[890px]:w-full p-8 gap-10 flex-col'>
                        <img className='w-16 bg-white' src="https://www.getmidas.com/wp-content/uploads/2022/01/safe-invest-item-image-1.svg" alt="" />
                        <p className='flex flex-col font-bold text-2xl gap-5'>Takasbank Assurance
                            <span className=' font-normal text-[16px]'>
                                Investments you make with Midas in Borsa Istanbul are kept under the guarantee of Takasbank within the scope of the Capital
                                Markets Law No. 6362.

                            </span>
                        </p>

                    </div>


                    <div className='flex bg-[#F4F8FB] w-3/12 rounded-3xl max-[890px]:w-full p-8 gap-10 flex-col'>
                        <img className='w-16 bg-white' src="https://www.getmidas.com/wp-content/uploads/2022/01/safe-invest-item-image-1.svg" alt="" />
                        <p className='flex flex-col font-bold text-2xl gap-5'>Takasbank Assurance
                            <span className=' font-normal text-[16px]'>
                                Investments you make with Midas in Borsa Istanbul are kept under the guarantee of Takasbank within the scope of the Capital
                                Markets Law No. 6362.

                            </span>
                        </p>

                    </div>


                    <div className='flex bg-[#F4F8FB] w-3/12 rounded-3xl max-[890px]:w-full p-8 gap-10 flex-col'>
                        <img className='w-16 bg-white' src="https://www.getmidas.com/wp-content/uploads/2022/01/safe-invest-item-image-1.svg" alt="" />
                        <p className='flex flex-col font-bold text-2xl gap-5'>Takasbank Assurance
                            <span className=' font-normal text-[16px]'>
                                Investments you make with Midas in Borsa Istanbul are kept under the guarantee of Takasbank within the scope of the Capital
                                Markets Law No. 6362.

                            </span>
                        </p>

                    </div>



                </div>

            </div>


            <div className='flex my-32 p-20 bg-[#eaf7ff] items-center max-[1075px]:flex-col'>

                <div className='w-5/12 flex flex-col max-[1075px]:w-full max-[1075px]:items-center ml-10 gap-10' data-aos-delay="300" data-aos="fade-up" data-aos-anchor-placement="top-bottom">

                    <p className='text-4xl flex flex-col w-9/12 gap-4  font-bold'>Invest in knowledge with Midas' Ears!
                        <span className='text-lg text-gray-700 font-medium'>
                            We compile the most important financial agenda news for you. Stay up to date by following Midas' Ears!
                        </span>
                    </p>


                </div>

                <div data-aos-delay="300" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='scroll-bar w-7/12 flex max-[550px]:flex-col max-[1075px]:w-full'>
                    <div className='flex flex-col mr-4 max-[550px]:w-full w-4/12 bg-white rounded-3xl '>
                        <img className='w-96 rounded-t-3xl' src="https://www.getmidas.com/wp-content/uploads/2023/07/froto-01-880x660.jpeg" alt="" />
                        <p className='flex flex-col pl-2 text-xl items-start leading-10 gap-8 font-bold '>
                            <span className='text-sm font-medium mt-6'>
                                Ağustos 4, 2023 • 4 dakika okuma süresi
                            </span>

                            time Highlights of the Day: HEKTS, CVKMD, CIMSA, SOKE and ADESE

                            <button className='text-blue-600 pl-2 pb-2 text-base font-normal'>
                                Read more
                            </button>
                        </p>
                    </div>

                    <div className='flex flex-col mr-4 w-4/12 max-[550px]:w-full bg-white rounded-3xl '>
                        <img className='w-96 rounded-t-3xl' src="https://www.getmidas.com/wp-content/uploads/2023/07/froto-01-880x660.jpeg" alt="" />
                        <p className='flex flex-col pl-2 text-xl items-start leading-10 gap-8 font-bold '>
                            <span className='text-sm font-medium mt-6'>
                                Ağustos 4, 2023 • 4 dakika okuma süresi
                            </span>

                            time Highlights of the Day: HEKTS, CVKMD, CIMSA, SOKE and ADESE

                            <button className='text-blue-600 pl-2 pb-2 text-base font-normal'>
                                Read more
                            </button>
                        </p>
                    </div>

                    <div className='flex flex-col mr-4 w-4/12 max-[550px]:w-full bg-white rounded-3xl '>
                        <img className='w-96 rounded-t-3xl' src="https://www.getmidas.com/wp-content/uploads/2023/07/froto-01-880x660.jpeg" alt="" />
                        <p className='flex flex-col pl-2 text-xl items-start leading-10 gap-8 font-bold '>
                            <span className='text-sm font-medium mt-6'>
                                Ağustos 4, 2023 • 4 dakika okuma süresi
                            </span>

                            time Highlights of the Day: HEKTS, CVKMD, CIMSA, SOKE and ADESE

                            <button className='text-blue-600 pl-2 pb-2 text-base font-normal'>
                                Read more
                            </button>
                        </p>
                    </div>


                </div>

            </div>


            <p data-aos-delay="300" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='text-center mb-5 leading-normal flex flex-col font-bold text-[40px]'>
                Frequently Asked Questions
                <span className='font-normal  text-[18px] '>
                    We Are Here To Answer Your Questions!
                </span>
            </p>

            <div className='flex flex-col items-center'>
                <p className='w-8/12 font-semibold text-[#4959EA] mt-8 leading-loose text-[18px] flex flex-col' data-aos-delay="300" data-aos="fade-up" data-aos-anchor-placement="top-bottom" >
                    What are the Legal Responsibilities that Make Midas Trustworthy?
                    <span className='text-start py-5 border-b-[1px] text-black border-[#777777] font-normal text-[18px]'>
                        Değerler A.Ş. is a brokerage house authorized and supervised by the Capital Markets Board (CMB);
                        Midas application is Midas Menkul Değerler A.Ş. It is an investment application that offers services in partnership. In other words, investment transactions Midas Menkul Değerler A.Ş. done by. As with other investment institutions,
                        it is regularly audited and acts within the framework of certain regulations.
                    </span>
                </p>

                <p className='w-8/12 font-semibold text-[#4959EA] mt-8 leading-loose text-[18px] flex flex-col' data-aos-delay="300" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    What are the Legal Responsibilities that Make Midas Trustworthy?
                    <span className='text-start py-5 border-b-[1px] text-black border-[#777777] font-normal text-[18px]'data-aos-delay="300" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        Değerler A.Ş. is a brokerage house authorized and supervised by the Capital Markets Board (CMB);
                        Midas application is Midas Menkul Değerler A.Ş. It is an investment application that offers services in partnership. In other words, investment transactions Midas Menkul Değerler A.Ş. done by. As with other investment institutions,
                        it is regularly audited and acts within the framework of certain regulations.
                    </span>
                </p>

                <p className='w-8/12 font-semibold text-[#4959EA] mt-8 leading-loose text-[18px] flex flex-col' data-aos-delay="300" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    What are the Legal Responsibilities that Make Midas Trustworthy?
                    <span className='text-start py-5 border-b-[1px] text-black border-[#777777] font-normal text-[18px]'>
                        Değerler A.Ş. is a brokerage house authorized and supervised by the Capital Markets Board (CMB);
                        Midas application is Midas Menkul Değerler A.Ş. It is an investment application that offers services in partnership. In other words, investment transactions Midas Menkul Değerler A.Ş. done by. As with other investment institutions,
                        it is regularly audited and acts within the framework of certain regulations.
                    </span>
                </p>


            </div>


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

                <div className='flex justify-start max-[800px]:flex-col mt-4'>
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





        </>
    );
}

export default Homepage;