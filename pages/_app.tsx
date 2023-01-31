import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element | null {
  const [isSSR, setSSR] = useState(true);
  useEffect(() => {
    setSSR(false);
  }, []);
  if (isSSR) return null;
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="flex gap-6 sm:gap-20">
        <div className="h-[92vh] sm:w-[20rem] overflow-hidden xl:hover:overflow-auto">
          <Sidebar />
        </div>
        <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}
