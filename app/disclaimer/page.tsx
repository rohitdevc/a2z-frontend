import {
  getMetaData,
  getBanner
} from '@/lib/common';

import DisclaimerPage from "@/components/pages/disclaimer";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';

export async function generateMetadata() {
  const [meta_data, banner] = await Promise.all([
    getMetaData("Disclaimer"),
    getBanner("Home"),
  ]);

  return createMetadata({
    meta_data,
    banner,
  });
}

export default async function Page() {
  return (
    <DisclaimerPage
    />
  )
}