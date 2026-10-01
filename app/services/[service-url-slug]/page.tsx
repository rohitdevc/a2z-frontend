import { getService } from "@/lib/services";
import ServicePage from "@/components/pages/service";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    "service-url-slug": string
  }>
}

export async function generateMetadata({ params }: PageProps) {
  const { "service-url-slug": service_url_slug } = await params;
  
  const [meta_data] = await Promise.all([
    getService(service_url_slug),
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
  const { "service-url-slug": service_url_slug } = await params;

  const [
    service
  ] = await Promise.all([
    getService(service_url_slug)
  ])

  if(!service) {
    notFound();
  }

  return (
    <ServicePage
    service={service}
    />
  )
}