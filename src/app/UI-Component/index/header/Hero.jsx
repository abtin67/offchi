"use client";

import Image from "next/image";
import Hero1 from '../../../../../public/hero-img1.png'
import Hero2 from '../../../../../public/hero-img2.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { MdArrowBackIos ,MdOutlineArrowForwardIos} from "react-icons/md";


export default function Hero() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="px-[8%] lg:px-[12%] py-5">
      <div className="p-10 relative px-20 Hero flex items-center gap-5">
        <Swiper
          slidesPerView={1}
          loop={true}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
        >
          {/* slide1 */}
          <SwiperSlide>
            <div className="hero-wrap w-full flex flex-col lg:flex-row items-center justify-between">
              <div className="w-full lg:w-1/2">
                <h1 className="text-2xl lg:text-[3.6rem] font-bold">
                  مواد غذایی روزانه‌تو آنلاین بخر، سریع تحویل بگیر!
                </h1>
                <p className="w-[80%] my-3">
                  با فروشگاه آنلاین ما، خرید روزانه‌ات رو بدون دردسر انجام بده.
                  فقط چند کلیک تا تحویل فوری درب منزل فاصله داری! از میوه و
                  سبزیجات تازه تا محصولات سوپرمارکتی، همه‌چیز آماده‌ست تا سریع
                  به دستت برسه.
                </p>
                <button className="px-5 flex gap-5 py-3 rounded-full text-white font-bold mt-5 bg-[#299e60]
                hover:bg-white hover:text-[#299e60] hover:border hover:border-[#299e60] transition-all duration-300 cursor-pointer">
                    خرید
                    <CgShoppingCart size={25} />
                </button>
              </div>
              <div className="hero-image w-full lg:w-1/2">
                <Image src={Hero1} alt="hero1" className="hero-image" />
              </div>
            </div>
          </SwiperSlide>
          {/* slide2 */}
           <SwiperSlide>
            <div className="hero-wrap w-full flex flex-col lg:flex-row items-center justify-between">
              <div className="w-full lg:w-1/2">
                <h1 className="text-2xl lg:text-[3.6rem] font-bold">
                  مواد غذایی روزانه‌تو آنلاین بخر، سریع تحویل بگیر!
                </h1>
                <p className="w-[80%] my-3">
                  با فروشگاه آنلاین ما، خرید روزانه‌ات رو بدون دردسر انجام بده.
                  فقط چند کلیک تا تحویل فوری درب منزل فاصله داری! از میوه و
                  سبزیجات تازه تا محصولات سوپرمارکتی، همه‌چیز آماده‌ست تا سریع
                  به دستت برسه.
                </p>
                <button className="px-5 flex gap-5 py-3 rounded-full text-white font-bold mt-5 bg-[#299e60]
                hover:bg-white hover:text-[#299e60] hover:border hover:border-[#299e60] transition-all duration-300 cursor-pointer">
                    خرید
                    <CgShoppingCart size={25} />
                </button>
              </div>
              <div className="hero-image w-full lg:w-1/2">
                <Image src={Hero2} alt="hero1" className="hero-image" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* دکمه های شخصی سازی شده */}
        <div
        ref={prevRef}
        className="swiper-button-prev absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full
        bg-white/80 px-3 py-2 shadow hover:bg-white"
        >
            <MdOutlineArrowForwardIos />
        </div>
        <div
        ref={nextRef}
        className="swiper-button-next absolute ring-4 top-1/2 z-10 -translate-y-1/2 rounded-full
        bg-white/80 px-3 py-2 shadow hover:bg-white"
        >
            <MdArrowBackIos />
        </div>
      </div>
    </div>
  );
}
