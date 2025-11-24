import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Navbar from '@/app/components/navbar/Navbar'
import { Toaster } from "react-hot-toast";
import Footer from "./components/footer/Footer";


const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display:"swap"
});




export const metadata: Metadata = {
  title: "offchi",
  description: "با تخفیف چی هم خرید کن هم سود کن",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${vazirmatn.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-left" reverseOrder={false} />
      </body>
    </html>
  );
}
