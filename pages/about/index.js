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

      <Header classes="bg-blue border-black"></Header>

      <body>
        <div className="bg-blue bg-portrait bg-cover w-full flex align-items-center justify-content-center">
          <h1 className="text-yellowAccent font-domaineSans ml-8 -mt-24 text-4xl">
            Hey, I'm Andrew.
          </h1>
        </div>
        <main className="h-96 bg-blue bg-yellowTexture bg-500">
          faifawjefoawj foiwa jfaw
        </main>
      </body>
    </>
  );
}
