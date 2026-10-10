"use client"

import Image from "next/image"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

import { EnquiryFormErrors, EnquiryForm } from "@/types/forms";

import { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

import Link from "next/link";

import Loader from "@/components/utils/loader";

import { isEmail, isEmpty } from 'validator';

export default function ContactUsPage() {
    const basePath = process.env.NEXT_PUBLIC_PATH!.replace(/\/$/, "");

    const [showLoader, updateLoader] = useState(false);

    const [ip, setIp] = useState("");
    const [errors, setErrors] = useState<EnquiryFormErrors>({});

    const [enquiryForm, setEnquiryForm] = useState<EnquiryForm>({
        enquiry_name: '',
        enquiry_email_address: '',
        enquiry_message: '',
        ip_address: ip,
        referral_url: ''
    });

    useEffect(() => {
        async function getIp() {
        const res = await fetch(basePath + "/api/ip");
        const data = await res.json();
        setIp(data.ip);
        }
    
        getIp();
    }, []);

    const handleEnquiryFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setEnquiryForm(prev => ({ ...prev, [name]: value}));
        
        setErrors(prev => ({ ...prev, [name]: undefined}));
    }

    const enquiryNameRef = useRef<HTMLInputElement>(null);
    const enquiryEmailAddressRef = useRef<HTMLInputElement>(null);
    const enquiryMessageRef = useRef<HTMLTextAreaElement>(null);

    const refMap: Record<string, React.RefObject<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null>> = {
        enquiry_name: enquiryNameRef,
        enquiry_email_address: enquiryEmailAddressRef,
        enquiry_message: enquiryMessageRef
    }

    const enquiryFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(isEmpty(enquiryForm.enquiry_name)) {
            setErrors({enquiry_name: 'Please enter your name'});
            enquiryNameRef.current?.focus();
            return;
        }

        if(isEmpty(enquiryForm.enquiry_email_address)) {
            setErrors({enquiry_email_address: 'Please enter your email address'});
            enquiryEmailAddressRef.current?.focus();
            return;
        } else if(!isEmail(enquiryForm.enquiry_email_address)) {
            setErrors({enquiry_email_address: 'Please enter a valid email address'});
            enquiryEmailAddressRef.current?.focus();
            return;
        }

        if(isEmpty(enquiryForm.enquiry_message)) {
            setErrors({enquiry_message: 'Please enter your message'});
            enquiryMessageRef.current?.focus();
            return;
        }

        updateLoader(true);

        await new Promise((resolve) => requestAnimationFrame(resolve));

        try {
          const payload = {
            ...enquiryForm,
            ip_address: ip,
            referral_url: window.location.href
          };

          const response = await fetch(basePath + "/api/enquiry-form", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
              "Content-Type": "application/json"
            }
          })

          if (!response.ok) {
            const err = await response.json();

            if(err.error) {
              let error_response = JSON.parse(err.error);

              if(typeof error_response === "object" && error_response !== null && !Array.isArray(error_response)) {
                error_response = Object.values(error_response);

                const { path, msg } = error_response[0][0];

                const error_message = msg;
                const error_path = path;

                if(refMap[error_path]?.current) {
                  
                  refMap[error_path]?.current.focus();
                }
                setErrors({[error_path]: error_message});
              }

              return false;
            }
          }

          const data = await response.json();

          if(data.success) {
            setEnquiryForm({
                enquiry_name: '',
                enquiry_email_address: '',
                enquiry_message: '',
                ip_address: '',
                referral_url: window.location.href
            })

            if(!data.result) return false;

            alert('Thank You! We will contact you soon.');
          }
        } catch(error) {
          console.error(error);
        } finally {
          updateLoader(false);
        }
    }

    return (
        <>
        <Header page_name="Contact" />
        <main className="bg-white px-5 sm:px-15 lg:px-20">
            <section className="mt-20 sm:mt-25 md:mt-30 xl:px-20 py-20 lg:py-30 flex flex-col md:flex-row gap-10 md:gap-40 lg:gap-50">
                <div className="md:w-[10%]">
                    <div className="bg-[#FF6600] h-[3px] w-30"></div>
                </div>
                <h1 className="w-full md:w-[80%] text-black text-4xl lg:text-6xl font-semibold">Contact Us</h1>
            </section>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24963.851630586545!2d73.86361770288781!3d18.52705089976525!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9c1f91e0b4d06b8!2sA2Z%20Online%20Services%20Pvt.%20Ltd%20emerson!5e0!3m2!1sen!2sin!4v1603913026939!5m2!1sen!2sin" className="w-full h-110"></iframe>
            <section className="xl:px-20 py-10 md:py-25 xl:py-50 flex flex-col md:flex-row gap-10 md:gap-40 lg:gap-50">
                <div className="md:w-[10%] flex flex-col gap-7 uppercase">
                    <div className="bg-[#FF6600] h-[3px] w-30"></div>
                    <h2 className="text-[#999999] font-semibold text-xl tracking-wide uppercase">Get in touch</h2>
                </div>
                <div className="w-full md:w-[80%] flex flex-col xl:flex-row justify-between gap-15">
                    <div className="flex flex-col gap-7 w-full xl:w-1/2">
                        <h3 className="text-4xl text-[#ccc]"><span className="text-black font-semibold">Pune,</span> India</h3>
                        <p className="font-semibold text-xl text-[#999] leading-10">
                            Tech Park One, Tower 'E', Next to Don Bosco School, Off Airport Road, Yerwada, Pune - 411 006
                            <br />
                            CIN: U74140PN2000PTC139217
                        </p>
                        <h4><span className="text-black font-semibold">Email:</span> <Link href="mailto:secretarial@panchshil.com" className="text-[#FF6600]">secretarial@panchshil.com</Link></h4>
                    </div>
                    <div className="flex flex-col gap-7 w-full xl:w-1/2">
                        <h3 className="text-[#999] font-semibold text-lg">Contact Us</h3>
                        <Link href="tel:+912066473200" className="text-4xl text-black transition-all duration-300 hover:text-[#FF6600]">+91 20 66473200</Link>
                    </div>
                </div>
            </section>
            <section className="xl:px-20 py-10 flex flex-col md:flex-row gap-10 md:gap-40 lg:gap-50">
                <div className="md:w-[10%] flex flex-col gap-7 uppercase">
                    <div className="bg-[#FF6600] h-[3px] w-30"></div>
                    <h2 className="text-[#999999] font-semibold text-xl tracking-wide uppercase">Enquire Now</h2>
                </div>
                <form className="w-full md:w-[80%] flex flex-col gap-7" autoComplete="off" onSubmit={enquiryFormSubmit}>
                    <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-5 justify-between">
                        <div className="relative w-full sm:w-1/2 md:w-full lg:w-1/2">
                            <input type="text" name="enquiry_name" placeholder="Name" onChange={handleEnquiryFormChange} value={enquiryForm.enquiry_name} ref={enquiryNameRef} className="outline-none transition-all duration-300 focus:border-[#ff6600] focus:bg-white border-1 border-[#d1d1d1] bg-[#f6f6f6] w-full py-4 px-3 text-black" />
                            <div className="text-black h-1 pt-1">
                                <span className={`text-xs transition-all duration-200 ${errors.enquiry_name ? "opacity-100" : "opacity-0"}`}>{errors.enquiry_name}</span>
                            </div>
                        </div>
                        <div className="relative w-full sm:w-1/2 md:w-full lg:w-1/2">
                            <input type="email" name="enquiry_email_address" placeholder="Email" onChange={handleEnquiryFormChange} value={enquiryForm.enquiry_email_address} ref={enquiryEmailAddressRef} className="outline-none transition-all duration-300 focus:border-[#ff6600] focus:bg-white border-1 border-[#d1d1d1] bg-[#f6f6f6] w-full py-4 px-3 text-black" />
                            <div className="text-black h-1 pt-1">
                                <span className={`text-xs transition-all duration-200 ${errors.enquiry_email_address ? "opacity-100" : "opacity-0"}`}>{errors.enquiry_email_address}</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full">
                        <textarea placeholder="Message" name="enquiry_message" onChange={handleEnquiryFormChange} value={enquiryForm.enquiry_message} ref={enquiryMessageRef} className="resize-none h-60 outline-none transition-all duration-300 focus:border-[#ff6600] focus:bg-white border-1 border-[#d1d1d1] bg-[#f6f6f6] w-full py-4 px-3 text-black"></textarea>
                        <div className="text-black h-1 pt-1">
                            <span className={`text-xs transition-all duration-200 ${errors.enquiry_message ? "opacity-100" : "opacity-0"}`}>{errors.enquiry_message}</span>
                        </div>
                    </div>
                    <button className="transition-all duration-300 bg-[#ff6600] text-black hover:bg-black hover:text-white cursor-pointer uppercase w-fit font-semibold py-4 px-10">Send Message</button>
                </form>
            </section>
        </main>
        <Footer />
        <Loader showLoader={showLoader} />
        </>
    )
}