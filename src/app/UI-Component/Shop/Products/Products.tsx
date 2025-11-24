"use client";

import products from "@/app/jsonData/Recommwnd.json";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsBalloonHeart } from "react-icons/bs";
import { CgDanger, CgShoppingCart } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import { GiShop } from "react-icons/gi";

export default function Products() {
  const [price, setPrice] = useState(100);
  const [discount50, setDiscount50] = useState(false);
  const [discount35, setDiscount35] = useState(false);
  const [isNew, setIsNew] = useState(false);


   const [filteredProducts, setFilteredProducts] = useState(products);

    const randomProduct = products[Math.floor(Math.random() * products.length)];
   
 

  useEffect(() => {
    let result = products;

    result = result.filter((p) => {
      const productPrice = parseFloat(p.price.replace(/[^0-9.-]+/g, ""));
      return productPrice <= price;
    });

    if (discount50) {
      result = result.filter((p) => p.sale?.includes("50%"));
    }
    if (discount35) {
      result = result.filter((p) => p.sale?.includes("35%"));
    }
    if (isNew) {
      result = result.filter((p) => p.sale === "New");
    }
    setFilteredProducts(result);
  }, [price, discount35, discount50, isNew]);


  interface ProductType {
    id:string;
    image:string;
    title:string;
    price:string;
    lessprice?:string;
    review:string;
    sold?:string;
    sale?:string
}
 
  
interface itemType {
  id:string
}

  const handleAddToWishlist = (product:ProductType) => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const existingProduct = wishlist.find((item:itemType) => item.id === product.id);
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

  const handleAddToCart = (product:ProductType) => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProduct = cart.find((item:itemType) => item.id === product.id);
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
    <div className="px-[8%] lg:px-[12%]  py-10">
      <div className="my-10">
        <div className="flex flex-col  md:flex-row justify-between gap-5">
          {/* sidebar */}
          <div className="w-full md:w-1/2 lg:w-1/3 relative lg:sticky top-22 left-0 h-full">
            <div className="border border-gray-300 shadow rounded p-3">
              <div className="border-b w-full border-gray-300 pb-3 flex items-center justify-between">
                <h2 className="text-xl">دسته بندی محصولات</h2>
                <button
                  onClick={() => setFilteredProducts(products)}
                  className="border py-1 px-2 border-gray-300 rounded cursor-pointer hover:border-gray-500 transition-all duration-300"
                >
                  راه اندازی مجدد
                </button>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium mb-2">محدوده قیمت</h3>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700 text-sm font-medium">0</span>
                  <input
                    type="range"
                    min={0}
                    max={1000000}
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full accent-[#299e60]"
                  />
                  <span className="text-gray-700 text-sm font-medium">
                    {price}تومان
                  </span>
                </div>
              </div>
              {/* discount */}
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">تخفیف ها</h3>
                <form className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={discount50}
                      onChange={(e) => setDiscount50(e.target.checked)}
                      className="form-checkbox accent-[#299e60]"
                    />
                    <span>تخفیف 50%</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={discount35}
                      onChange={(e) => setDiscount35(e.target.checked)}
                      className="form-checkbox accent-[#299e60]"
                    />
                    <span>تخفیف 35%</span>
                  </label>
                </form>
              </div>
              {/* other */}
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">موارد دیگر</h3>
                <form className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isNew}
                      onChange={(e) => setIsNew(e.target.checked)}
                      className="form-checkbox accent-[#299e60]"
                    />
                    <span>محصولات جدید</span>
                  </label>
                </form>
              </div>
            </div>
            {/* random */}
            <div className="mt-3">
              <div
                key={randomProduct.id}
                className="product-wrap border border-gray-300 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:border-[#299e60]"
              >
                <div className="relative flex justify-center items-center h-50 w-full">
                  <Image
                    src={randomProduct.image}
                    alt={randomProduct.title}
                    width={180}
                    height={180}
                    className="object-contain mt-10"
                  />
                  <div
                    className="absolute top-0 left-0 w-[50px] h-[50px] rounded-full bg-[#e6f9ef]
                                                text-[#299e60] flex items-center justify-center hover:bg-[#299e60] transition-all duration-300 hover:text-white"
                    onClick={() => handleAddToWishlist(randomProduct)}
                  >
                    <BsBalloonHeart size={35} />
                  </div>
                  <span
                    className={`absolute off-product top-0 right-0 px-4 py-2 text-sm font-bold text-white rounded ${
                      randomProduct.sale === "New"
                        ? "bg-yellow-500"
                        : randomProduct.sale?.includes("%")
                        ? "bg-red-500"
                        : "opacity-0"
                    }`}
                  >
                    {randomProduct.sale}
                  </span>
                </div>
                <Link
                  href={{
                    pathname: "/UI-Component/Shop/ProductDetails",
                    query: { id: randomProduct.id },
                  }}
                >
                  <div className="space-y-1 mt-5 product-info">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 text-sm line-through">
                        {randomProduct.lessprice}
                      </span>
                      <span className="text-xl font-semibold">
                        {randomProduct.price} ت
                      </span>
                      <span className="text-gray-500 text-sm">/qty</span>
                    </div>
                    <span className="flex items-center text-yellow-300 text-md">
                      <FaStar />
                      <span className="text-gray-500">
                        {randomProduct.review}
                      </span>
                    </span>
                    <h2 className="text-xl font-normal my-2 hover:text-[#299e60] transition-all duration-300">
                      {randomProduct.title}
                    </h2>
                    <h6 className="text-lg text-gray-500 flex items-center gap-2">
                      <GiShop size={25} color="#299e60" />
                      خرید سوپرمارکتی
                    </h6>
                    <h3 className="mt-2 text-md text-gray-600">
                      تعداد فروش : {randomProduct.sold}
                    </h3>
                  </div>
                </Link>

                <button
                  onClick={() => handleAddToCart(randomProduct)}
                  className="w-full px-4 py-2 mt-4 border  flex items-center justify-around gap-2 font-semibold  text-[#299e60] bg-[#e6f9ef]
                                                              rounded-full text-sm hover:bg-[#299e60] hover:text-white cursor-pointer transition-all duration-300"
                >
                  <p>افزودن سبد خرید</p>
                  <CgShoppingCart size={28} />
                </button>
              </div>
            </div>
          </div>
          {/* product grid */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3 lg:mt-0 mt-20">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
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
                      onClick={() => handleAddToWishlist(product)}
                    >
                      <BsBalloonHeart size={35} />
                    </div>
                    <span
                      className={`absolute off-product top-0 right-0 px-4 py-2 text-sm font-bold text-white rounded ${
                        product.sale === "New"
                          ? "bg-yellow-500"
                          : product.sale?.includes("%")
                          ? "bg-red-500"
                          : "opacity-0"
                      }`}
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
              ))
            ) : (
              <div className="font-bold border-b h-7 text-gray-500">
                محصولی یافت نشد!!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
