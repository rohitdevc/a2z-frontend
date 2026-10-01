import {
  getAwards
} from '@/lib/awards';

import {
  getMetaData,
  getBanner
} from '@/lib/common';

import AwardPage from "@/components/pages/awards";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';

export async function generateMetadata() {
  const [meta_data, banner] = await Promise.all([
    getMetaData("Awards"),
    getBanner("Awards"),
  ]);

  return createMetadata({
    meta_data,
    banner,
  });
}

export default async function Page() {
  const [
    awards
  ] = await Promise.all([
    getAwards()
  ])

  return (
    <AwardPage
    awards={awards}
    />
  )
}