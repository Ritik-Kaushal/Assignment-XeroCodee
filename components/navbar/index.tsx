"use client";

import OffScreenNavButton from '@/icons/offScreenNavButton';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

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

    const [showNav, setShowNav] = useState(false);
    const offScreenRef: React.RefObject<HTMLDivElement> = useRef(null);

    useEffect(() => {
        let handler = (e: any) => {
            if (offScreenRef.current)
                if (!offScreenRef.current.contains(e.target)) setShowNav(false);
        }

        document.addEventListener("mousedown", handler);
    }, []);

    return (
        <nav className="bg-white border border-gray-200 rounded-lg shadow-bottom px-[16px] sm:px-[30px] md:px-[80px] xl:px-[117px] pt-[21px] pb-[20px] h-[81px] flex justify-between items-center">
            <div className="font-bold text-lg select-none">
                <Image src="/logo.png" alt="Xero Codee" width="164" height="40" />
            </div>

            {/* For larger screen */}
            <div className="space-x-4 hidden xl:flex">
                {navItems.map((item, index) => {
                    return (
                        <a href={item.link} key={index} className="text-black hover:text-gray-500 font-normal text-lg select-none">{item.name}</a>
                    )
                })}
            </div>
            <div className='items-center justify-between hidden xl:flex'>
                <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 select-none">
                    <a href="#">Sign In</a>
                </button>
            </div>

            {/* For smaller screens */}
            <div className="flex xl:hidden p-1 rounded border border-gray-500 hover:bg-slate-200" onClick={() => { setShowNav((prev) => !prev); }} data-testid="toggle-button">
                <OffScreenNavButton width={30} height={30} />
            </div>

            {showNav && <div
                className={`flex xl:hidden flex-col fixed inset-y-0 top-4 left-0 w-64 sm:w-[420px] p-4 bg-white border border-gray-200 rounded shadow-md transform ${showNav ? '' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}
                ref={offScreenRef}
                data-testid="navigation-menu"
            >
                <div className="font-bold text-lg select-none flex justify-center align-middle text-center p-2">
                    <Image src="/logo.png" alt="Xero Codee" width="164" height="40" />
                </div>
                {navItems.map((item, index) => {
                    return (
                        <a href={item.link} key={index} className="text-black hover:text-gray-800 font-normal text-lg select-none border border-gray-500 p-2 m-2 rounded-lg hover:bg-gray-100">{item.name}</a>
                    )
                })}
            </div>}
        </nav>
    )
}
