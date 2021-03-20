import Head from "next/head";
import Image from "next/image";
import Header from "./header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Andrew Sutherland</title>
        <link rel="icon" href="/favicon.webp" />
      </Head>

      <body class="homepage">
        {/* <div className="bg-green bg-chairHero bg-500 w-full h-96"></div> */}
        <div className="bg-homepage w-full"></div>
        <Header classes="homepageNav bg-darkBlue border-purple"></Header>
      </body>
    </>
  );
}
