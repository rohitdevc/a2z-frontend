"use server";

import { apiGETFetch } from "./api";
import {
    AwardsProps
} from "@/types/api";

export const getAwards = async () => apiGETFetch<AwardsProps[]>(`awards`);