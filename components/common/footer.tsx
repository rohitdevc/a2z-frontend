"use client"

import Link from "next/link";

import { useEffect, useState } from "react";

export default function Footer() {
    const [accepted, setAccepted] = useState<boolean>(true);

    useEffect(() => {
        setAccepted(localStorage.getItem('cookiesAccepted') === 'true')
    }, [])

    const handleAccept = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setAccepted(true)
    }

    return (
        <>
        <footer className="py-10 px-15 lg:px-40 text-black flex flex-col gap-7">
            <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0">
                <ul className="flex flex-col gap-2 mx-auto md:mx-0 order-2 md:order-1 w-full md:w-[48%]">
                    <li>&copy; a2zonlineservices.com</li>
                    <li>All Rights Reserved</li>
                </ul>
                <div className="flex justify-between order-1 md:order-2 w-full md:w-[52%]">
                    <ul className="flex flex-col gap-2">
                        <li>
                            <Link href="/services">Services</Link>
                        </li>
                        <li>
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link href="/about-us">About</Link>
                        </li>
                        <li>
                            <Link href="/contact-us">Contact</Link>
                        </li>
                        <li>
                            <Link href="/awards">Awards</Link>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <Link href="/careers">Careers</Link>
                        </li>
                        <li>
                            <Link href="/disclaimer">Disclaimer</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="text-[#f2f2f2]" />
            <Link className="uppercase mx-auto text-base md:text-lg" target="_blank" href="https://www.theneontree.in/">Seeded By The Neon Tree</Link>
        </footer>
        {
            !accepted && (
            <section className={`fixed bottom-10 right-10 w-sm z-10`}>
                <div className="relative px-10 py-10 bg-white text-center flex flex-col gap-5 items-center shadow-xl border border-[#f2f2f2]">
                    <p className="leading-8">Our website uses cookies to ensure you get the best experience while you're here.</p>
                    <button className="bg-[#FF6600] text-white hover:bg-black w-fit transition-all duration-300 px-5 py-2 cursor-pointer" onClick={handleAccept}>Accept</button>
                </div>
            </section>
        )
        }
        </>
    )
}