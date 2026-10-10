"use client"

import Image from "next/image"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

import { ServiceProps } from "@/types/api"

import { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

import Link from "next/link";

type Props = {
    service: ServiceProps
}

export default function ServicesPages({
    service,
}: Props) {
    const basePath = process.env.NEXT_PUBLIC_PATH!.replace(/\/$/, "");

    return (
        <>
        <Header page_name="Home" />
        <main className="bg-white px-5 sm:px-15 lg:px-20">
            <div className="relative mt-20 sm:mt-25 md:mt-30 h-[80vh]">
                <Image src={service.banner_image_url} className="object-cover w-full h-full" alt={service.service_name} width={1920} height={1080} />
                <div className="text-white absolute top-1/2 -translate-y-1/2 left-10 lg:left-1/5 font-semibold flex flex-col gap-5">
                    <h2 className="uppercase text-xl">Service</h2>
                    <h1 className="text-4xl md:text-7xl max-w-sm">{service.service_name}</h1>
                </div>
            </div>
            <p className="tracking-wide leading-8 text-lg md:text-xl md:px-30 py-15 md:py-30 text-[#666666] font-light">{service.service_description}</p>
        </main>
        <Footer />
        </>
    )
}