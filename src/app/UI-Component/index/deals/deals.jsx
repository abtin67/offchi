"useclient";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { CgDanger, CgShoppingBag } from "react-icons/cg";
import { FaArrowLeft,FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { GiShop } from "react-icons/gi";

import Deal1 from "../../../../../public/Deals-img1.png";
import Deal2 from "../../../../../public/Deals-img2.png";

const dealsData = [
  {
    image: Deal1,
    title: "سبزیجات تازه",
    description:
      "مجموعه‌ای از سبزیجات تازه و ارگانیک، مناسب برای یک رژیم غذایی سالم و مغذی.",
  },
  {
    image: Deal2,
    title: "میان‌وعده‌ها",
    description:
      "انواع میان‌وعده‌های خوشمزه و سالم برای تأمین انرژی در طول روز، مناسب برای هر سلیقه‌ای.",
    clssName: "deals-wrap2",
  },
  {
    image: Deal1,
    title: "سبزیجات تازه",
    description:
      "مجموعه‌ای از سبزیجات تازه و ارگانیک، مناسب برای یک رژیم غذایی سالم و مغذی.",
  },
];

import products from "@/app/jsonData/BestDeals.json";
import toast from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";

const handleAddToCart = (product) => {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const existingProduct = cart.find((item) => item.id === product.id);
  if (existingProduct) {
    toast(`${product.title} قبلا اضافه شده است`, {
      icon: <CgDanger size={39} />,
      style: {
        border: "1px solid #facc15",
        padding: "16px",
        color: "#333",
        background: "#fff9c4",
      },
    });
  } else {
    cart.push({ ...product, qty: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));

    window.dispatchEvent(new Event("storageUpdate"));
    toast.success(`${product.title} به سبد خرید اضافه شد!`);
  }
};

export default function Deals() {
  return (
    <div className="px-[8%] lg:px-[12%] py-10">
      <div className="title my-10 w-full flex flex-col lg:flex-row justify-between items-center">
        <h1 className="text-5xl">بهترین پیشنهاد های امروز</h1>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1500,
        }}
        speed={1500}
        breakpoints={{
          1200: { slidesPerView: 2 },
          991: { slidesPerView: 2 },
          767: { slidesPerView: 2 },
          575: { slidesPerView: 1 },
          0: { slidesPerView: 1 },
        }}
      >
        {dealsData.map((deal, index) => (
          <SwiperSlide key={index}>
            <div
              className={`deals-wrap px-5 py-6 rounded-2xl flex flex-col
              lg:flex-row justify-between items-center ${deal.clssName || ""} `}
            >
              <div className="w-full lg:w-1/2 deal-image">
                <Image src={deal.image} alt={deal.title} className="" />
              </div>
              <div className="w-full lg:w-1/2 deal-info">
                <h2 className="font-bold text-4xl leading-11 whitespace-pre-line">
                  {deal.title}
                </h2>
                <p className="my-2 text-gray-800 font-normal">
                  {deal.description}
                  <button
                    className="px-5 flex gap-5 py-3 rounded-full text-white font-bold mt-5 bg-[#299e60]
                hover:bg-white hover:text-[#299e60] hover:border hover:border-[#299e60] transition-all duration-300 cursor-pointer"
                  >
                    خرید
                    <FaArrowLeft size={25} />
                  </button>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* best deals product */}
      <div className="my-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product)=>(
            <div key={product.id} className="product-wrap border border-gray-300 rounded-lg p-4 bg-white shadow-sm
            hover:shadow-md transition-all hover:border-[#299e60]
            cursor-pointer duration-300">
              <div className="relative flex justify-center items-center h-50 w-full">
                <Image
                src={product.image}
                alt={product.title}
                width={180}
                height={180}
                className="object-contain mt-10" />
                <div
                onClick={()=>handleAddToCart(product)}
                className="absolute top-0 left-0 flex justify-between items-center mt-2">
                  <button className="px-4 py-2 flex items-center justify-between gap-2 font-semibold  text-[#299e60] bg-[#e6f9ef]
                  rounded-full text-sm hover:bg-[#299e60] hover:text-white cursor-pointer transition-all duration-300">
                    <p>افزودن</p> 
                    <CgShoppingBag />
                  </button>
                </div>
              </div>
              <Link href={{
                pathname:"/UI-Component/Shop",
                query:{id:product.id}
              }}>
                <div className="space-y-1 mt-5 product-info">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-sm line-through">{product.lessprice}</span>
                    <span className="text-xl font-semibold">{product.price} ت</span><span className="text-gray-500 text-sm">/qty</span>
                  </div>
                  <span className="flex items-center text-yellow-300 text-md">
                    <FaStar /><span className="text-gray-500">{product.review}</span>
                  </span>
                  <h2 className="text-xl font-normal my-2 hover:text-[#299e60] transition-all duration-300">
                    {product.title}
                  </h2>
                  <h6 className="text-lg text-gray-500 flex items-center gap-2">
                    <GiShop size={25} color="#299e60" />خرید سوپرمارکتی
                  </h6>
                  <h3 className="mt-2 text-md text-gray-600">تعداد فروش : {product.sold}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
