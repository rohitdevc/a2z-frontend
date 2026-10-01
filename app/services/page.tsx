import {
  getMetaData,
  getBanner,
  getServices
} from '@/lib/common';

import ServicesPage from "@/components/pages/services";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';

export async function generateMetadata() {
  const [meta_data, banner] = await Promise.all([
    getMetaData("Services"),
    getBanner("Services"),
  ]);

  return createMetadata({
    meta_data,
    banner,
  });
}

export default async function Page() {
  const [
    services
  ] = await Promise.all([
    getServices()
  ])

  return (
    <ServicesPage
    services={services}
    />
  )
}