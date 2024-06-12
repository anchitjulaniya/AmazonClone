import React from 'react'
// import { FaAngleRight } from "react-icons/fa";
// import box1_1 from '../assets/HomeCarousel/box1-1.jpg'
// import box1_2 from '../assets/HomeCarousel/box1-2.jpg'
// import box1_3 from '../assets/HomeCarousel/box1-3.jpg'
// import box1_4 from '../assets/HomeCarousel/box1-4.jpg'
import box2_1 from '../assets/HomeCarousel/box2-1.jpg'
import box2_2 from '../assets/HomeCarousel/box2-2.jpg'
import box2_3 from '../assets/HomeCarousel/box2-3.jpg'
import box2_4 from '../assets/HomeCarousel/box2-4.jpg'
import box3_1 from '../assets/HomeCarousel/box3-1.jpg'
import box3_2 from '../assets/HomeCarousel/box3-2.jpg'
import box3_3 from '../assets/HomeCarousel/box3-3.jpg'
import box3_4 from '../assets/HomeCarousel/box3-4.jpg'




function HomeHero() {
    const obj2 = [
        {
            img: box2_1,
            desc : "Starting ₹99 | Start your fitness journey",
            link : "See all offers",
            img_alt : "product image"
        },
        {
            img: box2_2,
            desc : "Up to 50% off | International brands",
            link : "See all offers",
            img_alt : "product image"
        },
        {
            img: box2_3,
            desc : "Up to 50% off | International brands",
            link : "See all offers",
            img_alt : "product image"
        },
        {
            img: box2_4,
            desc : "Up to 50% off | International brands",
            link : "See all offers",
            img_alt : "product image"
        },

    ]
    const obj3 = [
        {
            img: box3_1,
            desc : "Starting ₹99 | Start your fitness journey",
            link : "See all offers",
            img_alt : "product image"
        },
        {
            img: box3_2,
            desc : "Up to 50% off | International brands",
            link : "See all offers",
            img_alt : "product image"
        },
        {
            img: box3_3,
            desc : "Up to 50% off | International brands",
            link : "See all offers",
            img_alt : "product image"
        },
        {
            img: box3_4,
            desc : "Up to 50% off | International brands",
            link : "See all offers",
            img_alt : "product image"
        },

    ]


  return (
    <div className='bg-[rgb(227,230,230)] w-[100%] flex flex-col items-center gap-4 justify-center pb-2'>
      

         <div className='w-[97%] flex-wrap gap-5 flex items-center justify-center '>
            {obj2.map((item) => {
                return (
                    <div key={item} className='w-[330px] bg-white p-4 flex flex-col  gap-4'>
                        <h1 className='font-bold text-xl'>{item.desc}</h1>
                        <img src={item.img} className='w-full h-[276px]' alt={item.img_alt} />
                        <a href="#" className='text-sky-600'>{item.link}</a>
                    </div>
                )
            })}
         </div>

         <div className='w-[97%] flex-wrap gap-5 flex items-center justify-center'>
            {obj3.map((item) => {
                return (
                    <div key={item} className='w-[330px] bg-white p-4 flex flex-col gap-4'>
                        <h1 className='font-bold text-xl'>{item.desc}</h1>
                        <img src={item.img} className='w-full h-[276px]' alt={item.img_alt} />
                        <a href="#" className='text-sky-600'>{item.link}</a>
                    </div>
                )
            })}
         </div>

    </div>
  )
}

export default HomeHero;



// -------------------------------------
  {/* <div className='w-[97%] h-[500px]'>
    <div className='w-1/4 max-w-[337px] bg-white'>
        <h2>Revamp your home in style</h2>
        <span className='flex w-1/2'>
            <div className='w-1/2 h-1/4'>
                <img src={box1_1} alt="" />
                <p></p>
            </div>
            <div className='w-1/2 h-1/4'>
                <img src={box1_2} alt="" />
            </div>
            
        </span>
        <span className='flex w-1/2'>
            <div className='w-1/2 h-1/4'>
                <img src={box1_3} alt="" />
            </div>
            <div className='w-1/2 h-1/4'>
                <img src={box1_4} alt="" />
            </div>
            
        </span>
    </div>
         </div> */}