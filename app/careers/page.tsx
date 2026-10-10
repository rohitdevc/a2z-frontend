import {
  getIntroduction
} from '@/lib/careers';

import {
  getMetaData,
  getBanner
} from '@/lib/common';

import AboutUsPage from "@/components/pages/careers";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';

const banner = await getBanner("Careers");

export async function generateMetadata() {
  const meta_data = await getMetaData("Careers");

  return createMetadata({
    meta_data,
    banner
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
    banner={banner}
    introduction={introduction}
    />
  )
}