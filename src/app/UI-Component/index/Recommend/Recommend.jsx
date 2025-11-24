"use client";

import products from "@/app/jsonData/Recommwnd.json";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { CgDanger, CgShoppingBag, CgShoppingCart } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import { GiShop } from "react-icons/gi";
import { BsBalloonHeart } from "react-icons/bs";


const handleAddToWishlist = (product) => {
  let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
  const existingProduct = wishlist.find((item) => item.id === product.id);
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
    wishlist.push({ ...product, qty: 1 });
    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    window.dispatchEvent(new Event("storageUpdate"));
    toast.success(`${product.title} به علامندی ها اضافه شد!`);
  }
};

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
    toast.success(`${product.title} به  سبد خرید اضافه شد!`);
  }
};

export default function Recommend() {
  return (
    <div className="px-[8%] lg:px-[12%] py-10">
      <div className="title my-10 w-full flex flex-col lg:flex-row justify-between items-center">
        <h1 className="text-5xl">توصیه شده برای شما</h1>
      </div>

      {/* prodducts */}
      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-wrap max-w-[350px] border border-gray-300 rounded-lg p-4 bg-white shadow-sm
                        hover:shadow-md transition-all hover:border-[#299e60]
                        cursor-pointer duration-300"
            >
              <div className="relative flex justify-center items-center h-50 w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={180}
                  height={180}
                  className="object-contain mt-10"
                />
                <div
                className="absolute top-0 left-0 w-[50px] h-[50px] rounded-full bg-[#e6f9ef]
                text-[#299e60] flex items-center justify-center hover:bg-[#299e60] transition-all duration-300 hover:text-white"
                onClick={()=>handleAddToWishlist(product)}
                >
                  <BsBalloonHeart size={35} />
                </div>
                <span
                className={`absolute off-product top-0 right-0 px-4 py-2 text-sm font-bold text-white rounded ${product.sale === "New" ? "bg-yellow-500" : product.sale?.includes("%")?"bg-red-500" :"opacity-0"}`}
                >
                  {product.sale}
                </span>
              </div>
              <Link
                href={{
                  pathname: "/UI-Component/Shop",
                  query: { id: product.id },
                }}
              >
                <div className="space-y-1 mt-5 product-info">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-sm line-through">
                      {product.lessprice}
                    </span>
                    <span className="text-xl font-semibold">
                      {product.price} ت
                    </span>
                    <span className="text-gray-500 text-sm">/qty</span>
                  </div>
                  <span className="flex items-center text-yellow-300 text-md">
                    <FaStar />
                    <span className="text-gray-500">{product.review}</span>
                  </span>
                  <h2 className="text-xl font-normal my-2 hover:text-[#299e60] transition-all duration-300">
                    {product.title}
                  </h2>
                  <h6 className="text-lg text-gray-500 flex items-center gap-2">
                    <GiShop size={25} color="#299e60" />
                    خرید سوپرمارکتی
                  </h6>
                  <h3 className="mt-2 text-md text-gray-600">
                    تعداد فروش : {product.sold}
                  </h3>
                </div>
              </Link>
             
                <button
                 onClick={() => handleAddToCart(product)}
                  className="w-full px-4 py-2 mt-4 border  flex items-center justify-around gap-2 font-semibold  text-[#299e60] bg-[#e6f9ef]
                              rounded-full text-sm hover:bg-[#299e60] hover:text-white cursor-pointer transition-all duration-300"
                >
                  <p>افزودن سبد خرید</p>
                  <CgShoppingCart size={28} />
                </button>
              
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
