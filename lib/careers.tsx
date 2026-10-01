"use server";

import { apiGETFetch } from "./api";
import {
    CareerIntroductionProps
} from "@/types/api";

export const getIntroduction = async () => apiGETFetch<CareerIntroductionProps>(`careers/introduction`);