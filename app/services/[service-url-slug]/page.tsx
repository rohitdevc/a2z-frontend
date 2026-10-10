import { getService } from "@/lib/services";
import { getServices } from "@/lib/common";
import ServicePage from "@/components/pages/service";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    "service-url-slug": string
  }>
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const services = await getServices();

  return services.map((service) => ({
    "service-url-slug": service.service_url_slug,
  }));
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