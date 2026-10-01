"use server";

import { apiGETFetch } from "./api";
import {
    CompliancesIntroductionProps,
    CompliancesProps
} from "@/types/api";

export const getIntroduction = async () => apiGETFetch<CompliancesIntroductionProps>(`compliances/introduction`);

export const getCompliances = async () => apiGETFetch<CompliancesProps[]>(`compliances`);