"use client"

import Image from "next/image"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

import { AwardsProps } from "@/types/api"

import { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

import Link from "next/link";

type Props = {
    awards: AwardsProps[]
}

export default function AwardPage({
    awards,
}: Props) {
    return (
        <>
        <Header page_name="Awards" />
        <main className="bg-white px-5 sm:px-15 lg:px-20">
            <section className="mt-20 sm:mt-25 md:mt-30 xl:px-20 py-20 lg:py-30 flex flex-col md:flex-row gap-10 md:gap-40 lg:gap-50">
                <div className="md:w-[10%]">
                    <div className="bg-[#FF6600] h-[3px] w-30"></div>
                </div>
                <h1 className="w-full md:w-[80%] text-black text-4xl lg:text-5xl font-semibold">Awards</h1>
            </section>
            <section className="w-full text-white grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-5">
                {
                    awards.map((award, key) => (
                        <div key={key} className="group">
                            <Image src={award.award_image_url} width={300} height={800} alt={award.award_name} className="w-full" />
                            <div className="transition-all duration-300 bg-[#F2F2F2] group-hover:bg-[#FF6600] flex flex-col gap-7 px-10 py-10 text-[#666666] group-hover:text-white">
                                <h3>{award.award_year}</h3>
                                <h2 className="text-black group-hover:text-white font-semibold text-2xl">{award.award_name}</h2>
                                <p>{award.award_description}</p>
                            </div>
                        </div>
                    ))
                }
            </section>
        </main>
        <Footer />
        </>
    )
}