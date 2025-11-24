"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CgShoppingCart } from "react-icons/cg";

export default function Checkout() {
  const [deriveryOption, setDeriveryOption] = useState("ship");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const saveCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(saveCart);
  }, []);

  const handlePlaceOrder = () => {
    toast.success("سفارش با موفقیت ثبت شد.");
  };

  //calculate totals
  const totalPrice = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace("$", "")) || 0;
    const quantity = item.qty ?? 1;
    return acc + price * quantity;
  }, 0);

  const estimatedTax =(totalPrice * 0.1);
  const formatestimatedTax = estimatedTax.toLocaleString("fa-IR")
  


  return (
    <>
      <div className="px-[8%] lg:px-[12%] bg-[#e6f9ef] py-5">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl">پرداخت</h2>
          <div className="flex">
            <Link href={`/`} className="text-2xl">
              صفحه اصلی &nbsp;:
            </Link>
            <h2 className="text-2xl text-[#299e60]">&nbsp;تسویه حساب </h2>
          </div>
        </div>
      </div>
      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="grid gap-4 lg:grid-cols-12">
          {/* //rigth:  checkout form */}
          <div className="lg:col-span-7">
            <h5 className="mb-2 text-2xl">ارتباط</h5>
            <input
              type="email"
              className="border border-gray-300 rounded w-full p-2 mb-3"
              placeholder="ایمیل یا شماره موبایل..."
            />
            <div className="mb-4">
              <input type="checkbox" id="newsCheck" className="me-2" />
              <label htmlFor="newsCheck">
                می‌خواهم از طریق ایمیل از اخبار و پیشنهادها مطلع شوم
              </label>
              <h5 className="mb-2 mt-3 text-2xl">تحویل از:</h5>
              <div className="mb-3  flex gap-3">
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="deliveryoption"
                    checked={deriveryOption === "ship"}
                    onChange={() => setDeriveryOption("ship")}
                  />
                  ارسال پستی
                </label>
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="deliveryoption"
                    checked={deriveryOption === "pickup"}
                    onChange={() => setDeriveryOption("pickup")}
                  />
                  حضوری در فروشگاه
                </label>
              </div>
              {deriveryOption === "ship" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <select className="form-select border border-gray-300 appearance-none  rounded w-full p-2 md:col-span-2">
                    <option>تهران</option>
                    <option>رشت</option>
                    <option>اصفهان</option>
                    <option>سایر شهرها</option>
                  </select>
                  <input
                    type="text"
                    className="border border-gray-300 rounded w-full p-2"
                    placeholder="نام..."
                  />
                  <input
                    type="text"
                    className="border border-gray-300 rounded w-full p-2"
                    placeholder="نام خانوادگی.."
                  />
                </div>
              )}
              {deriveryOption === "pickup" && (
                <div className="my-4 p-3 border bg-red-50 text-red-700  rounded">
                  <strong>
                    متأسفیم، این کالا در حال حاضر در هیچ فروشگاهی موجود نیست
                  </strong>
                  <div>
                    روش جایگزین:{" "}
                    <Link href={`#`} className="underline">
                      ارسال به آدرس...
                    </Link>
                  </div>
                </div>
              )}
              <input
                type="text"
                className="border border-gray-300 rounded w-full p-2"
                placeholder="آدرس..."
              />
              <input
                type="text"
                className="border border-gray-300 rounded w-full p-2 mt-2"
                placeholder="طبقه و واحد و...(اختیاری)"
              />
              <div className="grid grid-cols-1 my-3 md:grid-cols-2 gap-3 mb-3">
                <input
                  type="text"
                  className="border border-gray-300 rounded w-full p-2"
                  placeholder="شهر..."
                />
                <input
                  type="Number"
                  className="border border-gray-300 rounded w-full p-2 mt-2"
                  placeholder="کد پستی"
                />
              </div>
              <div className="mb-4">
                <input type="checkbox" id="saveInfo" className="me-2"/>
                <label htmlFor="saveInfo">ذخیره اطلاعات برای خریدهای بعدی</label>
              </div>
              <h5 className="mb-2 text-2xl">روش ارسال</h5>
              <div className="p-3 flex justify-between items-center border border-gray-300 rounded bg-blue-50">
                <span>عادی</span>
                <div className="text-gray-600">رایگان</div>
              </div>
              <h4 className="mt-5 mb-2 text-2xl">پرداخت</h4>
              <p className="text-gray-500 mb-3">همه پرداخت‌ها با امنیت کامل انجام می‌شوند</p>
              <div className="border border-gray-300 rounded p-3 mb-3">
                <input type="text" className="border border-gray-300 rounded w-full p-2 mb-2" placeholder="شماره کارت" required />
                <div className="grid grid-cols-2 gap-2">
                    <input type="text" className="border border-gray-300 rounded w-full p-2 mb-2" placeholder="تاریخ انقضا(MM / YY)" required />
                    <input type="text" className="border border-gray-300 rounded w-full p-2 mb-2" placeholder="CVV2" required />
                </div>
                 <input type="text" className="border border-gray-300 rounded w-full p-2 mt-2" placeholder="نام کارت" required />
              </div>
              <button
              className="w-full py-2 bg-[#299e60] cursor-pointer text-white rounded hover:bg-black transition-all"
              onClick={handlePlaceOrder}
              >
                پرداخت کنید
              </button>
            </div>
          </div>
          {/* left order summary */}
          <div className="lg:col-span-5">
            <div className="border border-gray-300 p-4 rounded shadow">
              <h5 className="font-bold mb-3 flex items-center gap-2 border-b-3 py-3 border-gray-400">
                <CgShoppingCart size={25} color="#299e60" /> جزییات سفارشات
              </h5>
              {cartItems.length === 0 ? (
                <p className="text-gray-500">سبد خرید شما خالی است!!</p>
              ):(
                cartItems.map((item)=>{
                  const quantity = item.qty ?? 1;
                  const priceNum = parseFloat(item.price.replace("$","")) || 0 ;
                  return(
                    <div key={item.id} className="flex items-center mb-3 border-b border-gray-300 pb-2">
                      <img src={item.image} alt={item.title} className="rounded w-20 h-20 object-cover ml-2" />
                      <div className="flex-row">
                        <h6 className="mb-1">{item.title}</h6>
                        <small>{(priceNum * quantity).toLocaleString("fa-IR")} تومان</small>
                      </div>
                    </div>
                  )
                })
              )}
              <div className="flex justify-between text-sm pt-2">
                <span>جمع</span>
                <span>{totalPrice.toLocaleString("fa-IR")} تومان</span>
              </div>
               <div className="flex justify-between text-sm pt-2">
                <span>هزینه ارسال</span>
                <span>آدرس را وارد کنید</span>
              </div>
               <div className="flex justify-between text-sm pt-2">
                <span>مالیات تقریبی</span>
                <span>{formatestimatedTax} تومان</span>
              </div>
              <div className="flex justify-between text-sm pt-2">
                <span>قابل پرداخت</span>
                <span>{ (totalPrice + estimatedTax).toLocaleString("fa-IR")} تومان</span>
              </div>
              <button
              className="w-full mt-3 mb-3 py-2 bg-green-600 cursor-pointer text-white rounded hover:bg-green-800 transition"
              onClick={handlePlaceOrder}
              >
                ثبت سفارش
              </button>
              <Link
              href="/UI-Component/Pages/Cart"
              className="block text-center py-2 border rounded hover:bg-gray-100 transition"
              >
                بازگشت به سبد خرید
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
