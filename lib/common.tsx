"use server";

import { apiGETFetch } from "./api";
import { getAuthToken } from './auth';
import {
    MetaData,
    Banner,
    ClientProps,
    ServicesProps
} from "@/types/api";

export const buildHeaders = async () => {
    const { access_token } = await getAuthToken();
    
    return {
        Authorization: `Bearer ${access_token}`
    };
}

export const getMetaData = async (page_name: string) => apiGETFetch<MetaData>(`meta-data/${page_name}`);

export const getBanner = async (page_name: string) => apiGETFetch<Banner>(`banner/${page_name}`);

export const getClients = async () => apiGETFetch<ClientProps[]>(`clients`);

export const getServices = async () => apiGETFetch<ServicesProps[]>(`services`);