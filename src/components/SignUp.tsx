import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSignUpEmailPassword } from '@nhost/nextjs'
import Link from 'next/link'
import Image from 'next/image'

import Navbar from '@/components/Navbar';
import LoadingAnimation from "@/components/elements/LoadingAnimation";
import Wave from "public/images/wave.png";
import Graph from "public/images/shapes/graph.png";
import Graph1 from "public/images/shapes/graph1.png";
import Graph2 from "public/images/shapes/graph3.png";
import Graph3 from "public/images/shapes/graph5.png";

import { Overpass, Oswald, Rubik } from "@next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

const SignUp = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const { signUpEmailPassword, 
    isLoading, 
    isSuccess, 
    needsEmailVerification, 
    isError, 
    error } = useSignUpEmailPassword()

  const handleOnSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    signUpEmailPassword(email, password, {
        displayName: `${firstName} ${lastName}`.trim(),
        metadata: {
            firstName,
            lastName
        },
    })
  }

  if (isSuccess) {
    router.push('/logboek')
    return null
  }

  const disableForm = isLoading || needsEmailVerification

  return (
    <div className={rubik.className}>
        <Navbar />
      <div className="flex justify-center mt-28">
        <div className="h-[47vh] w-[35vw ] bg-opacity-24 backdrop-filter backdrop-blur-lg drop-shadow-xl rounded-2xl absolute z-10">
          {needsEmailVerification ? (
            <div className="flex items-center justify-center w-96 h-96">
              <p className="text-center text-[#00A39B]">
                Kijk in je mailbox en klik op de link om<br /> je te verifiëren
              </p>
            </div>
          ) : (
            <form onSubmit={handleOnSubmit}>
              <div className="flex justify-center p-14 text-[#00A39B]">
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-row space-x-5">
                    <div className="flex flex-col">
                      <label htmlFor="firstname">Voornaam</label>
                      <input
                        name="firstname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        disabled={disableForm}
                        className="border-2 border-[#00A39B] text-black rounded-lg h-10 p-2 focus:drop-shadow-lg outline-none"
                        autoComplete="off"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="lastname">Achternaam</label>
                      <input
                        name="lastname"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        disabled={disableForm}
                        className="border-2 border-[#00A39B] text-black rounded-lg h-10 p-2 focus:drop-shadow-lg outline-none"
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <div className="flex flex-col">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={disableForm}
                        className="border-2 border-[#00A39B] text-black w-86 rounded-lg h-10 p-2 focus:drop-shadow-lg outline-none"
                        autoComplete="off"
                        required
                      />
                    </div>
                    {isError ? (
                      <p className="text-red-600 text-sm">{error?.message}</p>
                    ) : null}
                    <div className="flex flex-col">
                      <label htmlFor="password">Wachtwoord</label>
                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={disableForm}
                        className="border-2 border-[#00A39B] text-black w-86 rounded-lg h-10 p-2 focus:drop-shadow-lg outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row-reverse items-center text-[#00A39B]">
                <p className="flex justify-end mr-24">
                  Heb je al een account?{" "}
                  <Link href="/inloggen">
                    <a className="underline hover:text-[#008492] pl-1">
                      Log in
                    </a>
                  </Link>
                </p>
                <button
                  type="submit"
                  disabled={disableForm}
                  className="w-36 h-8 mr-10 bg-[#00A39B] text-white rounded-lg"
                >
                  {isLoading ? (
                    <LoadingAnimation isLoading={isLoading} />
                  ) : (
                    "Maak account"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
        <div className="relative z-0">
            <Image src={Graph} alt="graph" className="pl-48" />
            <Image src={Graph1} alt="graph" className="pr-60" />
        </div>
        <Image src={Graph3} alt="graph" className="pl-20" />
        <Image src={Graph2} alt="graph" className=" pl-48" />        

      </div>
      <Image src={Wave} alt="wave" className="fixed bottom-0 w-full h-48" />
    </div>
  )
}

export default SignUp