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

const banner = await getBanner('Compliances');

export async function generateMetadata() {
  const meta_data = await getMetaData("Compliances")

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
    banner={banner}
    introduction={introduction}
    compliances={compliances}
    />
  )
}