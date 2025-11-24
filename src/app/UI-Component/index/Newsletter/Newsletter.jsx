"use client";

import Image from "next/image";
import newsletter from "../../../../../public/newsletter-img.png";

export default function Newsletter() {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="p-10 newsletter-wrap text-white rounded-2xl flex flex-col lg:flex-row justify-between items-center gap-5">
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl lg:text-6xl">
              تخفیف‌های مواد غذایی رو از دست ندهید
            </h1>
            <h3 className="text-md my4">
              با عضویت در خبرنامه، از آخرین تخفیف‌ها و اخبار فروشگاه مطلع شوید
            </h3>
            <div className="mt-7 border border-gray-300 rounded-2xl p-2 flex justify-between items-center">
              <input type="text" className="w-full h-10 outline-none" placeholder="ایمیل خود را وارد کنید..." />
              <button className=" w-35 py-2 my-2 font-semibold text-white
              bg-[#299e60] rounded-md text-[14px] hover:bg-green-700 cursor-pointer transition-all duration-300">
                عضویت
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <Image src={newsletter} alt="newsletter" width={800} height={600}/> 
          </div>
        </div>
      </div>
    </>
  );
}
