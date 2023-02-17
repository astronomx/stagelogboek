import React from "react";
import Link from "next/link";

export default function Navbar () {
    return(
    <nav className="flex items-center justify-between p-4 bg-white text-green-400">
        <div className="flex items-center">
            <Link href="/">
                <p className="font-bold text-2xl">Stagelogboek</p>
            </Link>
        </div>
        
        <div className="flex items-center justify-center">
            <Link href="/">
              <p className="px-4 py-2 hover:bg-slate-100 rounded-lg">Home</p>
            </Link>

            <Link href="/">
              <p className="px-4 py-2 hover:bg-slate-100 rounded-lg">Logboek</p>
            </Link>

            <Link href="/">
              <p className="px-4 py-2 hover:bg-slate-100 rounded-lg">Over ons</p>
            </Link>
        </div>

        <div className="flex flex-row items-center">
            <Link href="/">
                <p className="px-4 py-2 rounded-lg ml-4">Log in</p>
            </Link>
            <p>|</p>
            <Link href="/">
                <p className="px-4 py-2 rounded-lg">Registreer</p>
            </Link>
        </div>
    </nav>
    )
}