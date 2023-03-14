import { useAuthenticationStatus } from "@nhost/nextjs";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";

import { Overpass, Oswald, Rubik } from '@next/font/google';
const rubik = Rubik({ subsets: ['latin'] });

const ProtectedRoute: FC<{ children: ReactNode }> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuthenticationStatus();
  const router = useRouter();

  if (isLoading) {
    return (
      <div className={`${rubik.className} flex justify-center align-middle`}>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!isAuthenticated) {
    router.push("/inloggen");
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;