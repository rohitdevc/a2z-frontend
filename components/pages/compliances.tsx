"use client"

import Image from "next/image"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

import { Banner, CompliancesIntroductionProps, CompliancesProps } from "@/types/api"

import { FaFilePdf } from "react-icons/fa";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

import Link from "next/link";

type Props = {
    banner: Banner,
    introduction: CompliancesIntroductionProps,
    compliances: CompliancesProps[]
}

export default function CompliancesPage({
    banner,
    introduction,
    compliances
}: Props) {
    const basePath = process.env.NEXT_PUBLIC_PATH!.replace(/\/$/, "");

    return (
        <>
        <Header page_name="Compliances" />
        <main className="bg-white">
            {
                banner && (
                    <div className="relative mt-20 sm:mt-25 md:mt-30 h-[80vh]">
                        <div className="bg-no-repeat bg-cover bg-center relative h-full" style={{backgroundImage: `url(${banner.banner_image_url})`}}>
                            <div className="absolute inset-0 top-0 left-0 bg-black/20 z-1"></div>
                            <div className="absolute z-2 top-30 md:top-35 lg:top-20 left-[10%] md:left-[25%] lg:left-1/4 border-4 w-45 h-90 border-[#FF6600] flex flex-col text-white relative z-2 px-5 md:px-7 py-10 font-semibold text-xs">
                                <h3 className="whitespace-nowrap text-base uppercase">{banner.banner_image_caption}</h3>
                                <h4 className="text-3xl sm:text-4xl lg:text-5xl mt-10 md:mt-20 xl:whitespace-nowrap sm:min-w-sm md:min-w-md lg:min-w-lg">{banner.banner_image_description}</h4>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                introduction && (
                <section className="px-10 xl:px-40 py-20 lg:py-30 flex flex-col lg:flex-row gap-10 xl:gap-0 justify-between w-full">
                    <div className="flex flex-col gap-10 w-full lg:w-1/2">
                        <h2 className="uppercase text-[#FF6600] font-medium text-lg tracking-[1px]">Ensuring compliance excellence:</h2>
                        <h1 className="text-black text-4xl lg:text-5xl font-semibold leading-tight">{introduction.introduction_caption}</h1>
                        <p className="leading-loose text-base text-[#666666]">{introduction.introduction_description}</p>
                    </div>
                    <div className="w-full lg:w-1/2 flex lg:justify-end relative">
                        <Image src={introduction.introduction_image_url} alt={introduction.introduction_caption} width={470} height={660} className="z-1" />
                        <div className="bg-repeat absolute -bottom-20 h-[50%] w-full" style={{backgroundImage: `url(${basePath}/images/dots.png)`}}></div>
                    </div>
                </section>
                )
            }
            {
                compliances && compliances.length > 0 && (
                    <section className="px-10 xl:px-40 py-20 flex flex-col gap-10">
                        {
                            compliances.map((compliance, key) => (
                                <Link key={key} href={compliance.investor_pdf_url} target="_blank" className="p-10 w-full flex items-center gap-10 text-black transition-all duration-300 bg-white hover:text-white hover:bg-[#FF6600] shadow-[2px_2px_5px_2px_#00000047] border-[#666666]">
                                    <FaFilePdf className="text-8xl" />
                                    <h2 className="font-semibold text-2xl md:text-4xl">{compliance.investor_caption}</h2>
                                </Link>
                            ))
                        }
                    </section>
                )
            }
        </main>
        <Footer />
        </>
    )
}