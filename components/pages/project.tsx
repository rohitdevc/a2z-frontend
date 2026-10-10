"use client"

import Image from "next/image"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

import { ProjectProps } from "@/types/api"

import { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

import Link from "next/link";

type Props = {
    project: ProjectProps
}

export default function ProjectsPages({
    project,
}: Props) {
    const basePath = process.env.NEXT_PUBLIC_PATH!.replace(/\/$/, "");

    return (
        <>
        <Header page_name="Home" />
        <main className="bg-white px-5 sm:px-15 lg:px-20">
            <div className="relative mt-20 sm:mt-25 md:mt-30 h-[80vh] bg-cover bg-center bg-no-repeat px-5 md:px-20 lg:px-30 xl:px-80 pt-5" style={{backgroundImage: `url(${project.banner_image_url})`}}>
                <div className="absolute inset-0 top-0 bg-black/10 z-1"></div>
                <div className="w-sm xl:w-md bg-white p-15 relative z-2">
                    <h2 className="text-[#FF6600] uppercase text-xs font-semibold">{project.project_category_name}</h2>
                    {
                        project.project_website ? (
                            <Link href={project.project_website} target="_blank" className="text-black font-semibold text-xl py-3 transition-all duration-300 hover:text-[#FF6600]">{project.project_caption}</Link>
                        ) : (
                            <h3 className="text-black font-semibold text-xl py-3">{project.project_caption}</h3>
                        )
                    }
                    <hr className="text-[#e1e1e1]" />
                    <h1 className="text-black text-4xl md:text-5xl font-semibold py-15">{project.project_name}</h1>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col xl:flex-row justify-between w-full text-xs text-black">
                            <span className="font-semibold">Location:</span>
                            <span>{project.project_location}</span>
                        </div>
                        <hr className="text-[#e1e1e1]" />
                        <div className="flex flex-col xl:flex-row justify-between w-full text-xs text-black">
                            <span className="font-semibold">{project.project_category_name != "Hospitality" ? 'Development Size' : 'Rooms'}:</span>
                            <span>{project.project_size}</span>
                        </div>
                        <hr className="text-[#e1e1e1]" />
                        <div className="flex flex-col xl:flex-row justify-between w-full text-xs text-black">
                            <span className="font-semibold">Development Type:</span>
                            <span>{project.project_type}</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
        </>
    )
}