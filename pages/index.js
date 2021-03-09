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
        <nav className=" bg-green w-full font-domaineSans p-4 border-b border-black flex justify-center min-w-max">
          <div className="max-w-6xl grid grid-cols-headerGrid grid-rows-1 p-2">
            <img
              src="/logo@3x.png"
              width="200"
              height="110"
              className=" absolute"
            />
            <div className="col-start-2 col-end-2 row-start-1 row-end-1 space-x-6 flex justify-end">
              <a className="btn" href="#">
                ABOUT
              </a>
              <a className="btn" href="#">
                WRITING
              </a>
              <a className="btn" href="#">
                SPEAKING
              </a>
              <a className="btn" href="#">
                INVESTING
              </a>
              <a className="btn" href="#">
                CONTACT
              </a>
            </div>
          </div>
        </nav>

        <div className="bg-green bg-chairHero bg-500 w-full h-96"></div>

        <footer className="flex items-center justify-center w-full h-24">
          <a
            className="flex items-center justify-center"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </footer>
      </body>
    </>
  );
}
