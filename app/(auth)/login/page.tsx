import React from 'react'

export default function Login() {
    return (
        <main className="w-full main flex-auto">
            <div className="">
                <div
                    className="p-2 sm:p-4 bg-white rounded-lg shadow-4xl sm:max-w-[700px] mx-auto"
                >
                    <div
                        className="flex flex-col text-center items-center justify-center mb-6"
                    >
                        <h2 className="text-lg">تسجيل الدخول</h2>
                        <span className="text-xs text-gray-500"
                        >قم بتسجيل الدخول لمتابعة التسوق</span
                        >
                    </div>
                    <form method="post" action="#" className="flex flex-col w-full">
                        <div className="mb-4">
                            <label className="block mb-2 text-md" htmlFor="username"
                            >اسم المستخدم</label
                            >
                            <input
                                type="text"
                                name="username"
                                id="username"
                                autoComplete="on"
                                className="w-full p-2 bg-white appearance-none rounded-md border text-md"
                                placeholder="اسم المستخدم.."
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-md" htmlFor="password"
                            >كلمة المرور</label
                            >
                            <input
                                type="password"
                                name="password"
                                autoComplete="on"
                                id="password"
                                className="w-full p-2 bg-white appearance-none rounded-md border text-md"
                                placeholder="كلمة المرور.."
                            />
                        </div>
                        <div className="flex gap-4">
                            <button
                                type="button"
                                className="w-full bg-primary text-secondary flex-1 p-2 text-md rounded-md"
                            >
                                دخول
                            </button>
                            <button
                                type="button"
                                className="w-fit text-primary underline p-2 text-md rounded-md"
                            >
                                نسيت كلمة المرور؟
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

