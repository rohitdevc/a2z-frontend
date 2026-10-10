"use client"

import Image from "next/image"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

import { ClientProps, AboutIntroductionProps, AboutManagementProps } from "@/types/api"

import { useState } from "react";

import { IoIosArrowForward } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

import nl2br from "nl2br";
import parser from 'html-react-parser';

type Props = {
    introduction: AboutIntroductionProps
    managements: AboutManagementProps[]
    clients: ClientProps[]
}

type ClientData = {
    client_category_name: string;
    clients: {
        client_name: string;
        client_logo: string;
    }[]
}

export default function AboutUsPage({
    introduction,
    managements,
    clients,
}: Props) {
    const basePath = process.env.NEXT_PUBLIC_PATH!.replace(/\/$/, "");

    const clientsMap = new Map<string, ClientData>();

    clients.forEach((client) => {
        const categoryName = client.category_name;

        if(!clientsMap.has(categoryName)) {
            clientsMap.set(categoryName, {
                client_category_name: categoryName,
                clients: [],
            })
        }

        clientsMap.get(categoryName)!.clients.push({
            client_name: client.client_name,
            client_logo: client.client_logo_url
        })
    })

    const clients_data: ClientData[] = Array.from(clientsMap.values());

    const [managementPopUp, updateManagementPopUp] = useState(false);
    const [activeManagement, updateActiveManagement] = useState({
        management_name: '',
        management_designation: '',
        management_description: ''
    });

    const showManagementPopUp = (key: number) => {
        updateManagementPopUp(true);

        updateActiveManagement(managements[key]);
    }

    const closeManagementPopUp = () => {
        updateManagementPopUp(false);
    }

    return (
        <>
        <Header page_name="About" />
        <main className="bg-white px-5 sm:px-15 lg:px-20">
            <section className="mt-20 sm:mt-25 md:mt-30 xl:px-20 py-20 lg:py-30 flex flex-col md:flex-row gap-10 md:gap-40 lg:gap-50">
                <div className="md:w-[10%]">
                    <div className="bg-[#FF6600] h-[3px] w-30"></div>
                </div>
                <h1 className="w-full md:w-[80%] text-black text-4xl lg:text-6xl font-semibold leading-tight max-w-2xl">We make dreams a reality.</h1>
            </section>
            {
                introduction && (
                <section className="xl:px-20 py-10 flex flex-col md:flex-row gap-10 md:gap-40 lg:gap-50">
                    <div className="md:w-[10%] flex flex-col gap-7 uppercase">
                        <div className="bg-[#FF6600] h-[3px] w-30"></div>
                        <h2 className="text-[#999999] font-semibold text-xl tracking-wide">About Us</h2>
                    </div>
                    <div className="w-full md:w-[80%] flex flex-col gap-5">
                        <h3 className="text-xl lg:text-3xl font-semibold leading-tight"><b>{introduction.introduction_caption}</b></h3>
                        <p className="text-xl md:text-2xl leading-12 tracking-wide">{parser(nl2br(introduction.introduction_description))}</p>
                    </div>
                </section>
                )
            }
            {
                clients && clients.length > 0 && (
                    <section className="xl:px-20 py-10 lg:py-50 flex flex-col md:flex-row gap-10 md:gap-40 lg:gap-50 bg-repeat" style={{backgroundImage: `url(${basePath}/images/dots.png)`}}>
                        <div className="md:w-[10%] flex flex-col gap-7 uppercase">
                            <div className="bg-[#FF6600] h-[3px] w-30"></div>
                            <h2 className="text-[#999999] font-semibold text-xl tracking-wide">Our Clients</h2>
                        </div>
                        <div className="w-full md:w-[80%] flex flex-col gap-20">
                            {
                                clients_data.map((client, key) => (
                                    <div className="flex flex-col gap-10" key={key}>
                                        <h3 className="text-black text-2xl font-semibold">{client.client_category_name}</h3>
                                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
                                        {
                                            client.clients && client.clients.length > 0 && client.clients.map((client_info, sub_key) => (
                                                <div key={sub_key} className="bg-[#fafafa] border border-[#e5e5e5]">
                                                    <div className="flex justify-center items-center h-20">
                                                        <Image src={client_info.client_logo} alt={client_info.client_name} width={140} height={100} className="mx-auto w-30" />
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </section>
                )
            }
            {
                managements && managements.length && (
                <section className="xl:px-20 py-10 flex flex-col md:flex-row gap-10 md:gap-40 lg:gap-50">
                    <div className="md:w-[10%] flex flex-col gap-7 uppercase">
                        <div className="bg-[#FF6600] h-[3px] w-30"></div>
                        <h2 className="text-[#999999] font-semibold text-xl tracking-wide">Our Management</h2>
                    </div>
                    <div className="w-full md:w-[80%] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                        {
                            managements.map((management, key) => (
                                <div className="bg-[#FF6600] h-100 relative text-white flex group cursor-pointer" key={key}>
                                    <div className="w-full h-3/4 bg-gradient-to-t from-black/70 to-transparent absolute bottom-0 transition-opacity duration-300 group-hover:opacity-0 opacity-100"></div>
                                    <div className="mt-auto px-10 py-10 relative font-semibold flex flex-col gap-5">
                                        <h3 className="text-2xl">{management.management_name}</h3>
                                        <span className="flex items-center gap-5" onClick={() => showManagementPopUp(key)}>Know More <IoIosArrowForward size={25} /></span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
                )
            }
        </main>
        <section className={`fixed top-0 w-full h-screen overflow-y-auto bg-black/30 z-5 px-3 flex justify-center items-center transition-all duration-300 ${managementPopUp ? 'scale-x-100 scale-y-100' : 'scale-x-0 scale-y-0'}`}>
            <div className="bg-white w-md md:w-xl p-5 relative">
                <TfiClose size={20} className="absolute right-2 top-2 cursor-pointer text-[#FF6600]" onClick={() => closeManagementPopUp()} />
                <div className="flex flex-col gap-2">
                    <h3 className="text-black text-3xl font-semibold">{activeManagement.management_name}</h3>
                    <h4 className="text-black text-lg font-semibold">{activeManagement.management_designation}</h4>
                    <hr />
                    <p className="leading-8 tracking-wide">{parser(nl2br(activeManagement.management_description))}</p>
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}