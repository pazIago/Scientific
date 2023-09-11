import Head from "next/head";
import "./globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({ subsets: ["latin"], fallback: ["sans-serif"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Scientific Linguagem - Precisamente o que você quer dizer</title>
      </Head>
      <main className={montserrat.className}>
        <Component {...pageProps} />
        <Analytics />
        
      </main>
    </>
  );
}
