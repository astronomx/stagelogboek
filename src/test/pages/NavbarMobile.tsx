import React from "react";
import Link from "next/link";

export default function Navbar () {
    return(
    <nav className="flex items-center justify-between p-4 bg-white text-green-400 flex-wrap">
      <div className="flex items-center mr-6">
        <Link href="/">
          <p className="font-bold text-2xl">Stagelogboek</p>
        </Link>
      </div>
        
      <button className="navbar-toggler block md:hidden border border-solid border-gray-600 rounded-full px-3 py-2" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="sr-only">Toggle navigation</span>
        <span className="navbar-toggler-icon"></span>
      </button>
        
      <div className="w-full block flex-grow md:flex md:items-center md:w-auto" id="navbarResponsive">
        <div className="text-sm md:flex-grow">
          <Link href="/">
            <p className="block mt-4 md:inline-block md:mt-0 mr-4 xl:px-4 py-2 hover:bg-slate-100 rounded-lg">Home</p>
          </Link>

          <Link href="/">
            <p className="block mt-4 md:inline-block md:mt-0 mr-4 xl:px-4 py-2 hover:bg-slate-100 rounded-lg">Logboek</p>
          </Link>

          <Link href="/">
            <p className="block mt-4 md:inline-block md:mt-0 mr-4 xl:px-4 py-2 hover:bg-slate-100 rounded-lg">Over ons</p>
          </Link>
        </div>

        <div className="text-sm md:flex-row md:items-center">
          <Link href="/">
            <p className="block mt-4 md:inline-block md:mt-0 mr-4 rounded-lg">Log in</p>
          </Link>
          <Link href="/">
            <p className="block mt-4 md:inline-block md:mt-0 mr-4 rounded-lg">Registreer</p>
          </Link>
        </div>
      </div>
    </nav>
    )
}