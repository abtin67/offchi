"use client"

import Image from "next/image";
import deliveryMan from '../../../../../public/delivery-man.png';
import specialSnacks from '../../../../../public/special-snacks-img.png';
import { CgShoppingCart } from "react-icons/cg";


export default function Banner(){
    return(
        <>
            <div className="px-[8%] lg:px-[12%] pb-10">
                <div className="banner h-[300px] relative rounded-2xl flex justify-between  items-center">
                   <Image
                   src={deliveryMan}
                   alt="deliveryMan"
                   className="banner-img1 absolute -bottom-10 left-5"
                   />
                   <div className="flex flex-col items-center w-[100%] text-center">
                    <h1 className="text-white text-4xl w-[100%] leading-15 text-center">
                       ما سفارش‌ها را روز بعد، از ساعت ۱۰ صبح <br />تا ۸ شب تحویل می‌دهیم.
                    </h1>
                    <p className="text-white py-3 text-lg">برای سفارش‌هایی با مبلغ {(1000000).toLocaleString("fa-IR")}  به بالا</p>
                     <button className="px-8 py-3 my-3 text-lg font-semibold text-[#299e60] bg-[#e6f9ef] rounded-md
                     text-md hover:bg-white flex items-center gap-2 hover:text-[#299e60] cursor-pointer transition-all duration-300">
                        خرید <CgShoppingCart size={25} />
                     </button>
                   </div>
                   <Image
                   src={specialSnacks}
                   alt="specialSnacks"
                   className="banner-img2 absolute w-[30%] top-10 right-0"
                   />
                </div>
            </div>
        </>
    )
}