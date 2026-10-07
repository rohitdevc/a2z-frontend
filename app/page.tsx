import {
  getIntroduction,
  getHomeSliders,
  getHomeMilestones
} from '@/lib/home';

import {
  getMetaData,
  getBanner,
  getClients,
  getServices
} from '@/lib/common';

import HomePage from "@/components/pages/home";
import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';

export async function generateMetadata() {
  const [meta_data, banner] = await Promise.all([
    getMetaData("Home"),
    getBanner("Home"),
  ]);

  return createMetadata({
    meta_data,
    banner,
  });
}

export default async function Page() {
  const [
    introduction,
    sliders,
    milestones,
    clients,
    services
  ] = await Promise.all([
    getIntroduction(),
    getHomeSliders(),
    getHomeMilestones(),
    getClients(),
    getServices()
  ])

  return (
    <HomePage
    sliders={sliders}
    introduction={introduction}
    milestones={milestones}
    clients={clients}
    services={services}
    />
  )
}