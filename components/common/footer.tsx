"use client"

import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Footer() {
    const basePath = process.env.NEXT_PUBLIC_PATH!.replace(/\/$/, "");

    const [privacyPolicyPopUp, updatePrivacyPolicyPopUp] = useState(false);

    const [disclaimerPopUp, updateDisclaimerPopUp] = useState(false);

    const stopBodyScroll = () => {
        document.body.classList.add("overflow-hidden");
    }

    const startBodyScroll = () => {
        document.body.classList.remove("overflow-hidden");
    }

    return (
        ''
    )
}