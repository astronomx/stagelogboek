import React from "react";
import Link from "next/link";
import Dropdown from "@/components/elements/Dropdown";
import { Overpass, Oswald, Rubik } from '@next/font/google';

const rubik = Rubik({ subsets: ['latin'] });

export default function Navbar() {

    return(
      <div className={rubik.className}>
        <nav className="flex items-center justify-between p-4 bg-white text-green-400 flex-wrap drop-shadow-2xl">
          <div className="sm:flex flex-row xl:flex items-center mr-6">
            <Link href="/">
              <p className="font-bold text-2xl">Stagelogboek</p>
            </Link>
            <div className="sm:flex justify-center ml-36 md:hidden lg:hidden xl:hidden">
              <Dropdown />
            </div>
          </div>
          
          <div className="w-full block flex-grow md:flex justify-center md:items-center md:w-auto" id="navbarResponsive">
            <div className="text-sm md:flex justify-center lg:flex justify-center xl:flex justify-center">
              <Link href="/">
                <p className="sm:hidden md:flex lg:flex xl:flex px-6 py-2 hover:bg-slate-100 text-lg rounded-lg hover:cursor-pointer">Home</p>
              </Link>
        
              <Link href="/logboek">
                <p className="sm:hidden md:flex lg:flex xl:flex px-6 py-2 hover:bg-slate-100 text-lg rounded-lg hover:cursor-pointer">Logboek</p>
              </Link>
        
              <Link href="/">
                <p className="sm:hidden md:flex lg:flex xl:flex px-6 py-2 hover:bg-slate-100 text-lg rounded-lg hover:cursor-pointer">Hoe het werkt</p>
              </Link>
            </div>
          </div> 

          <div className="text-sm items-center xl:flex flex-row mr-5">
            <div className="sm:flex flex-row items-center">
              <Link href="/inloggen">
                <p className="block mr-2 rounded-lg hover:cursor-pointer">Log in</p>
              </Link>
              <p>|</p>
              <Link href="/registreren">
                <p className="block ml-2 rounded-lg hover:cursor-pointer">Registreer</p>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    )
}