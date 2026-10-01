"use server";

import { apiGETFetch } from "./api";
import {
    HomeIntroProps,
    HomeSliderProps,
    HomeMilestoneProps
} from "@/types/api";

export const getHomeSliders = async () => apiGETFetch<HomeSliderProps[]>(`home/slider`);

export const getIntroduction = async () => apiGETFetch<HomeIntroProps>(`home/introduction`);

export const getHomeMilestones = async () => apiGETFetch<HomeMilestoneProps[]>(`home/milestones`);