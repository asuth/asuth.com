import Head from "next/head";
import Image from "next/image";
import Header from "../header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Andrew Sutherland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header backgroundColor="purple" title="Speaking"></Header>

      <body>
        <div className="bg-breadPurple bg-breadHero bg-500 w-full h-96"></div>
      </body>
    </>
  );
}
