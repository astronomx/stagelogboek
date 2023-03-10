import Head from "next/head";
import { NhostClient, NhostProvider } from '@nhost/react'

import Navbar from "@/components/Navbar";
import Herobanner from "@/components/Herobanner";

const nhost = new NhostClient({
  backendUrl: process.env.NEXT_PUBLIC_NHOST_BACKEND_URL || '',
})

export default function Home() {
  return (
    <NhostProvider nhost={nhost}>
      <Head>
        <title>Home - Stagelogboek</title>
      </Head>
      <div className="absolute z-10 w-full">
        <Navbar />
      </div>
      <div className="relative z-0">
        <Herobanner />
      </div>
    </NhostProvider>
  )
}
