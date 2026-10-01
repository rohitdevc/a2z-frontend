import {
  getIntroduction,
  getCompliances
} from '@/lib/compliances';

import {
  getMetaData,
  getBanner
} from '@/lib/common';

import CompliancesPage from "@/components/pages/compliances";
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
    introduction,
    compliances
  ] = await Promise.all([
    getIntroduction(),
    getCompliances()
  ])

  return (
    <CompliancesPage
    introduction={introduction}
    compliances={compliances}
    />
  )
}