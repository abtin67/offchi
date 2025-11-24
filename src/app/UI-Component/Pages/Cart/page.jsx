"use client";


import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CgClose } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import { GiShop } from "react-icons/gi";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0);

  const estimatedTaxes = 100000;

  useEffect(() => {
    const loadCart = () => {
      try {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCartItems(cart);

        const total = cart.reduce((acc, item) => {
          const quantity = item.qty ?? 1;

          const priceNum =
            parseFloat(item.price.replace(/[^0-9.-]+/g, "")) || 0;
          return acc + priceNum * quantity;
        }, 0);
        setSubTotal(total);
      } catch (error) {
        console.error("بارگذاری سبد خرید با شکست مواجه شد", error);
        setCartItems([]);
        setSubTotal(0);
      }
    };
    loadCart();
    window.addEventListener("storageUpdate", loadCart);
    return () => window.removeEventListener("storageUpdate", loadCart);
  }, []);

  const handleRemove = (productId) => {
    const updateCart = cartItems.filter((item) => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(updateCart));
    window.dispatchEvent(new Event("storageUpdate"));
    toast.success("محصول حذف شد");
  };

  const handleQtyChange = (productId, qty) => {
    const updateCart = cartItems.map((item) =>
      item.id === productId ? { ...item, qty } : item
    );
    localStorage.setItem("cart", JSON.stringify(updateCart));
    window.dispatchEvent(new Event("storageUpdate"));
  };

  return (
    <>
      <div className="px-[8%] lg:px-[12%] bg-[#e6f9ef] py-5">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl">سبد خرید</h2>
          <div className="flex">
            <Link href={`/`} className="text-2xl">
              صفحه اصلی &nbsp;:
            </Link>
            <h2 className="text-2xl text-[#299e60]">&nbsp;سبد خرید</h2>
          </div>
        </div>
      </div>
      <div className="px-[8%] lg:px-[12%] py10">
        {cartItems.length === 0 ? (
          <p className="text-lg bg-red-200 px-5 py-2 rounded">
            سبد خرید شما خالی است !!
          </p>
        ) : (
          <div className="flex flex-col lg:flex-row py-7 gap-10">
            <div className="flex-1 overflow-x-auto">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 hidden md:table">
                  <thead className="bg-[#e6f9ef]">
                    <tr>
                      <th className="py-3 px-4 font-normal text-right">
                        محصول
                      </th>
                      <th className="py-3 px-4  font-normal text-right">
                        قیمت
                      </th>
                      <th className="py-3 px-4 font-normal text-right">
                        تعداد
                      </th>
                      <th className="py-3 px-4  font-normal text-right cursor-pointer">
                        جمع
                      </th>
                      <th className="py-3 px-4  font-normal text-right cursor-pointer">
                        حذف
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item) => {
                      const quantity = item.qty ?? 1;
                      const priceNum =
                        parseFloat(item.price.replace(/[^0-9.-]+/g)) || 0;
                      const itemSubTotal = priceNum * quantity;
                      return (
                        <tr key={item.id} className="border-b border-gray-300">
                          <td className="py-2 px-3 flex items-center gap-2">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="object-contain rounded w-[100px]"
                            />
                            <div className="flex flex-col">
                              <p className="font-medium text-md">
                                {item.title}
                              </p>
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
                          <td className="py-3 px-4 gap-2 border border-gray-300">
                            {priceNum.toLocaleString("fa-IR")}ت
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center border w-19 rounded">
                              <button
                                className="px-1 text-lg cursor-pointer"
                                onClick={() =>
                                  handleQtyChange(
                                    item.id,
                                    Math.max(1, quantity - 1)
                                  )
                                }
                              >
                                -
                              </button>
                              <span className="px-4">{quantity}</span>
                              <button
                                className="px-1 text-lg cursor-pointer"
                                onClick={() =>
                                  handleQtyChange(
                                    item.id,
                                    Math.max(1, quantity + 1)
                                  )
                                }
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="py-3 px-3">
                            {itemSubTotal.toLocaleString("fa-IR")}ت
                          </td>
                          <td className="py-3 px-4">
                            <button
                              onClick={() => handleRemove(item.id)}
                              className="text-red-500 flex items-center px-3 rounded-md  py-1 border border-red-300 hover:border-red-700 hover:text-red-700 cursor-pointer"
                            >
                              حذف
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                {/* mobile list */}
                <div className="md:hidden space-y-4">
                  {cartItems.map((item) => {
                    const quantity = item.qty ?? 1;
                    const priceNum =
                      parseFloat(item.price.replace(/[^0-9.-]+/g)) || 0;
                    const itemSubTotal = priceNum * quantity;
                    return (
                      <table key={item.id}>
                      <tr key={item.id} className="border-b border-gray-300 flex flex-col">
                        <td className="py-3 px-4 flex items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="object-contain rounded"
                            width={120}
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

                          {priceNum.toLocaleString("fa-IR")}ت
                        </td>
                         <td className="py-3 px-4">
                          جمع : 
                             {itemSubTotal.toLocaleString("fa-IR")} ت
                        </td>
                        <td className="py-3 px-4 flex justify-around">
                          <div className="flex items-center border w-24 rounded">
                            <button
                              className="px-2 text-lg cursor-pointer"
                              onClick={() =>
                                handleQtyChange(
                                  item.id,
                                  Math.max(1, quantity - 1)
                                )
                              }
                            >
                              -
                            </button>
                            <span className="px-4">{quantity}</span>
                            <button
                              className="px-2 text-lg cursor-pointer"
                              onClick={() =>
                                handleQtyChange(
                                  item.id,
                                  Math.max(1, quantity + 1)
                                )
                              }
                            >
                              +
                            </button>
                          </div>
                       
                       
                          <button
                            onClick={() => handleRemove(item.id)}
                            className="text-red-500 flex items-center hover:text-red-700 cursor-pointer"
                          >
                            <CgClose size={25} />
                            حذف
                          </button>
                        </td>
                      </tr>
                      </table>
                    );
                  })}
                </div>
              </div>
              
            </div>
            <div className="w-full lg:w-1/3 sticky h-[100%] top-22 right-0">
                  <div className="bg-[#e6f9ef] p-5 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">پرداخت نهایی</h2>
                    <div className="flex justify-between mb-2">
                      <span>مبلغ</span>
                      <span>{subTotal.toLocaleString("fa-IR")} تومان</span>
                    </div>
                     <div className="flex justify-between mb-2">
                      <span>زمان تحویل</span>
                      <span>انتخابی</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>مالیات تخمینی</span>
                      <span>{estimatedTaxes.toLocaleString("fa-IR")} تومان</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>قابل پرداخت</span>
                      <span>{(estimatedTaxes + subTotal).toLocaleString("fa-IR")} تومان</span>
                    </div>
                    <button className="w-full py-3 mt-3 cursor-pointer bg-[#299e60] text-white font-semibold
                    rounded hover:bg-black transition">
                      <Link href={`/UI-Component/Pages/Checkout`}>
                      تکمیل خرید
                      </Link>
                    </button>
                  </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
