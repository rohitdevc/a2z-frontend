"use client"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

import { ServicesProps } from "@/types/api"

import { useEffect, useRef, useState } from "react";

import { IoIosArrowForward } from "react-icons/io";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

import Link from "next/link";

type Props = {
    services: ServicesProps[]
}

export default function ServicesPages({
    services,
}: Props) {
    const [activeService, updateActiveService] = useState('All');

    const [visibleServices, setVisibleServices] = useState(services);
    const [fadingOut, setFadingOut] = useState(false);

    useEffect(() => {
        setFadingOut(true);

        const timeout = setTimeout(() => {
            setVisibleServices(
                activeService === 'All' ? services : services.filter((service) => service.service_name === activeService)
            )

            setFadingOut(false)
        }, 300);

        return () => clearTimeout(timeout);
    }, [activeService, services])

    return (
        <>
        <Header page_name="Services" />
        <main className="bg-white px-5 sm:px-15 lg:px-20 py-50">
            <section className="flex flex-col gap-20">
                <ul className="flex flex-wrap gap-10 xl:px-20 text-black font-semibold text-xl">
                    {
                        services && services.length && services.map((service, key) => (
                            <li className={`cursor-pointer transition-all duration-300 hover:text-[#FF6600] ${service.service_name === activeService ? 'text-[#FF6600]' : ''}`} key={key} onClick={() => updateActiveService(service.service_name)}>{service.service_name}</li>
                        ))
                    }
                    <li className={`cursor-pointer transition-all duration-300 hover:text-[#FF6600] ${'All' === activeService ? 'text-[#FF6600]' : ''}`} onClick={() => updateActiveService('All')}>All</li>
                </ul>
                <div className="w-full text-white grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {
                        visibleServices.map((service, key) => (
                            <div key={key} className={`h-150 md:h-110 lg:h-150 bg-no-repeat bg-center bg-cover group cursor-pointer transition-opacity duration-300 ${!fadingOut ? 'opacity-100' : 'opacity-0'}`} style={{backgroundImage: `url(${service.service_thumbnail_url})`}} onClick={() => window.location.href=`/services/${service.service_url_slug}`}>
                                <div className="flex w-full h-full bg-gradient-to-t from-black/30 to-transparent transition-all duration-500 group-hover:bg-[#FF6600]/60">
                                    <div className="mt-auto px-5 md:px-10 py-10 flex flex-col gap-5">
                                        <h3 className="font-semibold text-3xl">{service.service_name}</h3>
                                        <Link href={`/services/${service.service_url_slug}`} className="flex gap-3 items-center">View Service <IoIosArrowForward size={20} /></Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}