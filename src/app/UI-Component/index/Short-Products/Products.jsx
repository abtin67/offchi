"use client"


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import products from "@/app/jsonData/ShortProducts.json"
import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";


export default function ShortProducts(){
    return(
        <>
        <div className="px-[8%] lg:px-[12%] py-10">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* featured */}
            <div className="flex flex-col rounded-2xl gap-2 p-3 border border-gray-300 hover:border-[#299e60] transition-all duration-300 cursor-pointer">
                <div className="short-product-title  bg-[#e6f9ef] py-2 px-4 rounded-md">
                    <h2 className="text-xl inline-block pb-2">محصولات ویژه</h2>
                </div>
                <div className="w-full mt-5">
                    <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    speed={1200}
                    autoplay={{
                        delay:1500,
                        disableOnInteraction:false
                    }}
                    modules={[Autoplay]}
                    >
                        <SwiperSlide>
                            {products.Featured.map((item)=>(
                                <Link
                                key={item.id}
                                href={{
                                    pathname:"/UI-Component/Shop",
                                    query:{id:item.id}
                                }}
                                >
                                    <div className="short-product w-full flex justify-between items-center gap-3 mb-3">
                                        <div className="w-1/3">
                                        <Image 
                                        src={item.image}
                                        alt={item.title}
                                        width={260}
                                        height={160}
                                        className="object-contain border border-gray-300 rounded-2xl"
                                        />
                                        </div>
                                        <div className="w-1/1 short-product-info flex flex-col">
                                        <h5 className="flex gap-1 text-gray-400 text-[12px]">
                                            4.8 <FaStar />{item.review} پسند
                                        </h5>
                                        <h2 className="hover:text-[#299e60] transition-all duration-300">{item.title}</h2>
                                        <div className="flex gap-2">
                                            <h3 className="font-semibold">{Number(item.price).toLocaleString("fa-IR")}ت</h3>
                                            <del className="text-gray-400">{Number(item.lessprice).toLocaleString("fa-IR")}ت</del>
                                        </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </SwiperSlide>
                         <SwiperSlide>
                            {products.Featured.map((item)=>(
                                <Link
                                key={item.id}
                                href={{
                                    pathname:"/UI-Component/Shop",
                                    query:{id:item.id}
                                }}
                                >
                                    <div className="short-product w-full flex justify-between items-center gap-3 mb-3">
                                        <div className="w-1/3">
                                        <Image 
                                        src={item.image}
                                        alt={item.title}
                                        width={260}
                                        height={160}
                                        className="object-contain border border-gray-300 rounded-2xl"
                                        />
                                        </div>
                                        <div className="w-1/1 short-product-info flex flex-col">
                                        <h5 className="flex gap-1 text-gray-400 text-[12px]">
                                            4.8 <FaStar />{item.review} پسند
                                        </h5>
                                        <h2 className="hover:text-[#299e60] transition-all duration-300">{item.title}</h2>
                                        <div className="flex gap-2">
                                            <h3 className="font-semibold">{Number(item.price).toLocaleString("fa-IR")}ت</h3>
                                            <del className="text-gray-400">{Number(item.lessprice).toLocaleString("fa-IR")}ت</del>
                                        </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </SwiperSlide>
                         <SwiperSlide>
                            {products.Featured.map((item)=>(
                                <Link
                                key={item.id}
                                href={{
                                    pathname:"/UI-Component/Shop",
                                    query:{id:item.id}
                                }}
                                >
                                    <div className="short-product w-full flex justify-between items-center gap-3 mb-3">
                                        <div className="w-1/3">
                                        <Image 
                                        src={item.image}
                                        alt={item.title}
                                        width={260}
                                        height={160}
                                        className="object-contain border border-gray-300 rounded-2xl"
                                        />
                                        </div>
                                        <div className="w-1/1 short-product-info flex flex-col">
                                        <h5 className="flex gap-1 text-gray-400 text-[12px]">
                                            4.8 <FaStar />{item.review} پسند
                                        </h5>
                                        <h2 className="hover:text-[#299e60] transition-all duration-300">{item.title}</h2>
                                        <div className="flex gap-2">
                                            <h3 className="font-semibold">{Number(item.price).toLocaleString("fa-IR")}ت</h3>
                                            <del className="text-gray-400">{Number(item.lessprice).toLocaleString("fa-IR")}ت</del>
                                        </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
             {/* top selling */}
            <div className="flex flex-col rounded-2xl gap-2 p-3 border border-gray-300 hover:border-[#299e60] transition-all duration-300 cursor-pointer">
                <div className="short-product-title  bg-[#e6f9ef] py-2 px-4 rounded-md">
                    <h2 className="text-xl inline-block pb-2">پرفروش‌ترین محصولات</h2>
                </div>
                <div className="w-full mt-5">
                    <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    speed={1200}
                    autoplay={{
                        delay:1700,
                        disableOnInteraction:false
                    }}
                    modules={[Autoplay]}
                    >
                        <SwiperSlide>
                            {products.TopSelling1.map((item)=>(
                                <Link
                                key={item.id}
                                href={{
                                    pathname:"/UI-Component/Shop",
                                    query:{id:item.id}
                                }}
                                >
                                    <div className="short-product w-full flex justify-between items-center gap-3 mb-3">
                                        <div className="w-1/3">
                                        <Image 
                                        src={item.image}
                                        alt={item.title}
                                        width={260}
                                        height={160}
                                        className="object-contain border border-gray-300 rounded-2xl"
                                        />
                                        </div>
                                        <div className="w-1/1 short-product-info flex flex-col">
                                        <h5 className="flex gap-1 text-gray-400 text-[12px]">
                                            4.8 <FaStar />{item.review} پسند
                                        </h5>
                                        <h2 className="hover:text-[#299e60] transition-all duration-300">{item.title}</h2>
                                        <div className="flex gap-2">
                                            <h3 className="font-semibold">{Number(item.price).toLocaleString("fa-IR")}ت</h3>
                                            <del className="text-gray-400">{Number(item.lessprice).toLocaleString("fa-IR")}ت</del>
                                        </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </SwiperSlide>
                         <SwiperSlide>
                            {products.TopSelling1.map((item)=>(
                                <Link
                                key={item.id}
                                href={{
                                    pathname:"/UI-Component/Shop",
                                    query:{id:item.id}
                                }}
                                >
                                    <div className="short-product w-full flex justify-between items-center gap-3 mb-3">
                                        <div className="w-1/3">
                                        <Image 
                                        src={item.image}
                                        alt={item.title}
                                        width={260}
                                        height={160}
                                        className="object-contain border border-gray-300 rounded-2xl"
                                        />
                                        </div>
                                        <div className="w-1/1 short-product-info flex flex-col">
                                        <h5 className="flex gap-1 text-gray-400 text-[12px]">
                                            4.8 <FaStar />{item.review} پسند
                                        </h5>
                                        <h2 className="hover:text-[#299e60] transition-all duration-300">{item.title}</h2>
                                        <div className="flex gap-2">
                                            <h3 className="font-semibold">{Number(item.price).toLocaleString("fa-IR")}ت</h3>
                                            <del className="text-gray-400">{Number(item.lessprice).toLocaleString("fa-IR")}ت</del>
                                        </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </SwiperSlide>
                         <SwiperSlide>
                            {products.TopSelling1.map((item)=>(
                                <Link
                                key={item.id}
                                href={{
                                    pathname:"/UI-Component/Shop",
                                    query:{id:item.id}
                                }}
                                >
                                    <div className="short-product w-full flex justify-between items-center gap-3 mb-3">
                                        <div className="w-1/3">
                                        <Image 
                                        src={item.image}
                                        alt={item.title}
                                        width={260}
                                        height={160}
                                        className="object-contain border border-gray-300 rounded-2xl"
                                        />
                                        </div>
                                        <div className="w-1/1 short-product-info flex flex-col">
                                        <h5 className="flex gap-1 text-gray-400 text-[12px]">
                                            4.8 <FaStar />{item.review} پسند
                                        </h5>
                                        <h2 className="hover:text-[#299e60] transition-all duration-300">{item.title}</h2>
                                        <div className="flex gap-2">
                                            <h3 className="font-semibold">{Number(item.price).toLocaleString("fa-IR")}ت</h3>
                                            <del className="text-gray-400">{Number(item.lessprice).toLocaleString("fa-IR")}ت</del>
                                        </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            {/* on sale */}
             <div className="flex flex-col rounded-2xl gap-2 p-3 border border-gray-300 hover:border-[#299e60] transition-all duration-300 cursor-pointer">
                <div className="short-product-title  bg-[#e6f9ef] py-2 px-4 rounded-md">
                    <h2 className="text-xl inline-block pb-2">محصولات حراج</h2>
                </div>
                <div className="w-full mt-5">
                    <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    speed={1200}
                    autoplay={{
                        delay:1900,
                        disableOnInteraction:false
                    }}
                    modules={[Autoplay]}
                    >
                        <SwiperSlide>
                            {products.OnSale.map((item)=>(
                                <Link
                                key={item.id}
                                href={{
                                    pathname:"/UI-Component/Shop",
                                    query:{id:item.id}
                                }}
                                >
                                    <div className="short-product w-full flex justify-between items-center gap-3 mb-3">
                                        <div className="w-1/3">
                                        <Image 
                                        src={item.image}
                                        alt={item.title}
                                        width={260}
                                        height={160}
                                        className="object-contain border border-gray-300 rounded-2xl"
                                        />
                                        </div>
                                        <div className="w-1/1 short-product-info flex flex-col">
                                        <h5 className="flex gap-1 text-gray-400 text-[12px]">
                                            4.8 <FaStar />{item.review} پسند
                                        </h5>
                                        <h2 className="hover:text-[#299e60] transition-all duration-300">{item.title}</h2>
                                        <div className="flex gap-2">
                                            <h3 className="font-semibold">{Number(item.price).toLocaleString("fa-IR")}ت</h3>
                                            <del className="text-gray-400">{Number(item.lessprice).toLocaleString("fa-IR")}ت</del>
                                        </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </SwiperSlide>
                         <SwiperSlide>
                            {products.OnSale.map((item)=>(
                                <Link
                                key={item.id}
                                href={{
                                    pathname:"/UI-Component/Shop",
                                    query:{id:item.id}
                                }}
                                >
                                    <div className="short-product w-full flex justify-between items-center gap-3 mb-3">
                                        <div className="w-1/3">
                                        <Image 
                                        src={item.image}
                                        alt={item.title}
                                        width={260}
                                        height={160}
                                        className="object-contain border border-gray-300 rounded-2xl"
                                        />
                                        </div>
                                        <div className="w-1/1 short-product-info flex flex-col">
                                        <h5 className="flex gap-1 text-gray-400 text-[12px]">
                                            4.8 <FaStar />{item.review} پسند
                                        </h5>
                                        <h2 className="hover:text-[#299e60] transition-all duration-300">{item.title}</h2>
                                        <div className="flex gap-2">
                                            <h3 className="font-semibold">{Number(item.price).toLocaleString("fa-IR")}ت</h3>
                                            <del className="text-gray-400">{Number(item.lessprice).toLocaleString("fa-IR")}ت</del>
                                        </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </SwiperSlide>
                         <SwiperSlide>
                            {products.OnSale.map((item)=>(
                                <Link
                                key={item.id}
                                href={{
                                    pathname:"/UI-Component/Shop",
                                    query:{id:item.id}
                                }}
                                >
                                    <div className="short-product w-full flex justify-between items-center gap-3 mb-3">
                                        <div className="w-1/3">
                                        <Image 
                                        src={item.image}
                                        alt={item.title}
                                        width={260}
                                        height={160}
                                        className="object-contain border border-gray-300 rounded-2xl"
                                        />
                                        </div>
                                        <div className="w-1/1 short-product-info flex flex-col">
                                        <h5 className="flex gap-1 text-gray-400 text-[12px]">
                                            4.8 <FaStar />{item.review} پسند
                                        </h5>
                                        <h2 className="hover:text-[#299e60] transition-all duration-300">{item.title}</h2>
                                        <div className="flex gap-2">
                                            <h3 className="font-semibold">{Number(item.price).toLocaleString("fa-IR")}ت</h3>
                                            <del className="text-gray-400">{Number(item.lessprice).toLocaleString("fa-IR")}ت</del>
                                        </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            {/* top rated */}
             <div className="flex flex-col rounded-2xl gap-2 p-3 border border-gray-300 hover:border-[#299e60] transition-all duration-300 cursor-pointer">
                <div className="short-product-title  bg-[#e6f9ef] py-2 px-4 rounded-md">
                    <h2 className="text-xl inline-block pb-2">محصولات برتر</h2>
                </div>
                <div className="w-full mt-5">
                    <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    speed={1200}
                    autoplay={{
                        delay:1500,
                        disableOnInteraction:false
                    }}
                    modules={[Autoplay]}
                    >
                        <SwiperSlide>
                            {products.TopRated.map((item)=>(
                                <Link
                                key={item.id}
                                href={{
                                    pathname:"/UI-Component/Shop",
                                    query:{id:item.id}
                                }}
                                >
                                    <div className="short-product w-full flex justify-between items-center gap-3 mb-3">
                                        <div className="w-1/3">
                                        <Image 
                                        src={item.image}
                                        alt={item.title}
                                        width={260}
                                        height={160}
                                        className="object-contain border border-gray-300 rounded-2xl"
                                        />
                                        </div>
                                        <div className="w-1/1 short-product-info flex flex-col">
                                        <h5 className="flex gap-1 text-gray-400 text-[12px]">
                                            4.8 <FaStar />{item.review} پسند
                                        </h5>
                                        <h2 className="hover:text-[#299e60] transition-all duration-300">{item.title}</h2>
                                        <div className="flex gap-2">
                                            <h3 className="font-semibold">{Number(item.price).toLocaleString("fa-IR")}ت</h3>
                                            <del className="text-gray-400">{Number(item.lessprice).toLocaleString("fa-IR")}ت</del>
                                        </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </SwiperSlide>
                         <SwiperSlide>
                            {products.TopRated.map((item)=>(
                                <Link
                                key={item.id}
                                href={{
                                    pathname:"/UI-Component/Shop",
                                    query:{id:item.id}
                                }}
                                >
                                    <div className="short-product w-full flex justify-between items-center gap-3 mb-3">
                                        <div className="w-1/3">
                                        <Image 
                                        src={item.image}
                                        alt={item.title}
                                        width={260}
                                        height={160}
                                        className="object-contain border border-gray-300 rounded-2xl"
                                        />
                                        </div>
                                        <div className="w-1/1 short-product-info flex flex-col">
                                        <h5 className="flex gap-1 text-gray-400 text-[12px]">
                                            4.8 <FaStar />{item.review} پسند
                                        </h5>
                                        <h2 className="hover:text-[#299e60] transition-all duration-300">{item.title}</h2>
                                        <div className="flex gap-2">
                                            <h3 className="font-semibold">{Number(item.price).toLocaleString("fa-IR")}ت</h3>
                                            <del className="text-gray-400">{Number(item.lessprice).toLocaleString("fa-IR")}ت</del>
                                        </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </SwiperSlide>
                         <SwiperSlide>
                            {products.TopRated.map((item)=>(
                                <Link
                                key={item.id}
                                href={{
                                    pathname:"/UI-Component/Shop",
                                    query:{id:item.id}
                                }}
                                >
                                    <div className="short-product w-full flex justify-between items-center gap-3 mb-3">
                                        <div className="w-1/3">
                                        <Image 
                                        src={item.image}
                                        alt={item.title}
                                        width={260}
                                        height={160}
                                        className="object-contain border border-gray-300 rounded-2xl"
                                        />
                                        </div>
                                        <div className="w-1/1 short-product-info flex flex-col">
                                        <h5 className="flex gap-1 text-gray-400 text-[12px]">
                                            4.8 <FaStar />{item.review} پسند
                                        </h5>
                                        <h2 className="hover:text-[#299e60] transition-all duration-300">{item.title}</h2>
                                        <div className="flex gap-2">
                                            <h3 className="font-semibold">{Number(item.price).toLocaleString("fa-IR")}ت</h3>
                                            <del className="text-gray-400">{Number(item.lessprice).toLocaleString("fa-IR")}ت</del>
                                        </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
           </div>
        </div>
        </>
    )
}