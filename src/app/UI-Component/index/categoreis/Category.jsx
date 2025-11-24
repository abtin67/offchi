"use client"

import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import 'swiper/css/autoplay';
import "swiper/css/navigation";
import cateory1 from '../../../../../public/Category1.png'
import cateory2 from '../../../../../public/Category2.png'
import cateory3 from '../../../../../public/Category3.png'
import cateory4 from '../../../../../public/Category4.png'
import cateory5 from '../../../../../public/Category5.png'
import cateory6 from '../../../../../public/Category6.png'
import cateory7 from '../../../../../public/Category7.png'
import cateory8 from '../../../../../public/Category8.png'
import cateory9 from '../../../../../public/Category9.png'
import cateory10 from '../../../../../public/Category10.png'



const categoties =[
    {image:cateory1 , title:"سبزیجات",products:"بیش از 120 محصول"},
    {image:cateory2 , title:"ماهی و گوشت",products:"بیش از 90محصول"},
    {image:cateory3 , title:"دسرها",products:"بیش از 80 محصول"},
    {image:cateory4 , title:"نوشیدنی سرد و گرم",products:"بیش از 60 محصول"},
    {image:cateory5 , title:"غذای حیوانات",products:"بیش از 90 محصول"},
    {image:cateory6 , title:"میوه‌های تازه",products:"بیش از 70 محصول"},
    {image:cateory7 , title:"شکلات ها",products:"بیش از 50 محصول"},
    {image:cateory8 , title:"لبنیات",products:"بیش از 45 محصول"},
    {image:cateory9 , title:"تنقلات",products:"بیش از 110 محصول"},
    {image:cateory10 , title:"غذای منجمد",products:"بیش از 40 محصول"},
]

export default function Category(){
    return(
        <div className='px-[8%] lg:px-[12%] py-10'>
           <Swiper
           
            slidesPerView={7}
            spaceBetween={20}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
                delay:1500
            }}
            speed={1500}
            breakpoints={{
                1200:{slidesPerView:7},
                991:{slidesPerView:6},
                767:{slidesPerView:5},
                575:{slidesPerView:3},
                350:{slidesPerView:2},
                0:{slidesPerView:2},
            }}
           >
            {categoties.map((category , index)=>(
                <SwiperSlide key={index}>
                    <div className="category-wrap   flex flex-col justify-center items-center cursor-pointer">
                        <div className="category-image">
                            <Image src={category.image}
                            alt={category.title}
                            className='transition-all duration-300' />
                        </div>
                        <div className="category-info my-2 flex flex-col justify-center items-center">
                            <h2 className="text-lg hover:text-[#299e60] transition-all duration-300">
                                {category.title}
                            </h2>
                            <p className="text-gray-500">{category.products}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            </Swiper> 
        </div>
    )
}