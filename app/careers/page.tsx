import {
  getIntroduction
} from '@/lib/careers';

import {
  getMetaData,
  getBanner
} from '@/lib/common';

import AboutUsPage from "@/components/pages/careers";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';

export async function generateMetadata() {
  const [meta_data, banner] = await Promise.all([
    getMetaData("Careers"),
    getBanner("Careers"),
  ]);

  return createMetadata({
    meta_data,
    banner,
  });
}

export default async function Page() {
  const [
    introduction
  ] = await Promise.all([
    getIntroduction()
  ])

  return (
    <AboutUsPage
    introduction={introduction}
    />
  )
}