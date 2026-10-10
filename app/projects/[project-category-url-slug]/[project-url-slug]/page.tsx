import { getProject, getProjects } from "@/lib/projects";
import ProjectPage from "@/components/pages/project";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    "project-category-url-slug": string,
    "project-url-slug": string
  }>
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project) => ({
    "project-category-url-slug": project.project_category_url_slug,
    "project-url-slug": project.project_url_slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { "project-category-url-slug": project_category_url_slug, "project-url-slug": project_url_slug } = await params;
  
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