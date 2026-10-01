"use server";

import { apiGETFetch } from "./api";
import {
    ServiceProps
} from "@/types/api";

export const getService = async (service_url_slug: string) => apiGETFetch<ServiceProps>(`services/${service_url_slug}`);