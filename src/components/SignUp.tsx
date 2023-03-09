import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { useSignUpEmailPassword } from '@nhost/nextjs';
import Link from 'next/link';
import Image from 'next/image';

import LoadingAnimation from './elements/LoadingAnimation';
import Wave from 'public/images/wave.png';

import { Overpass, Oswald, Rubik } from '@next/font/google';

const rubik = Rubik({ subsets: ['latin'] });

const SignUp = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()
    const { signUpEmailPassword, isSuccess, needsEmailVerification, isError, error } = useSignUpEmailPassword()

//   const handleOnSubmit = async (e: FormEvent<HTMLInputElement>) => {
//     // React.FormEvent
//     e.preventDefault()

//     await signUpEmailPassword(email, password, {
//       displayName: `${firstName} ${lastName}`.trim(),
//       metadata: {
//         firstName,
//         lastName
//       }
//     })
//   }
    const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      setIsLoading(true);
      setIsLoading(false);
    
      try {
        await signUpEmailPassword(email, password, {
          displayName: `${firstName} ${lastName}`.trim(),
              metadata: {
                firstName,
                lastName
              }
          })
      } catch (error) {
          console.error(error)
      }
    }

    if (isSuccess) {
      router.push('/')
      return null
    }

    const disableForm = isLoading || needsEmailVerification

    return(
        <div className={rubik.className}>
            <div className="flex justify-center mt-20">
                <div className="bg-white h-[47vh] w-[35vw] rounded-xl drop-shadow-2xl">
                  {/* <div className={styles['logo-wrapper']}>
                    <Image src="/logo.svg" alt="logo" layout="fill" objectFit="contain" />
                  </div> */}
                  {needsEmailVerification ? (
                    <div className="flex items-center justify-center">
                        <p className="text-center text-green-400">
                          Kijk in je mailbox en klik op de link om je te verifiëren
                        </p>
                    </div>
                  ) : (
                    <form onSubmit={handleOnSubmit}>
                        <div className="flex justify-center p-14">
                            <div className="flex flex-col space-y-4">
                                <div className="flex flex-row space-x-5">
                                    <div className="flex flex-col">
                                        <label htmlFor="firstname">Voornaam</label>
                                        <input
                                            name="firstname"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            disabled={disableForm}
                                            className="border-2 border-green-300 rounded-lg h-10 p-2 focus:drop-shadow-lg outline-none"
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
                                            className="border-2 border-green-300 rounded-lg h-10 p-2 focus:drop-shadow-lg outline-none"
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
                                            className="border-2 border-green-300 w-86 rounded-lg h-10 p-2 focus:drop-shadow-lg outline-none"
                                            autoComplete="off"
                                            required
                                        />
                                    </div>
                                    {isError ? <p className="text-red-600 text-sm">{error?.message}</p> : null}
                                    <div className="flex flex-col">
                                        <label htmlFor="password">Wachtwoord</label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            disabled={disableForm}
                                            className="border-2 border-green-300 w-86 rounded-lg h-10 p-2 focus:drop-shadow-lg outline-none"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row-reverse items-center">
                            <p className="flex text-green-400 justify-end mr-28">
                            Heb je al een account?{' '}
                                <Link href="/inloggen">
                                  <a className="underline text-green-500 hover:text-green-700 pl-1">Log in</a>
                                </Link>
                            </p>
                            <button type="submit" disabled={disableForm} className="w-36 h-8 mr-20 bg-green-400 text-white rounded-lg">
                              {isLoading ? <LoadingAnimation isLoading={isLoading} /> : 'Maak account'}
                            </button>
                        </div>
                    </form>
                  )}
                </div>
            </div>
            <div className="flex justify-center mt-48">
                <Image src={Wave} alt="wave" className="w-full h-60 " />
            </div>
        </div>
    )
}

export default SignUp