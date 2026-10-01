"use server";

import { apiGETFetch } from "./api";
import {
    ProjectsProps,
    ProjectProps
} from "@/types/api";

export const getProjects = async () => apiGETFetch<ProjectsProps[]>(`projects`);

export const getProject = async (project_url_slug: string) => apiGETFetch<ProjectProps>(`projects/${project_url_slug}`);