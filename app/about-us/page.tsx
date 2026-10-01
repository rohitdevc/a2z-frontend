import {
  getIntroduction,
  getAboutUsManagement
} from '@/lib/about-us';

import {
  getMetaData,
  getBanner,
  getClients
} from '@/lib/common';

import AboutUsPage from "@/components/pages/about-us";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';

export async function generateMetadata() {
  const [meta_data, banner] = await Promise.all([
    getMetaData("About Us"),
    getBanner("About Us"),
  ]);

  return createMetadata({
    meta_data,
    banner,
  });
}

export default async function Page() {
  const [
    introduction,
    managements,
    clients
  ] = await Promise.all([
    getIntroduction(),
    getAboutUsManagement(),
    getClients()
  ])

  return (
    <AboutUsPage
    introduction={introduction}
    managements={managements}
    clients={clients}
    />
  )
}