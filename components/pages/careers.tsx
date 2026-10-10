"use client"

import Image from "next/image"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

import { Banner, CareerIntroductionProps } from "@/types/api"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
    banner: Banner
    introduction: CareerIntroductionProps
}

export default function CareersPage({
    banner,
    introduction,
}: Props) {
    return (
        <>
        <Header page_name="Careers" />
        <main className="bg-white px-5 sm:px-15 lg:px-20">
            <div className="relative mt-20 sm:mt-25 md:mt-30 h-[80vh]">
                <Image src={banner.banner_image_url} className="object-cover w-full h-full" alt={banner.banner_image_caption || 'Join Us'} width={1920} height={1080} />
                <h1 className="text-white text-4xl md:text-7xl font-semibold absolute top-1/2 -translate-y-1/2 left-10 lg:left-1/4">{banner.banner_image_caption}</h1>
            </div>
            <p className="tracking-wide leading-8 text-lg md:text-xl mx-auto max-w-screen md:w-2xl py-15 md:py-30 text-[#666666] font-light">{introduction.introduction_description}</p>
        </main>
        <Footer />
        </>
    )
}