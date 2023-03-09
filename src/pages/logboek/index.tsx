import Head from "next/head";

import Navbar from "@/components/Navbar";
import Logs from "@/components/Logs";

export default function Logboek() {

    return(
        <div>
            <Head>
                <title>Logboek</title>
            </Head>
            <div>
                <Navbar />
            </div>
            <div>
                <Logs />
            </div>
        </div>
    )
}