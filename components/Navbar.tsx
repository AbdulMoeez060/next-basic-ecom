import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import UserIcon from './UserIcon'
import { UserContextProvider } from '@/context/userContext'

const Navbar = () => {
    return (
        <header className="w-full flex justify-center">
            <div className="container">
                <div className="md:py-6 py-4">
                    <div className="flex justify-between flex-col sm:flex-row gap-4 items-center">
                        <div className="flex flex-col sm:flex-row items-center gap-4 relative">
                            <Link href="/" className="block w-[80px] h-[80px] bg-gray-50 p-2 rounded-full border-4 border-secondary-50">
                                <Image src="https://cdn.salla.network/images/logo/logo-square.png" alt="Logo" width={60} height={60} />
                            </Link>
                            <div className="flex flex-col">
                                <h1 className="text-xl">متجر التجربة الجميلة</h1>
                                <small className="text-gray-400">متجرك لكل تجاربك وأفكارك الجميلة</small>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <UserContextProvider>

                                <UserIcon />
                            </UserContextProvider>
                            <Link href="/cart" type="button" className="w-[40px] h-[40px] rounded-full text-center flex items-center justify-center bg-secondary-50 text-primary">
                                <i className="sicon-shopping-bag"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar