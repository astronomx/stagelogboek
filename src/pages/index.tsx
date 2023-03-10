import Head from "next/head";
import { NhostClient, NhostProvider } from '@nhost/react'

import Navbar from "@/components/Navbar";
import Herobanner from "@/components/Herobanner";

const nhost = new NhostClient({
  subdomain: 'uuqmjnvtneixluiukorf',
  region: 'eu-central-1'
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Stagelogboek</title>
      </Head>
      <div className="absolute z-10 w-full">
        <Navbar />
      </div>
      <div className="relative z-0">
        <Herobanner />
      </div>
    </>
  )
}
