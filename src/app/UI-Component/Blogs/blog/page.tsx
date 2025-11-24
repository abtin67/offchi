"use client"

import blogData from '@/app/jsonData/Blogs.json';
import { useState } from 'react';
import Link from 'next/link';
import { SlCalender } from "react-icons/sl";
import { FaRegCommentDots } from "react-icons/fa";



const categories =[
   "میوه و سبزیجات",
    "لبنیات و نان",
    "تنقلات و نوشیدنی‌ها",
    "مواد اساسی",
    "غذاهای منجمد و بسته‌بندی‌شده",
    "مراقبت شخصی",
    "لوازم ضروری خانه"
]


export default function Blogs(){

     const [selectedBlog , setSelectedBlog] = useState<number | null>(null)

    //  if(selectedBlog !== null){
    //      return <BlogDetails blog={blogData[selectedBlog]} goBack={()=>setSelectedBlog(null)} />
    //  }

   
    
    return(
        <>
            <div className="px-[8%] lg:px-[12%] bg-[#e6f9ef] py-5">
                    <div className="flex justify-between items-center">
                      <h2 className="text-2xl">وبلاگ</h2>
                      <div className="flex">
                        <Link href={`/`} className="text-2xl">
                          صفحه اصلی &nbsp;:
                        </Link>
                        <h2 className="text-2xl text-[#299e60]">&nbsp;وبلاگ</h2>
                      </div>
                    </div>
                  </div>
                  <div className="px-[8%] lg:px-[12%] py-5 mt-10">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-5">
                        {/* blog list */}
                        <div className="w-full lg:w-1/1 gap-5">
                            {blogData.map((blog , index)=>(
                               <Link
                               key={blog.id}
                               href={{
                                pathname:"/UI-Component/Blogs/blogDetails",
                                query:{id:blog.id}
                               }}
                               >
                                  <div
                                 
                                 className="flex flex-col gap-5 mb-10 cursor-pointer"
                                  onClick={()=>setSelectedBlog(index)}
                                >
                                    <div className="blog-image overflow-hidden rounded-md">
                                        <img 
                                        src={blog.image}
                                         alt={blog.title}
                                         className='transition-transform duration-300 ease-in-out hover:scale-110'
                                         />
                                    </div>
                                    <div className="blog-content mt-3">
                                        <span className="bg-[#e6f9ef] p-3 shadow-md text-2xl">{blog.tag}</span>
                                        <h2 className="text-4xl mt-5 hover:text-[#299e60] hover:underline">{blog.title}</h2>
                                        <p className="mt-5 text-lg border-b pb-3 border-gray-400">{blog.pere}</p>
                                        <div className="flex mt-5 gap-5">
                                            <p className="text-gray-500 flex items-center gap-2">
                                                <SlCalender size={25} color='#299e60' />
                                                {blog.date}
                                            </p>
                                            <p className="text-gray-500 flex items-center gap-2">
                                                <FaRegCommentDots size={25} color='#299e60' />
                                                {blog.commnt}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                               </Link>
                            ))}
                        </div>
                        {/* sidebar */}
                        <div className="w-full lg:w-1/2 gap-5 sticky top-22 left-0 h-[100%]">
                        <div className="border border-gray-300 rounded">
                            <div className="border-b border-gray-300 p-5">
                                <h2 className="text-2xl">آخرین مطالب</h2>
                            </div>
                            <div className="p-5">
                                {blogData.map((blog , index)=>(
                                    <div
                                    key={index}
                                    className='flex justify-between items-center mb-5 gap-5 cursor-pointer'
                                     onClick={()=>setSelectedBlog(index)}
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
                                                    <SlCalender size={25}  className='pr-1 text-[#299e60]' />
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
    )
}