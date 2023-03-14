import { useState } from "react";
import { useRouter } from "next/router";
import { useSignInEmailPassword } from "@nhost/nextjs";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const {
    signInEmailPassword,
    isLoading,
    isSuccess,
    needsEmailVerification,
    isError,
    error,
  } = useSignInEmailPassword();

  const handleOnSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    signInEmailPassword(email, password);
  };

  if (isSuccess) {
    router.push("/logboek");
    return null;
  }

  const disableForm = isLoading || needsEmailVerification;

  return (
    <div className="my-4">
      <div className="my-6">
        <h1 className="text-3xl">Sign In</h1>
      </div>

      {needsEmailVerification ? (
        <div className="flex items-center justify-center w-96 h-96">
          <p className="text-center text-[#00A39B]">
            Kijk in je mailbox en klik op de link om
            <br /> je te verifiëren
          </p>
        </div>
      ) : (
        <form onSubmit={handleOnSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1">
              <input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                className="block w-full rounded-md py-2 px-2 border  border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1">
              <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                className="block w-full rounded-md py-2 px-2 border  border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              disabled={disableForm}>
              Sign In
            </button>
          </div>
          {isError ? (
            <p className="text-red-600 text-sm">{error?.message}</p>
          ) : null}
        </form>
      )}
    </div>
  );
}
