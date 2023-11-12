import React, { Component } from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Midas() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, [])


    return ( <>
    
    <div className='flex flex-col px-12 gap-24'>


    <div data-aos-delay="400" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex max-[680px]:flex-col w-full '>
        <div className='flex max-[680px]:w-full flex-col w-7/12'>
        <p data-aos-delay="500" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='text-blue-600 text-base mt-5 cursor-pointer'>Anasayfa Canlı Borsa (15 dakika gecikmeli)</p>

        <p data-aos-delay="500" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className=' text-[54px] font-bold mt-20 p-0'>
        Improve yourself in the investment world with Midas Academy

        </p>
        <span data-aos-delay="700" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='text-[18px] mt-8 text-[#585768]'>
        Farklı finansal okuryazarlık seviyelerindeki kullanıcılarımızı bilgilendiriyor ve yatırımla ilgili sorularına cevap buluyoruz.
        </span>

        <button data-aos-delay="800" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='text-[#4959ea] mt-4 relative flex text-base font-semibold p-4 w-40 rounded-3xl border-[1px] border-[#eeeeee] '>
            learn more
            <svg className='absolute right-1 top-2' width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="23" cy="23" r="23" fill="#4959EA"></circle>
                                    <path d="M23.46 17.48L28.22 22.26L14.7 22.28V23.76H28.22L23.46 28.54L24.52 29.6L31.12 23.02L24.52 16.44L23.46 17.48Z" fill="white"></path>
                                </svg>
        </button>
        
        </div>

        <div data-aos-delay="900" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='w-5/12 max-[680px]:w-full flex items-center '>
            <img className='w-[550px] rounded-2xl' src="https://www.getmidas.com/wp-content/uploads/2023/06/midas-academy-min-1.png" alt="" />
        </div>

    </div>

        <div className='flex justify-between px-5 py-12 w-full gap-5 max-[810px]:flex-wrap max-[680px]:flex-col items-center bg-[#fdfdfd] rounded-3xl border-[1px] border-[#eeeeee]'>
            <div data-aos-delay="400" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='max-[680px]:w-full flex items-center py-8 bg-white rounded-3xl border-[1px] border-[#e6e074] gap-4 w-3/12'>
                <img className='pl-5' src="https://www.getmidas.com/wp-content/uploads/2022/03/levels-content-item-image-1.svg" alt="" />
                <p className='flex flex-col text-[14px] font-bold '>
                    
                    Beginner
                    <span className='font-semibold text-sm text-[#706e81]'>
                    11 Lessons
                    </span>
                </p>
            </div>

            <div data-aos-delay="600" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='max-[680px]:w-full flex items-center py-8 bg-white rounded-3xl border-[1px] border-[#e6e074] gap-4 w-3/12'>
                <img className='pl-5' src="https://www.getmidas.com/wp-content/uploads/2022/01/levels-content-item-image-2.svg" alt="" />
                <p className='flex flex-col text-[14px] font-bold '>
                    
                    Beginner
                    <span className='font-semibold text-sm text-[#706e81]'>
                    11 Lessons
                    </span>
                </p>
            </div>
            <div data-aos-delay="800" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='max-[680px]:w-full flex items-center py-8 bg-white rounded-3xl border-[1px] border-[#e6e074] gap-4 w-3/12'>
                <img className='pl-5' src="https://www.getmidas.com/wp-content/uploads/2022/01/levels-content-item-image-3.svg" alt="" />
                <p className='flex flex-col text-[14px] font-bold '>
                    
                    Beginner
                    <span className='font-semibold text-sm text-[#706e81]'>
                    11 Lessons
                    </span>
                </p>
            </div>
            <div data-aos-delay="1000" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='max-[680px]:w-full flex items-center py-8 bg-white rounded-3xl border-[1px] border-[#e6e074] gap-4 w-3/12'>
                <img className='pl-5' src="https://www.getmidas.com/wp-content/uploads/2022/01/levels-content-item-image-4.svg" alt="" />
                <p className='flex flex-col text-[14px] font-bold '>
                    
                    Beginner
                    <span className='font-semibold text-sm text-[#706e81]'>
                    11 Lessons
                    </span>
                </p>
            </div>
        </div>




        <div className='flex flex-col gap-16'>
        <p data-aos-delay="300" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='text-[24px] border-b-[6px] w-2/12 border-yellow-400 font-bold'>
        Personal Finance
        </p>

        

        <div className='flex max-[750px]:flex-col gap-5'>
            <div data-aos-delay="500" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='w-4/12 max-[750px]:w-full flex flex-col gap-6'>
                <img className='rounded-2xl' src="https://www.getmidas.com/wp-content/uploads/2022/02/para-biriktirme-yontemleri.jpg" alt="" />
                <p className='flex flex-col gap-4 text-xs font-semibold text-[#585768]'>
                    LESSON 1 • 7 MINUTES
                    <span className='text-[26px] leading-10 font-bold'>
                    Money Saving Methods: Managing Income
                    </span>
                </p>

            </div>

            <div data-aos-delay="700" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='max-[750px]:w-full w-4/12 flex flex-col gap-6'>
                <img className='rounded-2xl' src="https://www.getmidas.com/wp-content/uploads/2022/02/neden-yetirim-yapmaliyim.jpg" alt="" />
                <p className='flex flex-col gap-4 text-xs font-semibold text-[#585768]'>
                    LESSON 1 • 7 MINUTES
                    <span className='text-[26px] leading-10 font-bold'>
                    Money Saving Methods: Managing Income
                    </span>
                </p>

            </div>

            <div data-aos-delay="900" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='max-[750px]:w-full w-4/12 flex flex-col gap-6'>
                <img className='rounded-2xl' src="https://www.getmidas.com/wp-content/uploads/2022/02/yatirim-nedir.jpg" alt="" />
                <p className='flex flex-col gap-4 text-xs font-semibold text-[#585768]'>
                    LESSON 1 • 7 MINUTES
                    <span className='text-[26px] leading-10 font-bold'>
                    Money Saving Methods: Managing Income
                    </span>
                </p>

            </div>


        </div>

        </div>


        <div className='flex flex-col gap-16'>
        <p data-aos-delay="300" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='text-[24px] border-b-[6px] w-2/12 border-yellow-400 font-bold'>
        Personal Finance
        </p>

        

        <div className='flex gap-5 max-[750px]:flex-col'>
            <div data-aos-delay="500" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='max-[750px]:w-full w-4/12 flex flex-col gap-6'>
                <img className='rounded-2xl' src="https://www.getmidas.com/wp-content/uploads/2022/02/fed-faiz-arttirirsa-ne-olur.jpg" alt="" />
                <p className='flex flex-col gap-4 text-xs font-semibold text-[#585768]'>
                    LESSON 1 • 7 MINUTES
                    <span className='text-[26px] leading-10 font-bold'>
                    Money Saving Methods: Managing Income
                    </span>
                </p>

            </div>

            <div data-aos-delay="700" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='max-[750px]:w-full w-4/12 flex flex-col gap-6'>
                <img className='rounded-2xl' src="https://www.getmidas.com/wp-content/uploads/2022/02/emir-tipleri-nelerdir.jpg" alt="" />
                <p className='flex flex-col gap-4 text-xs font-semibold text-[#585768]'>
                    LESSON 1 • 7 MINUTES
                    <span className='text-[26px] leading-10 font-bold'>
                    Money Saving Methods: Managing Income
                    </span>
                </p>

            </div>

            <div data-aos-delay="900" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='max-[750px]:w-full w-4/12 flex flex-col gap-6'>
                <img className='rounded-2xl' src="https://www.getmidas.com/wp-content/uploads/2022/02/hisse-senedi-bolunmesi-nedir.jpg" alt="" />
                <p className='flex flex-col gap-4 text-xs font-semibold text-[#585768]'>
                    LESSON 1 • 7 MINUTES
                    <span className='text-[26px] leading-10 font-bold'>
                    Money Saving Methods: Managing Income
                    </span>
                </p>

            </div>


        </div>

        </div>


        <div className='flex flex-col gap-16'>
        <p data-aos-delay="300" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='text-[24px] border-b-[6px] w-2/12 border-yellow-400 font-bold'>
        Personal Finance
        </p>

        

        <div data-aos-delay="300" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='max-[750px]:flex-col flex gap-5'>
            <div data-aos-delay="500" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='max-[750px]:w-full w-4/12 flex flex-col gap-6'>
                <img className='rounded-2xl' src="https://www.getmidas.com/wp-content/uploads/2022/02/para-biriktirme-yontemleri.jpg" alt="" />
                <p className='flex flex-col gap-4 text-xs font-semibold text-[#585768]'>
                    LESSON 1 • 7 MINUTES
                    <span className='text-[26px] leading-10 font-bold'>
                    Money Saving Methods: Managing Income
                    </span>
                </p>

            </div>

            <div data-aos-delay="700" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='max-[750px]:w-full w-4/12 flex flex-col gap-6'>
                <img className='rounded-2xl' src="https://www.getmidas.com/wp-content/uploads/2022/02/neden-yetirim-yapmaliyim.jpg" alt="" />
                <p className='flex flex-col gap-4 text-xs font-semibold text-[#585768]'>
                    LESSON 1 • 7 MINUTES
                    <span className='text-[26px] leading-10 font-bold'>
                    Money Saving Methods: Managing Income
                    </span>
                </p>

            </div>

            <div data-aos-delay="900" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='max-[750px]:w-full w-4/12 flex flex-col gap-6'>
                <img className='rounded-2xl' src="https://www.getmidas.com/wp-content/uploads/2022/02/yatirim-nedir.jpg" alt="" />
                <p className='flex flex-col gap-4 text-xs font-semibold text-[#585768]'>
                    LESSON 1 • 7 MINUTES
                    <span className='text-[26px] leading-10 font-bold'>
                    Money Saving Methods: Managing Income
                    </span>
                </p>

            </div>


        </div>

        </div>

        <div className='flex flex-col gap-16'>
        <p data-aos-delay="300" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='text-[24px] border-b-[6px] w-2/12 border-yellow-400 font-bold'>
        Personal Finance
        </p>

        

        <div className='flex gap-5 max-[750px]:flex-col'>
            <div data-aos-delay="500" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='max-[750px]:w-full w-4/12 flex flex-col gap-6'>
                <img className='rounded-2xl' src="https://www.getmidas.com/wp-content/uploads/2022/02/f-k-orani-nedir.jpg" alt="" />
                <p className='flex flex-col gap-4 text-xs font-semibold text-[#585768]'>
                    LESSON 1 • 7 MINUTES
                    <span className='text-[26px] leading-10 font-bold'>
                    Money Saving Methods: Managing Income
                    </span>
                </p>

            </div>

            <div data-aos-delay="700" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='max-[750px]:w-full w-4/12 flex flex-col gap-6'>
                <img className='rounded-2xl' src="https://www.getmidas.com/wp-content/uploads/2022/02/hisse-basina-kar-nedir.jpg" alt="" />
                <p className='flex flex-col gap-4 text-xs font-semibold text-[#585768]'>
                    LESSON 1 • 7 MINUTES
                    <span className='text-[26px] leading-10 font-bold'>
                    Money Saving Methods: Managing Income
                    </span>
                </p>

            </div>

            <div data-aos-delay="900" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='max-[750px]:w-full w-4/12 flex flex-col gap-6'>
                <img className='rounded-2xl' src="https://www.getmidas.com/wp-content/uploads/2022/02/bilanco-nedir.jpg" alt="" />
                <p className='flex flex-col gap-4 text-xs font-semibold text-[#585768]'>
                    LESSON 1 • 7 MINUTES
                    <span className='text-[26px] leading-10 font-bold'>
                    Money Saving Methods: Managing Income
                    </span>
                </p>

            </div>


        </div>

        </div>


        <div className='w-full flex mt-10 justify-center'>

<div data-aos-delay="400" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='w-9/12 max-[1024px]:flex-col rounded-xl flex'>
    <div className='w-5/12 max-[1024px]:w-full max-[1024px]:rounded-xl rounded-l-xl bg-blue-800'>
        <img src="https://www.getmidas.com/wp-content/themes/basework/dist/img/midas-newsletter-illustration-2.png" alt="" />
    </div>


    <div className='w-7/12 max-[1024px]:w-full bg-blue-600 rounded-r-xl max-[1024px]:rounded-xl px-5 flex flex-col gap-10 items-center'>
        <p className='mt-12 font-bold text-2xl text-white'>Subscribe to Midas Bulletin and follow the financial agenda.</p>
        <form className='w-full flex gap-8 justify-center max-[560px]:flex-col' action="">

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



<div data-aos-delay="300" data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex justify-center w-full items-center'>

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

export default Midas;