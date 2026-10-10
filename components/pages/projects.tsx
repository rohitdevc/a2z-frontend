"use client"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

import { ProjectsProps } from "@/types/api"

import { useEffect, useState } from "react";

import { IoIosArrowForward } from "react-icons/io";

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
    const [activeProjectCategory, updateActiveProjectCategory] = useState('All');

    const project_categories: string[] = [];

    projects.forEach((project) => {
        if(!project_categories.includes(project.project_category_name)) {
            project_categories.push(project.project_category_name);
        }
    })

    const [visibleProjects, setVisibleProjects] = useState(projects);
    const [fadingOut, setFadingOut] = useState(false);

    useEffect(() => {
        setFadingOut(true);

        const timeout = setTimeout(() => {
            setVisibleProjects(
                activeProjectCategory === 'All' ? projects : projects.filter((project) => project.project_category_name === activeProjectCategory)
            )

            setFadingOut(false)
        }, 300);

        return () => clearTimeout(timeout);
    }, [activeProjectCategory, projects])

    return (
        <>
        <Header page_name="Projects" />
        <main className="bg-white px-5 sm:px-15 lg:px-20 py-50">
            <section className="flex flex-col gap-20">
                <h1 className="xl:px-20 font-semibold text-3xl md:text-4xl xl:text-5xl text-black leading-15 xl:leading-20">Our approach is scientific and end-user oriented, while providing the highest levels of project management; for:</h1>
                <ul className="flex flex-wrap xl:justify-between gap-10 xl:px-20 text-black font-semibold text-xl">
                    {
                        project_categories && project_categories.length && project_categories.map((project_category, key) => (
                            <li className={`cursor-pointer transition-all duration-300 hover:text-[#FF6600] ${project_category === activeProjectCategory ? 'text-[#FF6600]' : ''}`} key={key} onClick={() => updateActiveProjectCategory(project_category)}>{project_category}</li>
                        ))
                    }
                    <li className={`cursor-pointer transition-all duration-300 hover:text-[#FF6600] ${'All' === activeProjectCategory ? 'text-[#FF6600]' : ''}`} onClick={() => updateActiveProjectCategory('All')}>All</li>
                </ul>
                <div className="w-full text-white grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {
                        visibleProjects.map((project, key) => (
                            <div key={key} className={`h-150 md:h-110 lg:h-150 bg-no-repeat bg-center bg-cover group cursor-pointer transition-opacity duration-300 ${!fadingOut ? 'opacity-100' : 'opacity-0'}`} style={{backgroundImage: `url(${project.project_thumbnail_url})`}} onClick={() => window.location.href=`/projects/${project.project_category_url_slug}/${project.project_url_slug}`}>
                                <div className="flex w-full h-full bg-gradient-to-t from-black/30 to-transparent transition-all duration-500 group-hover:bg-[#FF6600]/60">
                                    <div className="mt-auto px-5 md:px-10 py-10 flex flex-col gap-5">
                                        <h3 className="font-semibold text-3xl">{project.project_name}</h3>
                                        <Link href={`/projects/${project.project_category_url_slug}/${project.project_url_slug}`} className="flex gap-3 items-center">See Project <IoIosArrowForward size={20} /></Link>
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