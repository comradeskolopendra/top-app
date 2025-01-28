import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans } from "next/font/google";
import Head from "next/head";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={notoSans.className}>
      <Head>
        <title>title from app</title>
        <link key={1} rel="icon" href="/favicon2.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
