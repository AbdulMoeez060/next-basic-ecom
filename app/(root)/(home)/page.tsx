import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full main flex-auto flex justify-center">
      <div className="container">
        <div className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl">
          <Slider />
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex flex-col gap-1 flex-1">
              <label htmlFor="product_query" className="hidden">ابحث عن منتج</label>
              <input type="text" id="product_query" name="product_query" className="w-full p-2 bg-white appearance-none rounded-md border text-md" placeholder="ادخل اسم المنتج..." />
            </div>
            <div className="flex flex-col gap-1 shrink-0 sm:min-w-[180px]">
              <label htmlFor="categories" className="hidden">اختر تصنيف</label>
              <select id="categories" name="categories" className="bg-white border text-md rounded-md focus:ring-secondary-50 focus:border-secondary-50 block w-full px-2 py-1">
                <option selected value="all">الكل</option>
                <option value="cat_1">تصنيف ١</option>
                <option value="cat_2">تصنيف ٢</option>
                <option value="cat_3">تصنيف ٣</option>
                <option value="cat_4">تصنيف ٤</option>
              </select>
            </div>
          </div>
          <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 sm:gap-4">
            <div className="rounded-lg border-2 border-gray-50 flex flex-col items-start justify-start md:p-3 p-2 relative">
              <a href="product-details.html" className="block w-full relative mb-4">
                <img src="images/products/01.png" className="w-full aspect-4/3 object-cover rounded-lg" alt="product" />
              </a>
              <div className="w-full flex flex-col flex-1 items-start justify-start gap-4">
                <div className="flex items-center justify-center flex-col gap-1">
                  <a href="#" className="block w-full text-primary text-center">
                    <h2 className="text-sm">سماعات apple AirPods Max  الاصدار الجديد</h2>
                  </a>
                  <small className="block text-xs w-full text-center">الاصدار الاحدث و الافضل حتى اليوم</small>
                </div>
                <div className="flex items-center justify-center flex-wrap gap-2 text-gray-300 w-full">
                  <a className="text-xs text-gray-500 underline" href="#">تصنيف اول</a><a className="text-xs text-gray-500 underline" href="#">تصنيف ثاني</a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center w-full my-4 gap-0 sm:gap-2">
                <span className="font-medium text-md">2,250.00 SAR</span>
                <span className="font-medium text-sm line-through text-gray-300">2,500.00 SAR</span>
              </div>
              <button type="button" className="w-full bg-primary text-white p-2 text-md rounded-md">إضافة للسلة</button>
            </div>
            {/* <!-- product-entry --> */}
            <div className="rounded-lg border-2 border-gray-50 flex flex-col items-start justify-start md:p-3 p-2 relative">
              <a href="product-details.html" className="block w-full relative mb-4">
                <img src="images/products/02.png" className="w-full aspect-4/3 object-cover rounded-lg" alt="product" />
              </a>
              <div className="w-full flex flex-col flex-1 items-start justify-start gap-4">
                <div className="flex items-center justify-center flex-col gap-1">
                  <a href="#" className="block w-full text-primary text-center">
                    <h2 className="text-sm">سماعات apple AirPods Max  الاصدار الجديد</h2>
                  </a>
                  <small className="block text-xs w-full text-center">الاصدار الاحدث و الافضل حتى اليوم</small>
                </div>
                <div className="flex items-center justify-center flex-wrap gap-2 text-gray-300 w-full">
                  <a className="text-xs text-gray-500 underline" href="#">تصنيف اول</a><a className="text-xs text-gray-500 underline" href="#">تصنيف ثاني</a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center w-full my-4 gap-0 sm:gap-2">
                <span className="font-medium text-md">2,250.00 SAR</span>
                <span className="font-medium text-sm line-through text-gray-300">2,500.00 SAR</span>
              </div>
              <button type="button" className="w-full bg-primary text-white p-2 text-md rounded-md">إضافة للسلة</button>
            </div>
            {/* <!-- product-entry --> */}
            <div className="rounded-lg border-2 border-gray-50 flex flex-col items-start justify-start md:p-3 p-2 relative">
              <a href="product-details.html" className="block w-full relative mb-4">
                <img src="images/products/03.png" className="w-full aspect-4/3 object-cover rounded-lg" alt="product" />
              </a>
              <div className="w-full flex flex-col flex-1 items-start justify-start gap-4">
                <div className="flex items-center justify-center flex-col gap-1">
                  <a href="#" className="block w-full text-primary text-center">
                    <h2 className="text-sm">سماعات apple AirPods Max  الاصدار الجديد</h2>
                  </a>
                  <small className="block text-xs w-full text-center">الاصدار الاحدث و الافضل حتى اليوم</small>
                </div>
                <div className="flex items-center justify-center flex-wrap gap-2 text-gray-300 w-full">
                  <a className="text-xs text-gray-500 underline" href="#">تصنيف اول</a><a className="text-xs text-gray-500 underline" href="#">تصنيف ثاني</a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center w-full my-4 gap-0 sm:gap-2">
                <span className="font-medium text-md">2,250.00 SAR</span>
                <span className="font-medium text-sm line-through text-gray-300">2,500.00 SAR</span>
              </div>
              <button type="button" className="w-full bg-primary text-white p-2 text-md rounded-md">إضافة للسلة</button>
            </div>
            {/* <!-- product-entry --> */}
            <div className="rounded-lg border-2 border-gray-50 flex flex-col items-start justify-start md:p-3 p-2 relative">
              <a href="product-details.html" className="block w-full relative mb-4">
                <img src="images/products/04.png" className="w-full aspect-4/3 object-cover rounded-lg" alt="product" />
              </a>
              <div className="w-full flex flex-col flex-1 items-start justify-start gap-4">
                <div className="flex items-center justify-center flex-col gap-1">
                  <a href="#" className="block w-full text-primary text-center">
                    <h2 className="text-sm">سماعات apple AirPods Max  الاصدار الجديد</h2>
                  </a>
                  <small className="block text-xs w-full text-center">الاصدار الاحدث و الافضل حتى اليوم</small>
                </div>
                <div className="flex items-center justify-center flex-wrap gap-2 text-gray-300 w-full">
                  <a className="text-xs text-gray-500 underline" href="#">تصنيف اول</a><a className="text-xs text-gray-500 underline" href="#">تصنيف ثاني</a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center w-full my-4 gap-0 sm:gap-2">
                <span className="font-medium text-md">2,250.00 SAR</span>
                <span className="font-medium text-sm line-through text-gray-300">2,500.00 SAR</span>
              </div>
              <button type="button" className="w-full bg-primary text-white p-2 text-md rounded-md">إضافة للسلة</button>
            </div>
          </div>
          <div role="status" className="flex items-center justify-center p-2 hidden">
            <svg aria-hidden="true" className="w-6 h-6 mr-2 text-gray-200 animate-spin fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
}
