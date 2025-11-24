"use client";

import vendorsData from "@/app/jsonData/Venders.json";
import Image from "next/image";

export default function Vendors() {

    const bgColor = [
        "#f8eae4",
        "#dee6f3",
        "#daf2db",
         "#ebf1db",
        "#f4f6e6",
        "#e6f6f6",
        "#f6e6f6",
        "#f8eae4",
    ]
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="title my-10 w-full flex flex-col lg:flex-row justify-between items-center">
          <h1 className="text-5xl">فروشندگان برتر هفته</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-17 mt-20">
            {vendorsData.map((vendor , index)=>(
                <div  
                key={vendor.id}
                className="vendor-wrap border border-gray-200 relative rounded-2xl p5 shadow hover:shadow-lg hover:translate-y-2
                transition-all duration-300 bg-white cursor-pointer"
                style={{backgroundColor:bgColor[index % bgColor.length]}}
                >
                    <div className="flex flex-col items-center mb-3">
                        <Image
                        src={vendor.vendormain}
                        alt={vendor.title}
                        width={120}
                        height={120}
                        className="absolute -top-9 object-contain rounded-full border-t border-gray-300 p-4"
                         style={{backgroundColor:bgColor[index % bgColor.length]}}
                        />
                        <div className="mt-18">
                          <h2 className="text-3xl font-semibold hover:text-[#299e60] transition-all cursor-pointer">
                            {vendor.title}
                          </h2>
                          <p className="text-gray-500 text-center text-lg mt-1">{vendor.time}</p>
                        </div>
                        <p className="bg-[#299e60] px-4 mt-3 text-white text-ئی py-1 rounded mb-4 inline-block">
                          {vendor.off}
                        </p>
                         
                    </div>
                    <div className="flex justify-between gap-2 mt-2">
                      {vendor.vendors.map((img , index)=>(
                        <Image
                        key={index}
                        src={img}
                        alt={`vendor ${index+1}`}
                        width={100}
                        height={100}
                        className="bg-white p-4 rounded-full hover:bg-gray-200 transition-all duration-300 cursor-pointer object-contain"
                        />
                      ))}
                    </div>
                   
                </div>
            ))}
        </div>
      </div>
    </>
  );
}
