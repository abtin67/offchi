import { Suspense } from "react";
import Blogs from "./blog/page";

export default function page() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Blogs />
      </Suspense>
    </div>
  );
}
