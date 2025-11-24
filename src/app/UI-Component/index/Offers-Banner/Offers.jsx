"use client";

import Image from "next/image";
import Deal1 from "../../../../../public/offer-img1.png";
import Deal2 from "../../../../../public/offer-img2.png";
import { FaArrowLeft } from "react-icons/fa";

const dealData = [
  {
    image: Deal1,
    title: "100 هزار تومان برای اولین سفارش",
    description: "تحویل در عرض 1 ساعت",
  },
  {
    image: Deal2,
    title: "100 هزار تومان برای اولین سفارش",
    description: "تحویل در عرض 1 ساعت",
  },
];

export default function Offers() {
  return (
    <div className="px-[8%] lg:px-[12%] mb-10">
      <div className="flex flex-col lg:flex-row gap-8">
        {dealData.map((deal, index) => (
          <div
            key={index}
            className={`offer-wrap px-5 py-6 rounded-2xl flex flex-col
                        md:flex-row justify-between gap-5 items-center ${
                          deal.className || ""
                        }`}
          >
            <div className="w-full lg:w-1/2 deal-image">
              <Image src={deal.image} alt={deal.title} className="" />
            </div>

            <div className="w-full lg:w-1/2 deal-info">
              <h2 className="font-bold text-white text-4xl leading-11 whitespace-pre-line">
                {deal.title}
              </h2>
              <p className="my-2 text-lg text-white font-normal">
                {deal.description}{" "}
                <span className="text-yellow-500 ms-2">
                  تاریخ انقضا: ۵ بهمن
                </span>
              </p>
              <button className="px-5 py-3 rounded-full text-white font-bold mt-5 bg-[#000] flex justify-between gap-2 hover:bg-white hover:text-[#299e60]  hover:border-2">
                خرید <FaArrowLeft  className="font-semibold" size={25} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
