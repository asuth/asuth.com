import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Andrew Sutherland</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <nav className="flex bg-green w-full">
          <Image src="/logo@3x.png" width="200" height="110" className="p-10" />

          <a
            className="bg-white p-2 border border-black border-double"
            href="#"
          >
            About
          </a>
          <a href="#">Writing</a>
          <a href="#">Speaking</a>
          <a href="#">Investing</a>
          <a href="#">Contact</a>
        </nav>

        <footer className="flex items-center justify-center w-full h-24">
          <a
            className="flex items-center justify-center"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Me{" "}
          </a>
        </footer>
      </body>
    </>
  );
}
