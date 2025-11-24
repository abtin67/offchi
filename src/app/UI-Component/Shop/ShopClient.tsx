"use client";

import bestDeals from "@/app/jsonData/BestDeals.json";
import arrivals from "@/app/jsonData/Arrivals .json";
import HotDeals from "@/app/jsonData/HotDeals.json";
import BestSales from "@/app/jsonData/BestSales.json";
import ShortProducts from "@/app/jsonData/ShortProducts.json";
import OrganicFood from "@/app/jsonData/OrganicFood.json";
import Recommwnd from "@/app/jsonData/Recommwnd.json";
import { useSearchParams } from "next/navigation";
import ProductDetails from "./ProductDetails/ProductDetails";
import Products from "./Products/Products";

export default function ShopClient() {
  const allProduct = [
    ...arrivals,
    ...bestDeals,
    ...BestSales,
    ...HotDeals,
    ...OrganicFood,
    ...Recommwnd,
    ...(ShortProducts?.Featured || []),
    ...(ShortProducts?.OnSale || []),
    ...(ShortProducts?.TopRated || []),
    ...(ShortProducts?.TopSelling1 || []),
  ];

  const searchParams = useSearchParams();
  const productId = searchParams.get("id");

  return (
    <div>
      {productId ? (
        <ProductDetails id={productId} products={allProduct} />
      ) : (
        <Products />
      )}
    </div>
  );
}