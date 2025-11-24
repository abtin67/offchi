"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { TfiMenu } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import { TbShoppingCartDiscount } from "react-icons/tb";

const navLink = [
  { label: "صفحه اصلی", href: "/" },
  {
    label: "فروشگاه",
    href: "/UI-Components/Shop",
    dropdown: [
      { label: "فروشگاه", href: "/UI-Component/Shop" },
      { label: "Shop Details", href: "" },
    ],
  },
  {
    label: "صفحات",
    href: "#",
    dropdown: [
      { label: "سبد خرید", href: "/UI-Component/Pages/Cart" },
      { label: "مورد علاقه ها", href: "/UI-Component/Pages/Wishlist" },
      { label: "پرداخت", href: "/UI-Component/Pages/Checkout" },
      { label: "حساب من", href: "/UI-Component/Pages/account" },
    ],
  },
  {
    label: "وبلاگ",
    href: "#",
    dropdown: [
      { label: "وبلاگ", href: "/UI-Component/Blogs/blog" },
      { label: "Blog Details" , href:"/UI-Component/Blogs/blogDetails?id=1"},
    ],
  },
  { label: "ارتباط با ما", href: "/UI-Component/Pages/Contact" },
];

export default function BottomNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState({});
  const [isFixed, setIsFixed] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div
      className={`w-full bg-white  shadow-sm transition-all duration-500
        ${isFixed ? "fixed top-0 left-0 z-50 fixed-nav" : ""}`}
    >
      <div className="flex items-center justify-between px-[8%] lg:px-[12%] text-gray-700">
        <Link
          href={`/`}
          className={`text-3xl font-bold text-black hidden
          ${isFixed ? "lg:flex" : "hidden"}`}
        >
          تخفیف<span className="text-[#299e60]">!چی?</span>
        </Link>

        <nav className="hidden lg:flex space-x-6 menu-link relative z-[99999]">
          {navLink.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="relative group z-[99999">
                <Link href={link.href} className="flex items-center gap-1">
                  {link.label}
                  <IoMdArrowDropdown size={25} />
                </Link>
                <div
                  className="absolute rigth-0 top-full 
             shadow-xl p-2 hidden group-hover:block
              bg-white border border-gray-100
               rounded-lg min-w-[150px]"
                >
                  {link.dropdown.map((item) =>
                    item.label === "Shop Details" ? (
                      <Link
                        href={{
                          pathname: "/UI-Component/Shop",
                          query: {},
                        }}
                        className="block px-4 py-2 rounded-md bg-[e6f9ef] transition-all"
                        key={item.label}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 rounded-md bg-[e6f9ef] transition-all"
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            ) : (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            )
          )}
        </nav>
        <button className="nav-button cursor-pointer items-center p-2 py-3 text-white hidden lg:flex font-bold bg-[#299e60]">
          <FaPhone size={20} />
          09038308519
        </button>

        {/* mobile nav */}
        <div className="lg:hidden flex items-center justify-between gap-4 w-full">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl focus:outline-none"
          >
            <div className="flex items-center gap-x-5">
              <TfiMenu size={32} />
            </div>
          </button>
          <div className="flex items-center lg:hidden space-x-6">
            {/* لیست خرید */}
            <Link href={`/UI-Component/Pages/Wishlist`} className="relative">
              <CiHeart size={25} />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-1 bg-[#299e60] text-white w-4 h-4 flex items-center justify-center rounded-full text-[12px]">
                  {wishlistCount}
                </span>
              )}
            </Link>
            {/* سبد خرید */}
            <Link href={`/UI-Component/Pages/Cart`} className="relative">
              <TbShoppingCartDiscount size={25} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-1 bg-[#299e60] text-white w-4 h-4 flex items-center justify-center rounded-full text-[12px]">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
          <button className="nav-button cursor-pointer items-center p-2 py-3 flex text-sm text-white  font-bold bg-[#299e60]">
            <FaPhone size={18} />
            09038308519
          </button>
        </div>
      </div>
      {/* mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t overflow-hidden transition-all duration-500 border-gray-200">
          <nav className="flex flex-col px-[4%] py-4 space-y-1">
            {navLink.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="flex flex-col">
                  <button
                    className="flex justify-between items-center w-full p-2 font-medium"
                    onClick={() => toggleDropdown(link.label)}
                  >
                    {link.label}
                    <IoMdArrowDropdown
                      size={25}
                      className={`transition-transform ${
                        openDropdown[link.label] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500
                    ${openDropdown[link.label] ? "max-h-60 mt-1" : "max-h-0"}`}
                  >
                    <div
                      className="relative right-0 top-full 
             shadow-xl p-2  
              bg-white border border-gray-100
               rounded-lg min-w-[150px]"
                    >
                      {link.dropdown.map((item) =>
                        item.label === "Shop Details" ? (
                          <Link
                            href={{
                              pathname: "/UI-Components/Shop",
                              query: {},
                            }}
                            className="block px-4 py-2 rounded-md bg-[e6f9ef] transition-all"
                            key={item.label}
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block px-4 py-2 rounded-md bg-[e6f9ef] transition-all"
                          >
                            {item.label}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </div>
  );
}
