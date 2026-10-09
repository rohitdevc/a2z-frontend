"use client"

import Image from "next/image"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

import { ProjectsProps } from "@/types/api"

import { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

import Link from "next/link";

type Props = {
    projects: ProjectsProps[]
}

export default function ProjectsPages({
    projects,
}: Props) {
    const basePath = process.env.NEXT_PUBLIC_PATH!.replace(/\/$/, "");

    return (
        <>
        <Header page_name="Home" />
        <main className="bg-white px-5 sm:px-15 lg:px-20">

        </main>
        <Footer />
        </>
    )
}