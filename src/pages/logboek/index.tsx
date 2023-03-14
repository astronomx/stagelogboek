import Head from "next/head";

import Navbar from "@/components/Navbar";
import Logs from "@/components/Logs";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Logboek() {

    return(
        <div>
            <ProtectedRoute>
                <Head>
                    <title>Logboek</title>
                </Head>
                <div>
                    <Navbar />
                </div>
                <div>
                    <Logs />
                </div>
            </ProtectedRoute>
        </div>
    )
}