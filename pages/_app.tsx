import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div>
      <Head>
        <title>test</title>
        <link key={1} rel="icon" href="/favicon2.ico" />

        <meta property={"og:url"} content={`${process.env.NEXT_PUBLIC_DOMAIN}${router.asPath}`} />
        <meta property={"og:locale"} content={"ru_RU"}/>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
