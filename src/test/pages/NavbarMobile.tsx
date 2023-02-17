import React from "react";
import Link from "next/link";
import Dropdown from "@/components/elements/Dropdown";

export default function Navbar () {

    return(
    <nav className="flex items-center justify-between p-4 bg-white text-green-400 flex-wrap">
        <div className="flex items-center mr-6">
          <Link href="/">
            <p className="font-bold text-2xl">Stagelogboek</p>
          </Link>
        </div>
          
        <div className="w-full block flex-grow md:flex md:items-center md:w-auto" id="navbarResponsive">
          <div className="text-sm md:flex-grow xl:flex justify-center">
            <div className="xl:hidden">
                <Dropdown />
            </div>
            <Link href="/">
              <p className="sm:flex hidden xl:px-6 py-2 hover:bg-slate-100 text-lg rounded-lg">Home</p>
            </Link>
        
            <Link href="/">
              <p className="sm:flex hidden xl:px-6 py-2 hover:bg-slate-100 text-lg rounded-lg">Logboek</p>
            </Link>
        
            <Link href="/">
              <p className="sm:flex hidden xl:px-6 py-2 hover:bg-slate-100 text-lg rounded-lg">Over ons</p>
            </Link>
          </div>
        </div> 

        <div className="text-sm items-center xl:flex flex-row mr-5">
            <div className="sm:flex flex-row items-center">
                <Link href="/">
                    <p className="block rounded-lg">Log in</p>
                </Link>
                <p>|</p>
                <Link href="/">
                    <p className="block rounded-lg">Registreer</p>
                </Link>
            </div>
        </div>
    </nav>
    )
}