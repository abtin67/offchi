import { Suspense } from "react";
import BlogDetailsContent from "./BlogDetailsContent";

export const dynamic = 'force-dynamic';

export default function BlogDetails(){
  return(
    <Suspense fallback={<p>Loading...</p>}>
      <BlogDetailsContent />
    </Suspense>
  )
}