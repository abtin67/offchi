"use client";

import Image from "next/image";
import Deals from "../../index/deals/deals";
import toast from "react-hot-toast";
import { CgDanger, CgShoppingCart } from "react-icons/cg";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useEffect, useMemo, useState } from "react";
import { BsBalloonHeart } from "react-icons/bs";
import { GiShop } from "react-icons/gi";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsArrowReturnRight } from "react-icons/bs";

interface ProductType {
  id: string;
  image: string;
  title: string;
  price: string;       // عدد به صورت رشته در دیتا
  lessprice?: string;  // قیمت قبل از تخفیف (اختیاری)
  review: string;      // مثلا "124 نظر"
  sold?: string;
  sale?: string;
}

interface Props {
  id?: string;              // اگر ارسال شود صفحه جزئیات را نشان می‌دهد
  products: ProductType[];  // لیست محصولات
}

type StoredItem = ProductType & { qty?: number };

// ابزارهای کمکی برای localStorage با تایپ امن
const getArray = <T,>(key: string): T[] => {
  try {
    const raw = localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? (parsed as T[]) : [];
  } catch {
    return [];
  }
};

const setArray = (key: string, value: unknown[]) => {
  localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new Event("storageUpdate"));
};

export default function ProductDetails({ id, products }: Props) {
  // حالت لیست محصولات (وقتی id نداریم)
  if (!id) {
    return (
      <div className="px-[8%] lg:px-[12%] py-10">
        <h1 className="text-2xl mb-6">محصولات</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-md">
              <div className="w-full h-48 relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover rounded"
                />
              </div>
              <h2 className="font-bold mt-2">{product.title}</h2>
              <div className="flex items-center gap-3">
                <p className="text-green-600">
                  {Number(product.price).toLocaleString("fa-IR")} تومان
                </p>
                {product.lessprice && (
                  <del className="text-gray-500">
                    {Number(product.lessprice).toLocaleString("fa-IR")}
                  </del>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Deals />
        </div>
      </div>
    );
  }

  // حالت جزئیات محصول (وقتی id داریم)
  const product = useMemo(
    () => products.find((item) => String(item.id) === String(id)),
    [products, id]
  );

  const [quantity, setQuantity] = useState<number>(1);

  // همگام‌سازی تعداد از cart اگر قبلاً وجود دارد
  useEffect(() => {
    const cart = getArray<StoredItem>("cart");
    const inCart = cart.find((i) => i.id === id);
    if (inCart?.qty && inCart.qty > 0) {
      setQuantity(inCart.qty);
    }
  }, [id]);

  if (!product) {
    return (
      <p className="px-[8%] lg:px-[12%] py-10">محصولی یافت نشد!!!</p>
    );
  }

  const addToList = (key: "wishlist" | "cart", p: ProductType) => {
    const list = getArray<StoredItem>(key);
    const exists = list.some((item) => item.id === p.id);

    if (exists) {
      toast(`${p.title} قبلا اضافه شده است`, {
        icon: <CgDanger size={39} />,
        style: {
          border: "1px solid #facc15",
          padding: "16px",
          color: "#333",
          background: "#fff9c4",
        },
      });
      return;
    }

    list.push({ ...p, qty: 1 });
    setArray(key, list);

    toast.success(
      key === "cart"
        ? `${p.title} به سبد خرید اضافه شد!`
        : `${p.title} به علاقه‌مندی‌ها اضافه شد!`
    );
  };

  const handleAddToWishlist = () => addToList("wishlist", product);
  const handleAddToCart = () => addToList("cart", product);

  const handleQtyChange = (productId: string, qty: number) => {
    const safeQty = Math.max(1, qty);
    setQuantity(safeQty);

    const cart = getArray<StoredItem>("cart");
    const updated = cart.map((item) =>
      item.id === productId ? { ...item, qty: safeQty } : item
    );
    setArray("cart", updated);
  };

  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="flex flex-col lg:flex-row justify-between gap-5">
          {/* جزئیات محصول */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="border border-gray-300 rounded-2xl w-full">
              <div className="relative w-full h-[420px]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-10"
                />
              </div>
            </div>

            <div className="w-full flex flex-col">
              <h2 className="text-3xl mr-2">{product.title}</h2>

              <span className="flex mr-2 items-center border-b border-gray-300 mb-3 text-yellow-500 text-md mt-4">
                <FaStar className="mb-2 text-yellow-300" />
                <FaStar className="mb-2 text-yellow-300" />
                <FaStar className="mb-2 text-yellow-300" />
                <FaStar className="mb-2 text-yellow-300" />
                <FaStarHalfAlt className="mb-2 text-yellow-300" />
                &nbsp;
                <span className="text-black mr-2 font-medium">
                  ۴.۵ از ۵ ستاره {product.review}
                </span>
              </span>

              <p className="my-3 mr-2">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است...
              </p>

              <div className="flex items-center gap-2 border-b border-gray-300 pb-3">
                <h3 className="text-2xl mr-2">
                  {Number(product.price).toLocaleString("fa-IR")} تومان
                </h3>
                {product.lessprice && (
                  <del className="text-gray-500 mr-3">
                    {Number(product.lessprice).toLocaleString("fa-IR")}
                  </del>
                )}
              </div>

              <span className="my-3 bg-[#97ffc971] rounded-md px-3 py-2 inline-block">
                پیشنهاد ویژه: تنها <strong>۵ روز</strong> تا پایان این پیشنهاد باقی مانده است
              </span>

              <div>
                <h3 className="mb-3">تعداد :</h3>
                <div className="flex items-center border w-28 rounded overflow-hidden">
                  <button
                    className="px-3 text-lg cursor-pointer"
                    onClick={() =>
                      handleQtyChange(product.id, Math.max(1, quantity - 1))
                    }
                  >
                    -
                  </button>
                  <span className="px-4">{quantity}</span>
                  <button
                    className="px-3 text-lg cursor-pointer"
                    onClick={() =>
                      handleQtyChange(product.id, Math.max(1, quantity + 1))
                    }
                  >
                    +
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={handleAddToCart}
                    className="w-1/2 mx-3 border flex cursor-pointer items-center gap-1 px-4 py-2 my-2 text-lg font-semibold text-[#299e60] bg-[#e6f9ef] rounded-md hover:bg-[#299e60] hover:text-white transition"
                  >
                    افزودن
                    <CgShoppingCart size={25} />
                  </button>

                  <button
                    onClick={handleAddToWishlist}
                    className="w-1/2 mx-3 border flex cursor-pointer items-center gap-1 px-4 py-2 my-2 text-lg font-semibold text-[#299e60] bg-[#e6f9ef] rounded-md hover:bg-[#299e60] hover:text-white transition"
                  >
                    افزودن
                    <BsBalloonHeart size={25} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* سایدبار */}
          <div className="w-full lg:w-1/2">
            <div className="border border-gray-300 rounded-md">
              <div className="p-3">
                <div className="flex justify-between items-center gap-2 p-3 rounded-full px-2 bg-[#299e60]">
                  <h6 className="text-lg text-white flex items-center gap-2">
                    <GiShop size={25} color="#fff" />
                    خرید سوپرمارکتی
                  </h6>
                  <button className="bg-white text-black px-5 py-2 rounded-full hover:bg-black cursor-pointer hover:text-white">
                    بیشتر
                  </button>
                </div>
              </div>

              <div className="bg-[#97ffc871]">
                <div className="flex items-center px-7 py-4 border-b border-gray-300 gap-3">
                  <CiDeliveryTruck
                    size={25}
                    className="mr-2 rounded-full text-[#299e60] h-8 w-8 bg-white"
                  />
                  <div className="flex flex-col">
                    <h3>تحویل فوری</h3>
                    <div className="text-gray-600">خرید فوق‌العاده سریع، تضمین‌شده</div>
                  </div>
                </div>
              </div>

              <div className="bg-[#97ffc871]">
                <div className="flex items-center px-7 py-4 border-b border-gray-300 gap-3">
                  <BsArrowReturnRight
                    size={25}
                    className="mr-2 rounded-full text-[#299e60] h-8 w-8 bg-white"
                  />
                  <div className="flex flex-col">
                    <h3>بازگشت رایگان تا ۳۰ روز</h3>
                    <div className="text-gray-600">خرید بدون ریسک با بازگشت آسان</div>
                  </div>
                </div>
              </div>
            </div>

            {/* آخرین معاملات/پیشنهادها */}
            <div className="mt-8">
              <Deals />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

