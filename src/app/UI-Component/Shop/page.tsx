import { Suspense } from "react";
import ShopClient from "./ShopClient";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center py-32 text-2xl">در حال بارگذاری فروشگاه...</div>}>
      <ShopClient />
    </Suspense>
  );
}