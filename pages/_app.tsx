import { AppProps } from "next/app";
import Link from "next/link";

import "../styles/globals.css";
import Homepage from "../components/homepage";
import Nav from "../components/nav";
import Transition from "../components/transition";

import { useRouter } from "next/router";

import logo1x from "/public/logo-240.webp";
import logo2x from "/public/logo-480.webp";
import logo3x from "/public/logo-720.webp";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isHomepage = router.pathname === "/";
  return (
    <>
      <div className="MaxWidth LogoWrap" key="logo">
        <Link href="/" className="Logo">
          <img
            src={logo1x.src}
            srcSet={`${logo1x.src} 1x,
          ${logo2x.src} 2x,
          ${logo3x.src} 3x`}
            alt="Andrew Sutherland"
            className="LogoImage"
          />
        </Link>
      </div>

      <Homepage homepageIsCurrent={isHomepage} />
      <Nav />
      <Transition location={router.pathname}>
        <Component {...pageProps} />
      </Transition>
      <Analytics />
    </>
  );
}

export default MyApp;
