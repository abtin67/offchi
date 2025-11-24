"use client";

import { BsGeoAlt } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import payment from "../../../../public/payment.png";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <>
      <div className="footer px-[8%] lg:px-[12%] py-5 mt-10">
        <div className="flex flex-col lg:flex-row gap-3 pb-5">
          <div className="flex flex-col">
            <Link
              href={`/`}
              className="text-3xl  md:flex font-bold vazirmatn text-black hover:text-[#530821] transition-colors duration-300"
            >
              تخفیف<span className="text-[#299e60]">!چی؟</span>
            </Link>
            <p className="my-3 text-gray-700">ما یک فروشگاه مواد غذایی هستیم، تیمی نوآور از تأمین‌کنندگان مواد غذایی.</p>
            <div className="flex flex-col gap-y-6 mt-3">
                <p className="text-sm flex items-center gap-4"><BsGeoAlt className="p-2 rounded-full mr-3 h-8 w-8 text-white bg-[#299e60]" />تهران، خیابان ولیعصر، کوچه بهار، پلاک ۷۸۹</p>
                <p className="text-sm flex items-center gap-4"><FaPhone className="p-2 rounded-full mr-3 h-8 w-8 text-white bg-[#299e60]" />09038308519</p>
                <p className="text-sm flex items-center gap-4"><MdOutlineEmail className="p-2 rounded-full mr-3 h-8 w-8 text-white bg-[#299e60]" />aghebatiferydoun902@gmail.com</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-12 lg:mt-0">
            <div className="flex flex-col ps-2">
              <h2 className="text-2xl mb-3">اطلاعات</h2>
              <Link href={`#`} className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-[#299e60] hover:ps-2 transition-all duration-300">فروشنده شدن</Link>
              <Link href={`#`} className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-[#299e60] hover:ps-2 transition-all duration-300">همکاری در فروش</Link>
              <Link href={`#`} className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-[#299e60] hover:ps-2 transition-all duration-300">سیاست حفظ حریم خصوصی</Link>
              <Link href={`#`} className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-[#299e60] hover:ps-2 transition-all duration-300">تأمین‌کنندگان ما</Link>
              <Link href={`#`} className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-[#299e60] hover:ps-2 transition-all duration-300">پلن پیشرفته</Link>
              <Link href={`#`} className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-[#299e60] hover:ps-2 transition-all duration-300">انجمن</Link>
            </div>

             <div className="flex flex-col ps-2">
              <h2 className="text-2xl mb-3">حمایت</h2>
              <Link href={`#`} className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-[#299e60] hover:ps-2 transition-all duration-300">مرکز پشتیبانی</Link>
              <Link href={`#`} className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-[#299e60] hover:ps-2 transition-all duration-300">ارتباط با ما</Link>
              <Link href={`#`} className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-[#299e60] hover:ps-2 transition-all duration-300">گزارش تخلف</Link>
              <Link href={`#`} className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-[#299e60] hover:ps-2 transition-all duration-300">ثبت و اعتراض</Link>
              <Link href={`#`} className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-[#299e60] hover:ps-2 transition-all duration-300">سیاست‌ها و قوانین</Link>
              <Link href={`#`} className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-[#299e60] hover:ps-2 transition-all duration-300">خرید آنلاین</Link>
            </div>

             <div className="flex flex-col ps-2">
              <h2 className="text-2xl mb-3">حساب</h2>
              <Link href={`#`} className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-[#299e60] hover:ps-2 transition-all duration-300">حساب من</Link>
              <Link href={`#`} className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-[#299e60] hover:ps-2 transition-all duration-300">تاریخچه سفارش</Link>
              <Link href={`#`} className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-[#299e60] hover:ps-2 transition-all duration-300">سبد خرید</Link>
              <Link href={`#`} className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-[#299e60] hover:ps-2 transition-all duration-300">بررسی و مقایسه</Link>
              <Link href={`#`} className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-[#299e60] hover:ps-2 transition-all duration-300">ثبت تیکت</Link>
              <Link href={`#`} className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-[#299e60] hover:ps-2 transition-all duration-300">علاقمندی ها</Link>
            </div>

             <div className="flex flex-col ps-2">
              <h2 className="text-2xl mb-3">خواربار</h2>
              <Link href={`#`} className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-[#299e60] hover:ps-2 transition-all duration-300">لبنیات و تخم‌مرغ</Link>
              <Link href={`#`} className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-[#299e60] hover:ps-2 transition-all duration-300">گوشت و ماهی</Link>
              <Link href={`#`} className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-[#299e60] hover:ps-2 transition-all duration-300">انواع صبحانه</Link>
              <Link href={`#`} className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-[#299e60] hover:ps-2 transition-all duration-300">لوازم خانگی</Link>
              <Link href={`#`} className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-[#299e60] hover:ps-2 transition-all duration-300">نان و شیرینی</Link>
              <Link href={`#`} className="mb-2 text-gray-600 text-[17px] font-[400] hover:text-[#299e60] hover:ps-2 transition-all duration-300">مواد اولیه اصلی</Link>
            </div>
          </div>
          
        </div>
      </div>
      <button className="button-footer px-[8%] lg:px-[12%] py-5 bg-[#e6f9ef]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-lg">©.2025. تمام حقوق این سایت محفوظ است</p>
          <Image src={payment} alt="payment" />
        </div>
      </button>
    </>
  );
}
