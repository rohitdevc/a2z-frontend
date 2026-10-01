import {
  getMetaData,
  getBanner
} from '@/lib/common';

import { getProjects } from '@/lib/projects';

import ProjectsPage from "@/components/pages/projects";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';

export async function generateMetadata() {
  const [meta_data, banner] = await Promise.all([
    getMetaData("Projects"),
    getBanner("Projects"),
  ]);

  return createMetadata({
    meta_data,
    banner,
  });
}

export default async function Page() {
  const [
    projects
  ] = await Promise.all([
    getProjects()
  ])

  return (
    <ProjectsPage
    projects={projects}
    />
  )
}