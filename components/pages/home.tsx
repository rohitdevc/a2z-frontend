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
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { HomeIntroProps, HomeSliderProps, HomeMilestoneProps, ClientProps, ServicesProps } from "@/types/api"

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
    services: ServicesProps[]
}

export default function HomePage({
    sliders,
    introduction,
    milestones,
    clients,
    services
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
                        <div className="master-slider-pagination flex items-center gap-3 absolute !bottom-30 !right-70 !left-auto z-5 cursor-pointer" />
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
            {
                services && services.length > 0 && (
                    <section className="flex flex-col w-full gap-10">
                        <div className="px-20 py-20 flex justify-between w-full">
                            <h2 className="text-black font-semibold text-4xl tracking-[1px]">Our expertise includes</h2>
                            <div className="flex gap-5 items-center">
                                <Link href="/services" className="text-[#FF6600] italic tracking-[1px]">View all Services</Link>
                                <div className="flex gap-2">
                                    <button className="services.prev cursor-pointer" aria-label="Previous Slide">
                                        <IoIosArrowBack size={40} />
                                    </button>
                                    <button className="services_next cursor-pointer" aria-label="Next Slide">
                                        <IoIosArrowForward size={40} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <Swiper spaceBetween={0} slidesPerView={1} loop={true} breakpoints={{1280: {slidesPerView: 3, spaceBetween: 30}}} className="h-150 w-full text-white" modules={[Navigation]} navigation={{nextEl: '.services_next', prevEl: '.services.prev'}}>
                            {
                                services.map((service, key) => (
                                    <SwiperSlide key={key} className="bg-no-repeat bg-cover h-150 group !cursor-pointer" style={{backgroundImage: `url(${service.service_thumbnail_url})`}} onClick={() => window.location.href=`/services/${service.service_url_slug}`}>
                                        <div className="flex w-full h-full bg-gradient-to-t from-black/30 to-transparent transition-all duration-500 group-hover:bg-[#FF6600]/60">
                                            <div className="mt-auto px-10 py-10 flex flex-col gap-5">
                                                <h3 className="font-semibold text-3xl">{service.service_name}</h3>
                                                <Link href={`/services/${service.service_url_slug}`} className="flex gap-3 items-center">View Service <IoIosArrowForward size={20} /></Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </section>
                )
            }
            {
                clients && clients.length > 0 && (
                    <section className="px-20 py-30 flex flex-col w-full gap-10 bg-repeat" style={{backgroundImage: `url(${basePath}/images/dots.png)`}}>
                        <div className="flex justify-between items-center w-full">
                            <h2 className="text-black font-semibold text-4xl tracking-[1px]">Our clients</h2>
                            <div className="flex gap-2">
                                <button className="clients.prev cursor-pointer" aria-label="Previous Slide">
                                    <IoIosArrowBack size={40} />
                                </button>
                                <button className="clients_next cursor-pointer" aria-label="Next Slide">
                                    <IoIosArrowForward size={40} />
                                </button>
                            </div>
                        </div>
                        <Swiper spaceBetween={0} slidesPerView={2} loop={true} breakpoints={{1280: {slidesPerView: 4, spaceBetween: 30, slidesPerGroup: 4}}} className="w-full" modules={[Navigation]} navigation={{nextEl: '.clients_next', prevEl: '.clients.prev'}}>
                            {
                                clients.map((client, key) => (
                                    <SwiperSlide key={key} className="bg-[#fafafa] border border-[#e5e5e5]">
                                        <div className="w-50 mx-auto">
                                            <Image src={client.client_logo_url} alt={client.client_name} width={140} height={100} className="mx-auto w-30" />
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </section>
                )
            }
        </main>
        <Footer />
        </>
    )
}