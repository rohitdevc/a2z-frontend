"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";

type Props = {
    page_name: string;
}

export default function Header({page_name}: Props) {
    const basePath = process.env.NEXT_PUBLIC_PATH!.replace(/\/$/, "");

    const [menuState, updateMenuState] = useState(false);

    const openMenu = () => {
        updateMenuState(true);

        document.body.classList.add('overflow-hidden');
    }

    const closeMenu = () => {
        updateMenuState(false);

        document.body.classList.remove('overflow-hidden');
    }

    const nav_options = [
        {
            nav_name: 'Home',
            nav_link: '/'
        },
        {
            nav_name: 'About',
            nav_link: '/about-us'
        },
        {
            nav_name: 'Services',
            nav_link: '/services'
        },
        {
            nav_name: 'Projects',
            nav_link: '/projects'
        },
        {
            nav_name: 'Awards',
            nav_link: '/awards'
        },
        {
            nav_name: 'Careers',
            nav_link: '/careers'
        },
        {
            nav_name: 'Compliances',
            nav_link: '/compliances'
        },
        {
            nav_name: 'Contact',
            nav_link: '/contact-us'
        },
    ]

    return (
        <header className="fixed top-0 py-10 px-10 md:px-20 flex justify-between items-center w-full">
            <Link className="w-50" href="/">
                <Image src={`${basePath}/images/logo.jpg`} alt="a2z logo" width={322} height={112} className="object-cover w-full h-full" loading="eager" />
            </Link>
            <div className="flex flex-col md:flex-row justify-between items-end md:items-center w-sm">
                <h3 className="uppercase font-semibold tracking-wider text-xs sm:text-sm md:text-base">Contact Us: <Link href="tel:+912066473200" className="text-black transition-all duration-300 hover:text-[#FF6600]">+91 20 66473200</Link></h3>
                <span className="bg-[#e0e0e0] h-15 w-[0.2px] hidden md:block"></span>
                <IoIosMenu size={30} className="cursor-pointer text-black" onClick={() => openMenu()} />
            </div>
            <div className={`fixed top-0 right-0 w-lg h-screen bg-white px-20 shadow-[0_0_65px_black]/[7%] transition-all duration-500 origin-right ${menuState ? 'scale-x-100' : 'scale-x-0'}`}>
                <TfiClose size={30} className="absolute right-5 md:right-20 top-5 md:top-15 cursor-pointer" onClick={() => closeMenu()} />
                <nav className="mt-10 md:mt-50 h-screen md:h-[calc(100vh-12rem)] overflow-y-auto scrollbar-thick scrollbar-thumb-[#ff6600] scrollbar-track-transparent">
                    <ul className="flex flex-col gap-6 text-[2.5rem] font-semibold tracking-normal py-5 text-[#999999]">
                        {
                            nav_options.map((nav_option, key) => (
                                <li key={key} className={`transition-all duration-300 ${nav_option.nav_name === page_name ? 'text-black' : ''} hover:text-black`}>
                                    <Link href={nav_option.nav_link}>{nav_option.nav_name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}