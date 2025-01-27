import { Noto_Sans } from "next/font/google";
import Head from "next/head";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>test</title>
        <link key={1} rel="icon" href="/favicon.ico" />
      </Head>
      <main className={notoSans.className}>
        12312312
      </main>
    </>
  );
}
