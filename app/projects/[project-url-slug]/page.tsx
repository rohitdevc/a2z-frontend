import { getProject } from "@/lib/projects";
import ProjectPage from "@/components/pages/project";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    "project-url-slug": string
  }>
}

export async function generateMetadata({ params }: PageProps) {
  const { "project-url-slug": project_url_slug } = await params;
  
  const [meta_data] = await Promise.all([
    getProject(project_url_slug),
  ]);

  if(!meta_data) {
    notFound();
  }

  const banner = meta_data;

  return createMetadata({
    meta_data,
    banner,
  });
}

export default async function Page({ params }: PageProps) {
  const { "project-url-slug": project_url_slug } = await params;

  const [
    project
  ] = await Promise.all([
    getProject(project_url_slug)
  ])

  if(!project) {
    notFound();
  }

  return (
    <ProjectPage
    project={project}
    />
  )
}