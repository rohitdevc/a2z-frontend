"use client"

import Image from "next/image"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from "swiper/modules"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

import { HiArrowLongRight } from "react-icons/hi2";

import { HomeIntroProps, HomeSliderProps, HomeMilestoneProps, ClientProps } from "@/types/api"

import { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

import Link from "next/link";

type Props = {
    sliders: HomeSliderProps[]
    introduction: HomeIntroProps
    milestones: HomeMilestoneProps[]
    clients: ClientProps[]
}

export default function HomePage({
    sliders,
    introduction,
    milestones,
    clients,
}: Props) {
    const basePath = process.env.NEXT_PUBLIC_PATH!.replace(/\/$/, "");

    return (
        <>
        <Header page_name="Home" />
        <main className="bg-white px-10 md:px-20">
            {
                sliders && sliders.length > 0 && (
                    <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    speed={1000}
                    modules={[Pagination, Autoplay]}
                    autoplay={{delay: 5000, pauseOnMouseEnter: false}}
                    pagination={{
                        el: ".master-slider-pagination",
                        clickable: true
                    }} className="relative mt-30 h-[80vh]">
                        {
                            sliders.map((slider, key) => (
                                <SwiperSlide key={key} className="bg-no-repeat bg-cover bg-center relative" style={{backgroundImage: `url(${slider.slider_image_url})`}}>
                                    <div className="absolute inset-0 top-0 left-0 bg-black/20 z-1"></div>
                                    <div className="absolute z-2 top-20 left-1/4 border-4 w-45 h-90 border-[#FF6600] flex flex-col text-white relative z-2 px-7 py-10 font-semibold text-xs">
                                        <h3>{slider.slider_caption}</h3>
                                        <h4 className="text-5xl mt-20 whitespace-nowrap">{slider.slider_description}</h4>
                                        <Link href={slider.slider_link} className="mt-auto flex gap-3 items-center">View Service <HiArrowLongRight size={20} /></Link>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                        <div className="master-slider-pagination flex items-center gap-3 absolute !bottom-30 !right-70 z-5 cursor-pointer" />
                        <div className="absolute top-5 right-10 z-2 text-black flex items-center gap-7">
                            <div className="border-5 w-35 h-35 border-[#FF6600] flex items-center">
                                <span className="text-[8rem] font-semibold">{(new Date().getFullYear() - 2002)}</span>
                            </div>
                            <p className="text-2xl">Years<br />Of<br />Legacy</p>
                        </div>
                    </Swiper>
                )
            }
            {
                introduction && (
                <section className="px-20 py-30 flex flex-col md:flex-row justify-between w-full">
                    <div className="flex flex-col gap-10 w-1/2">
                        <h2 className="uppercase text-[#FF6600] font-medium text-lg tracking-[1px]">About Us</h2>
                        <h1 className="text-black text-6xl font-semibold leading-tight">{introduction.introduction_caption}</h1>
                        <p className="leading-loose text-lg">{introduction.introduction_description}</p>
                    </div>
                    <div className="w-1/2 flex justify-end relative">
                        <Image src={introduction.introduction_image_url} alt={introduction.introduction_caption} width={470} height={660} className="z-1" />
                        <div className="bg-repeat absolute -bottom-20 h-[50%] w-full" style={{backgroundImage: `url(${basePath}/images/dots.png)`}}></div>
                    </div>
                </section>
                )
            }
        </main>
        <Footer />
        </>
    )
}