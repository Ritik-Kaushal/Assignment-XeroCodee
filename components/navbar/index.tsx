import Image from 'next/image';
import React from 'react';

export default function Navbar() {

    interface NavItemInterface {
        name: string,
        link: string
    }

    const navItems: NavItemInterface[] = [
        { name: "Home", link: "#" },
        { name: "Teams", link: "#" },
        { name: "Contact", link: "#" },
        { name: "Careers", link: "#" },
    ]

    return (
        <nav className="bg-white border border-gray-200 rounded-lg shadow-bottom px-[117px] pt-[21px] pb-[20px] h-[81px] flex justify-between items-center">
            <div className="font-bold text-lg select-none">
                <Image src="/logo.png" alt="Xero Codee" width="164" height="40" />
            </div>
            <div className="space-x-4">
                {navItems.map((item, index) => (
                    <a href={item.link} key={index} className="text-black hover:text-gray-500 font-normal text-lg select-none">{item.name}</a>
                ))}
            </div>
            <div>
                <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 select-none">
                    <a href="#">Sign In</a>
                </button>
            </div>
        </nav>
    )
}
