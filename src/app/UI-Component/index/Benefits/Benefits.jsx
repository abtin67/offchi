"use client"

import { CiChat1, CiChat2, CiDeliveryTruck } from "react-icons/ci";
import { BsCreditCard2Front } from "react-icons/bs";
import { BsHeartPulse } from "react-icons/bs";
import { CreditCard, CreditCardIcon, HeartPlus, HeartPulse } from "lucide-react";

export default function Benefits (){
    return(
        <>
         <div className="px-[8%] lg:px-[12%] py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="flex items-center justify-center gap-3 px-3 py-5 rounded-lg bg-[#e6f9ef]">
                    <CiDeliveryTruck size={30} className="bg-[#299e60] rounded-full text-white w-12  h-12 p-2"/>
                    <div className="flex flex-col">
                        <h2 className="font-semibold">ارسال رایگان</h2>
                        <p className="text-gray-700">ارسال رایگان به سراسر کشور</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-3 px-3 py-5 rounded-lg bg-[#e6f9ef]">
                    <HeartPulse size={20} className="bg-[#299e60] rounded-full text-white w-12  h-12 p-2"/>
                    <div className="flex flex-col">
                        <h2 className="font-semibold">رضایت صدرصدی</h2>
                        <p className="text-gray-700">ارسال رایگان به سراسر کشور</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-3 px-3 py-5 rounded-lg bg-[#e6f9ef]">
                    <CreditCardIcon size={25} className="bg-[#299e60] rounded-full text-white w-12  h-12 p-2"/>
                    <div className="flex flex-col">
                        <h2 className="font-semibold">پرداخت امن</h2>
                        <p className="text-gray-700">ارسال رایگان به سراسر کشور</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-3 px-3 py-5 rounded-lg bg-[#e6f9ef]">
                    <CiChat1 size={30} className="bg-[#299e60] rounded-full text-white w-12  h-12 p-2"/>
                    <div className="flex flex-col">
                        <h2 className="font-semibold">پشتیبانی {(24).toLocaleString("fa-IR")}/{(7).toLocaleString("fa-IR")}</h2>
                        <p className="text-gray-700">ارسال رایگان به سراسر کشور</p>
                    </div>
                    
                </div>
            </div>
         </div>
        </>
    )
}