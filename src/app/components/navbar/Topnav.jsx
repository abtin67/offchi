import Link from "next/link";

export default function Topnav(){
    return(
        <div className="hidden sm:flex w-full  bg-[#299e60] text-white text-sm">
            <div className="w-full flex justify-between py-3 px-[8%] lg:px-[12%]">
                <div className="flex space-x-4 me-20">
                    <Link href='/' className="pl-3 border-l-2 border-gray-300 hover:underline" >
                        درباره ما
                    </Link>
                    <Link href='/' className="pl-3 border-l-2 border-gray-300 hover:underline" >
                        ارسال رایگان
                    </Link>
                    <Link href='/' className=" hover:underline" >
                      سیاست بازگشت کالا
                    </Link>
            </div>
            <div className="flex space-x-4">
                <Link href={`/`} className="pl-3 border-l-2 border-gray-300 hover:underline">پشتیبانی</Link>
                <Link href={`/`} className="hover:underline">اکانت من</Link>
            </div>
            </div>
        </div>
    )
}