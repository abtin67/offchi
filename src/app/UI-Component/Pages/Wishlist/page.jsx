"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CgClose, CgDanger, CgShoppingCart } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import { GiShop } from "react-icons/gi";

export default function Wishlist() {
  const [wishlistItem, setWishlistItem] = useState([]);

  useEffect(() => {
    const loadWishlist = () => {
      try {
        const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
        setWishlistItem(wishlist);
      } catch (error) {
        console.error(error);
        setWishlistItem([]);
      }
    };
    loadWishlist();
    window.addEventListener("storageUpdate", loadWishlist);
    return () => window.removeEventListener("storageUpdate", loadWishlist);
  }, []);

  //remove item from wishlist
  const handleRemove = (productId) => {
    const updateWishlist = wishlistItem.filter((item) => item.id !== productId);
    localStorage.setItem("wishlist", JSON.stringify(updateWishlist));
    window.dispatchEvent(new Event("storageUpdate"));
    toast.success("محصول حذف شد");
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
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-10 bg-[#e6f9ef]">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl">مورد علاقه ها</h2>
          <div className="flex">
            <Link href={`/`} className="text-2xl">
              صفحه اصلی &nbsp; :
            </Link>
            <h2 className="text-2xl text-[#299e60]">&nbsp;مورد علاقه ها</h2>
          </div>
        </div>
      </div>
      <div className="px-[8%] lg:px-[12%] py-10">
        {wishlistItem.length === 0 ? (
          <p className="text-lg bg-red-200 px-5 py-2">
            لیست علاقه مندی های شما خالی است!!
          </p>
        ) : (
          <div className="overflow-x-auto">
            <div className="overflow-x-auto">
              {/* desktop list */}
              <table className="min-w-full border border-gray-300 hidden md:table">
                <thead className="bg-[#e6f9ef]">
                  <tr>
                    <th className="py-3 px-4 border-l border-gray-300 font-normal text-right">
                      محصول
                    </th>
                    <th className="py-3 px-4 border-l border-gray-300 font-normal text-right">
                      قیمت
                    </th>
                    <th className="py-3 px-4 border-l border-gray-300 font-normal text-right">
                      وضعیت موجودی
                    </th>
                    <th className="py-3 px-4 border-l border-gray-300 font-normal text-right cursor-pointer">
                      افزودن به سبد
                    </th>
                    <th className="py-3 px-4 border-l border-gray-300 font-normal text-right cursor-pointer">
                      حذف
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {wishlistItem.map((item) => (
                    <tr key={item.id} className="border-b border-gray-300">
                      <td className="py-3 px-4 flex items-center gap-3 border-l border-gray-300 ">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="object-contain rounded"
                        />
                        <div className="flex flex-col">
                          <p className="font-medium text-lg">{item.title}</p>
                          <h6 className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                            <GiShop size={25} color="#299e60" />
                            خرید سوپر مارکتی
                          </h6>
                          <span className="flex items-center text-yellow-300 text-md">
                            <FaStar />
                            <span className="text-gray-500">
                              {item.review}
                              نفر پسندیده اند
                            </span>
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 border-l border-gray-300">
                        {parseFloat(item.price.replace(/[^0-9.-]+/g , "")).toLocaleString("fa-IR")}ت
                      </td>
                      <td className="py-3 px-4 border-l border-gray-300">
                        موجود
                      </td>
                      <td className="px-3 border-l border-gray-300">
                        <button
                        onClick={()=>handleAddToCart(item)}
                        className="w-full flex cursor-pointer items-center gap-1 px-4 py-2 my-2 text-lg font-semibold text-[#299e60] bg-[#e6f9ef] rounded-md hover:bg-[#299e60] hover:text-white transition"
                        >
                          افزودن
                          <CgShoppingCart size={25} />
                        </button>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button 
                        className="text-red-500 flex items-center hover:text-red-700 cursor-pointer"
                        onClick={()=>handleRemove(item.id)}
                        >
                          <CgClose size={25} className="font-semibold" />
                          حذف
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* mobile list */}
              <div className="md:hidden space-y-4">
                   {wishlistItem.map((item) => (
                    <tr key={item.id} className="border-b border-gray-300 flex flex-col">
                      <td className="py-3 px-4 flex items-center gap-3 border-l border-gray-300 ">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="object-contain rounded"
                        />
                        <div className="flex flex-col">
                          <p className="font-medium text-lg">{item.title}</p>
                          <h6 className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                            <GiShop size={25} color="#299e60" />
                            خرید سوپر مارکتی
                          </h6>
                          <span className="flex items-center text-yellow-300 text-md">
                            <FaStar />
                            <span className="text-gray-500">
                              {item.review}
                              نفر پسندیده اند
                            </span>
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 border-l border-gray-300">
                        {parseFloat(item.price.replace(/[^0-9.-]+/g , "")).toLocaleString("fa-IR")}ت
                      </td>
                      <td className="py-3 px-4 border-l border-gray-300">
                        موجود
                      </td>
                      <td className="px-3 flex border-l border-gray-300">
                        <button
                        onClick={()=>handleAddToCart(item)}
                        className="w-1/2  flex items-center mx-4 justify-center cursor-pointer text-center gap-1 px-4 py-2 my-2 text-lg font-semibold text-[#299e60] bg-[#e6f9ef] rounded-md hover:bg-[#299e60] border border-[#299e60] hover:text-white transition"
                        >
                          افزودن
                          <CgShoppingCart size={25} />
                        </button>
                     
                        <button 
                        className="text-red-500 w-1/2 hover:border  flex justify-center mx-4 px-4 py-2 my-2 hover:rounded-md items-center hover:text-red-700 cursor-pointer"
                        onClick={()=>handleRemove(item.id)}
                        >
                          <CgClose size={25} className="font-semibold" />
                          حذف
                        </button>
                      </td>
                    </tr>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
