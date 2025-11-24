"use client";

import Link from "next/link";

import { IoSearch } from "react-icons/io5";
import { CiLocationOn, CiHeart } from "react-icons/ci";
import { TbShoppingCartDiscount } from "react-icons/tb";

//all json data
import bestDeals from "@/app/jsonData/BestDeals.json";
import arrivals from "@/app/jsonData/Arrivals .json";
import HotDeals from "@/app/jsonData/HotDeals.json";
import BestSales from "@/app/jsonData/BestSales.json";
import ShortProducts from "@/app/jsonData/ShortProducts.json";
import OrganicFood from "@/app/jsonData/OrganicFood.json";
import Recommwnd from "@/app/jsonData/Recommwnd.json";
import { useEffect, useMemo, useState } from "react";

export default function MiddleNav() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState([]);

  const allProduct = useMemo(()=> [
    ...arrivals,
    ...bestDeals,
    ...BestSales,
    ...HotDeals,
    ...OrganicFood,
    ...Recommwnd,
    ...(ShortProducts?.Featured.map(p=>({...p , id:`Featured-${p.id}`})) || []),
    ...(ShortProducts?.OnSale.map(p=>({...p , id:`Featured-${p.id}`})) || []),
    ...(ShortProducts?.TopRated.map(p=>({...p , id:`Featured-${p.id}`})) || []),
    ...(ShortProducts?.TopSelling1.map(p=>({...p , id:`Featured-${p.id}`})) || [])
  ],[])
  

  useEffect(() => {
    if (!searchTerm.trim()) {
      setResult([]);
      return;
    }

    const filtered = allProduct.filter((p) =>
      (p.name || p.title || "").toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResult(filtered);
    console.log(filtered);
  }, [searchTerm, allProduct]);

  useEffect(() => {
    const loadCounts = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

      const uniqueCart = new Set(cart.map((item) => item.id));
      const uniqueWishlist = new Set(wishlist.map((item) => item.id));

      setCartCount(uniqueCart.size);
      setWishlistCount(uniqueWishlist.size);
    };
    loadCounts();
    window.addEventListener("storageUpdate", loadCounts);
    return () => window.removeEventListener("storageUpdate", loadCounts);
  }, []);

  return (
    <div className="w-full bg-[#e6f9ef] border-b border-gray-300 relative">
      <div className="flex items-center justify-between py-5 px-[8%] lg:px-[12%]">
        <Link
          href={`/`}
          className="text-3xl hidden md:flex font-bold vazirmatn text-black hover:text-[#530821] transition-colors duration-300"
        >
          تخفیف<span className="text-[#299e60]">!چی؟</span>
        </Link>
        <Link
          dir="ltr"
          href={`/`}
          className="text-2xl font-bold md:hidden vazirmatn text-black hover:text-[#530821] transition-colors duration-300"
        >
          Off<span className="text-[#299e60]">!chi?</span>
        </Link>
        {/* سرچ */}
        <div className="flex flex-1 ms-6 lg:mx-0 max-w-xl relative">
          <input
            type="text"
            placeholder="جستجو..."
            className="w-[100px] sm:flex-1 border px-3 py-2 rounded-s-lg border-gray-400 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-[#299e60] text-white px-3 rounded-l cursor-pointer">
            <IoSearch size={23} />
          </button>

          {/* search result */}
          {result.length > 0 && (
            <div
              className="search-result absolute top-12 right-0 bg-white border border-gray-300
            rounded-md shadow-lg grid grid-cols-1 z-[999999] lg:grid-cols-3 gap-3 max-h-[500px] overflow-y-auto"
            >
              {result.map((item, index) => (
                <Link
                  key={`${item.id}-${index}`}
                  href={{
                    pathname: "/UI-Component/Shop",
                    query: { id: item.id },
                  }}
                  onClick={() => setSearchTerm("")}
                >
                  <div className="flex flex-col items-center p-2 border border-gray-300 rounded hover:shadow-lg transition-all">
                    <img
                      src={item.productImage || item.image}
                      alt={item.name || item.title}
                      className="w-full object-cover rounded"
                    />
                    <h3 className="font-semibold text-sm text-center mt-2">
                      {item.name || item.title}
                      </h3>
                      <p className="text-gray-500 text-xs mt-1">{item.price || item.price} ت</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {/* location dropdown*/}
          <div className="hidden lg:flex text-sm ms-5 bg-white items-center ps-4 rounded-lg border border-gray-400">
            <CiLocationOn size={25} className="text-[#299e60]" />
            <select
              name="location"
              className="px-3 rounded-lg text-[#299e60] font-semibold focus:border-[#299e60] appearance-none cursor-pointer outline-none"
              defaultValue="تهران"
            >
              <option>تهران</option>
              <option>رشت</option>
              <option>شیراز</option>
              <option>مشهد</option>
              <option>سنندج</option>
              <option>اراک</option>
            </select>
          </div>
        </div>
        {/* سبدولیست خرید */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* لیست خرید */}

          <Link href={`/UI-Component/Pages/Wishlist`} className="relative">
            <CiHeart size={36} />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#299e60] text-white w-5 h-5 flex items-center justify-center rounded-full text-xs">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* سبد خرید */}
          <Link href={`/UI-Component/Pages/Cart`} className="relative">
            <TbShoppingCartDiscount size={36} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#299e60] text-white w-5 h-5 flex items-center justify-center rounded-full text-xs">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
