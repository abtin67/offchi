import Link from "next/link";

export default function Account() {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] bg-[#e6f9ef] py-5">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl">حساب من</h2>
          <div className="flex">
            <Link href={`/`} className="text-2xl">
              صفحه اصلی &nbsp;:
            </Link>
            <h2 className="text-2xl text-[#299e60]">&nbsp; حساب من</h2>
          </div>
        </div>
      </div>
      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="flex flex-col lg:flex-row justify-between gap-5">
          {/* login */}
          <div className="w-full lg:w-1/2 gap-3 border border-gray-300 px-5 py-8 rounded-lg hover:border-[#299e60] cursor-pointer">
            <h2 className="text-xl mb-2">ورود</h2>
            <form>
              <div className="flex flex-col mb-5">
                <label className="mb-2">
                  نام کاربری یا ایمیل <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="نام..."
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
              <div className="flex items-center gap-5 mb-8">
                <button className="px-8 py-3 rounded-md text-white bg-[#299e60]">
                  ورود
                </button>
                <div className="flex">
                  <label className="flex items-center text-xl cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 mr-2 me-2" />
                    مرا به خاطر بسپار
                  </label>
                </div>
              </div>
            </form>
          </div>
          {/* register */}
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
                اطلاعات شخصی شما برای پردازش سفارش و پشتیبانی از تجربه شما در
                این وب سایت و سایر اهدافی که در سیاست حفظ حریم خصوصی شرح داده
                شده اند استفاده خواهد شد
              </p>
              <div className="flex items-center gap-5 mb-8">
                <button className="px-8 py-3 rounded-md text-white bg-[#299e60]">
                  ثبت نام
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
