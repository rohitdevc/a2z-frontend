"use client"

import Image from "next/image"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

import { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

import Link from "next/link";

export default function DisclaimerPage() {
    const basePath = process.env.NEXT_PUBLIC_PATH!.replace(/\/$/, "");

    return (
        <>
        <Header page_name="Disclaimer" />
        <main className="bg-white px-5 sm:px-15 lg:px-20">
            <section className="mt-20 sm:mt-25 md:mt-30 xl:px-20 py-20 lg:py-30 flex flex-col md:flex-row gap-10 md:gap-40 lg:gap-50">
                <div className="md:w-[10%]">
                    <div className="bg-[#FF6600] h-[3px] w-30"></div>
                </div>
                <h1 className="w-full md:w-[80%] text-black text-4xl lg:text-6xl font-semibold">Disclaimer</h1>
            </section>
            <p className="tracking-wide leading-8 text-lg md:text-xl mx-auto max-w-screen md:w-3xl py-15 md:py-30 text-[#666666] font-light">A2Z Online Services makes no representation or warranty of any kind, express, implied, or statutory, regarding this website or the materials and information contained or referred to on each page associated with the website. The material and information on the website are provided for general information only and should not be used as a basis for making business decisions. Any advice or information received via the website should not be relied upon without consulting primary or more accurate or up-to-date sources of information or specific professional advice. You are advised to obtain such professional advice wherever appropriate. Geographic, political, economic, statistical, and financial information, as well as exchange rate data, are presented in approximation or summarized/simplified form and may change over time. The editors have relied on certain external statistical data, which, though believed to be correct, may not, in fact, be accurate. <br/><br/>
            A2Z Online Services accepts no liability for any loss or damage arising directly or indirectly from actions taken or not taken in reliance on material or information contained on this website. In particular, no warranty is given that information, material, or data on the website is accurate, reliable, or up to date. A2Z Online Services accepts no liability and will not be liable for any loss or damage arising directly or indirectly (including special, incidental, or consequential loss or damage) from the use of this website, including any loss, damage, or expense arising from, but not limited to, any defect, error, imperfection, fault, mistake, or inaccuracy with this website, its contents, or associated services, or due to any unavailability of the website or any part thereof, or any content or associated services.<br/><br/>
            Please note that any software downloaded from this website is at your own risk, and A2Z Online Services neither assumes nor accepts liability for any loss or damage (whether direct or indirect), howsoever caused, as a result of any computer viruses, Trojan horses, worms, software bombs, or similar items or processes arising from the use of this website.<br/><br/>
            Any hyperlinks from this website exist for informational purposes and are for your convenience only. A2Z Online Services accepts no liability for any loss or damage arising directly or indirectly (including consequential loss) from the accuracy or otherwise of materials or information contained on the pages of such sites or from defects with such sites. The inclusion of hyperlinks does not imply any endorsement of the material on such sites.<br/>
            A2Z Online Services does not guarantee that any email from the website will be sent to you or received by A2Z Online Services. Nor does A2Z Online Services warrant the privacy and/or security of emails during Internet transmission.</p>
        </main>
        <Footer />
        </>
    )
}