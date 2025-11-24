import Link from "next/link";
import { AiOutlinePhone } from "react-icons/ai";
import { BsGeoAlt } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

export default function Contact() {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] bg-[#e6f9ef] py-5">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl">ارتباط با ما</h2>
          <div className="flex">
            <Link href={`/`} className="text-2xl">
              صفحه اصلی &nbsp;:
            </Link>
            <h2 className="text-2xl text-[#299e60]">&nbsp;ارتباط با ما</h2>
          </div>
        </div>
      </div>
      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="flex flex-col lg:flex-row justify-between gap-5">
          {/* login */}
          <div className="w-full lg:w-1/1 gap-3 border border-gray-300 px-5 rounded-lg hover:border-[#299e60] cursor-pointer">
            <h2 className="text-xl mb-10 mt-5">از من بپرس!!</h2>
            <form>
              <div className="flex flex-col gap-3 lg:flex-row justify-between items-center">
                <div className="flex flex-col mb-5 w-full">
                  <label className="mb-2">نام و نام خانوادگی</label>
                  <input
                    type="text"
                    placeholder="نام..."
                    className="rounded-md border border-gray-300 focus:border-[#299e60] focus:outline-none p-2"
                  />
                </div>
                <div className="flex flex-col mb-5 w-full">
                  <label className="mb-2">ایمیل</label>
                  <input
                    type="email"
                    placeholder="ایمیل..."
                    className="rounded-md border border-gray-300 focus:border-[#299e60] focus:outline-none p-2"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 lg:flex-row justify-between items-center">
                <div className="flex flex-col mb-5 w-full">
                  <label className="mb-2">تلفن</label>
                  <input
                    type="tell"
                    placeholder="تلفن..."
                    className="rounded-md border border-gray-300 focus:border-[#299e60] focus:outline-none p-2"
                  />
                </div>
                <div className="flex flex-col mb-5 w-full">
                  <label className="mb-2">موضوع</label>
                  <input
                    type="text"
                    placeholder="موضوع..."
                    className="rounded-md border border-gray-300 focus:border-[#299e60] focus:outline-none p-2"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-5 max-w-full">
                <label className="mb-2">پیام</label>
                <textarea
                  rows={5}
                  placeholder="پیام خود را بنویسید"
                  className="w-full rounded-md border border-gray-300 p-3 focus:border-[#299e60] focus:border-2 focus:outline-none"
                ></textarea>
              </div>
              <button className="px-8 py-3 mb-4 hover:bg-[#098375] rounded-md text-white bg-[#299e60]">
                ارسال پیام
              </button>
            </form>
          </div>

          <div className="w-full lg:w-1/1 gap-3 sticky top-25 left-0 h-[100%] hover:border-[#299e60] cursor-pointer">
            <div className="border border-gray-300 px-5 py-6 rounded-lg">
              <h2 className="text-xl mb-10 mt-5">ارتباط مستقیم</h2>
              <div className="flex flex-col gap-8 mt-5">
                <p className="text-[#299e60] border border-[#299e60] rounded-full p-1 flex items-center gap-2">
                  <AiOutlinePhone
                    size={25}
                    className="mr-2 border border-[#299e60] text-[#299e60] h-8 p-[2px] w-8 rounded-full"
                  />
                  <span dir="ltr">+98 9038308519</span>
                </p>
                <p className="text-[#299e60] flex items-center gap-2 border border-[#299e60] rounded-full p-1">
                  <MdAlternateEmail
                    size={25}
                    className="mr-2 border border-[#299e60] text-[#299e60] h-8 p-[4px] w-8 rounded-full"
                  />
                  <span dir="ltr">aghebatiferydoun902@gmail.com</span>
                </p>
                <p className="text-[#299e60] flex items-center gap-2 border border-[#299e60] rounded-full p-1">
                  <BsGeoAlt
                    size={25}
                    className="mr-2 border border-[#299e60] text-[#299e60] h-8 p-[2px] w-8 rounded-full"
                  />
                  <span>تهران، خیابان ولیعصر، کوچه بهار، پلاک ۷۸۹</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 gap-3 border border-gray-300 px-5 py-8 rounded-lg hover:border-[#299e60] cursor-pointer">
        <h2 className="text-xl mb-2">ثبت نام</h2>
        <form>
          <div className="flex flex-col mb-5">
            <label className="mb-2">
              نام کاربری <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="نام کاربری"
              className="rounded-md border border-gray-300 p-2 focus:outline-none focus:border-[#299e60]"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label className="mb-2">
              {" "}
              ایمیل <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="ایمیل"
              className="rounded-md border border-gray-300 p-2 focus:outline-none focus:border-[#299e60]"
            />
          </div>

          <div className="flex flex-col mb-5">
            <label className="mb-2">رمز عبور</label>
            <input
              type="password"
              placeholder="رمز عبور..."
              className="rounded-md border border-gray-300 p-2 focus:outline-none focus:border-[#299e60]"
            />
          </div>
          <p className="text-md text-gray-600 mb-2">
            اطلاعات شخصی شما برای پردازش سفارش و پشتیبانی از تجربه شما در این وب
            سایت و سایر اهدافی که در سیاست حفظ حریم خصوصی شرح داده شده اند
            استفاده خواهد شد
          </p>
          <div className="flex items-center gap-5 mb-8">
            <button className="px-8 py-3 rounded-md text-white bg-[#299e60]">
              ثبت نام
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
