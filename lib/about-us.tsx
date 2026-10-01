"use server";

import { apiGETFetch } from "./api";
import {
    AboutIntroductionProps,
    AboutManagementProps
} from "@/types/api";

export const getIntroduction = async () => apiGETFetch<AboutIntroductionProps>(`about-us/introduction`);

export const getAboutUsManagement = async () => apiGETFetch<AboutManagementProps[]>(`about-us/management`);