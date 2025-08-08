import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";

import ym, {YMInitializer} from "react-yandex-metrika";

Router.events.on("routeChangeComplete", (url: string) => {
    if (typeof window !== undefined) {
        ym("hit", url);
    }
})

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>Title soslo</title>
        <link key={1} rel="icon" href="/favicon2.ico" />

        <meta property={"og:url"} content={`${process.env.NEXT_PUBLIC_DOMAIN}${router.asPath}`} />
        <meta property={"og:locale"} content={"ru_RU"}/>

        <link rel="preconnect" href="https://mc.yandex.ru"/>

      </Head>

      <YMInitializer
          accounts={[]}
          options={{webvisor: true, defer: true}}
          version={"2"}
      />

      <Component {...pageProps} />
    </>
  );
}
