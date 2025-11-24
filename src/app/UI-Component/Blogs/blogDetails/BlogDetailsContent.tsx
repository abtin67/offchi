"use client";

import blogData from "@/app/jsonData/Blogs.json";
import Link from "next/link";

import { useSearchParams } from "next/navigation";
import { SlCalender } from "react-icons/sl";


interface BlogDetailsProps {
  blog: {
    id: number;
    image: string;
    title: string;
    tag: string;
    pere: string;
    pere2: string;
    pere3: string;
    date: string;
    commnt: string;
  };
  goBack: () => void;
}




export default function BlogDetailsContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  console.log(id);
  const blog = blogData.find((b) => b.id.toString() === id);

  if (!blog) return <div>وبلاگ پیدا نشد!!</div>;

  return (
    <>
      <div className="px-[8%] lg:px-[12%] bg-[#e6f9ef] py-5">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl">
            جزییات وبلاگ:
            <span className="text-xl font-normal hidden lg:block ps-2">
              {blog.title}
            </span>
          </h2>
          <div className="flex">
            <Link href={`/`} className="text-2xl">
              صفحه اصلی &nbsp;:
            </Link>
            <h2 className="text-2xl text-[#299e60]">&nbsp;جزییات وبلاگ</h2>
          </div>
        </div>
      </div>
      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
          {/* blog details */}
          <div className="w-full lg:w-1/1 flex lg:sticky top-22 left-0 h-[100%]">
            <div className="blog-details">
              <img
                src={blog.image}
                alt={blog.title}
                className="rounded-md w-full mb-5"
              />
              <span className="bg-[#e6f9ef] p-3 rounded-md text-2xl">
                {blog.tag}
              </span>
              <h1 className="text-4xl my-4">{blog.title}</h1>
              <p className="text-gray-500 flex items-center gap-2 mb-5">
                <SlCalender size={25} color="#299e60" />
                {blog.date}
              </p>
              <p className="text-lg  mb-3">{blog.pere}</p>
              <p className="text-lg   mb-3">{blog.pere2}</p>
              <p className="text-lg  mb-3">{blog.pere3}</p>
            </div>
          </div>
          {/* sidebar */}
          <div className="w-full lg:w-1/2 ">
            <div className="border border-gray-300 rounded">
              <div className="border-b border-gray-300 p-5">
                <h2 className="text-2xl">آخرین مطالب</h2>
              </div>
              <div className="p-5">
                {blogData.map((blog, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center mb-5 gap-5 cursor-pointer"
                  >
                    <div className="w-1/2">
                      <img src={blog.image} alt={blog.title} />
                    </div>
                    <div className="w-1/2">
                      <div className="blog-content">
                        <h2 className="blog-content hover:text-[#299e60] hover:underline">
                          {blog.title}
                        </h2>
                        <div className="flex gap-5 mt-2">
                          <p className="text-gray-500">
                            <SlCalender
                              size={25}
                              className="pr-1 text-[#299e60]"
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}