import { AppProps } from "next/app";
import Link from "next/link";
import { useEffect } from "react";

import "../styles/globals.css";
import Homepage from "../components/homepage";
import Nav from "../components/nav";
import Transition from "../components/transition";

import { useRouter } from "next/router";

import logo1x from "/public/logo-240.webp";
import logo2x from "/public/logo-480.webp";
import logo3x from "/public/logo-720.webp";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isHomepage = router.pathname === "/";

  // this code is absolute trash and I am ashamed
  // todo figure out how to lift properties properly
  const titles: { [key: string]: string } = {
    "/": "Andrew Sutherland",
    "/about": "About Andrew",
    "/writing": "Writing",
    "/speaking": "Speaking",
    "/investing": "Investing",
    "/contact": "Contact",
    "/questions": "Questions I'm Pondering",
  };

  return (
    <>
      <div className="MaxWidth LogoWrap" key="logo">
        <Link href="/">
          <a className="Logo">
            <img
              src={logo1x.src}
              srcSet={`${logo1x.src} 1x,
              ${logo2x.src} 2x,
              ${logo3x.src} 3x`}
              alt="Andrew Sutherland"
              className="LogoImage"
            />
          </a>
        </Link>
      </div>

      <div className={"SiteWrapper"} key="site">
        <Homepage homepageIsCurrent={isHomepage} />
        <Nav title={titles[router.pathname]}></Nav>
        <Transition location={router.pathname}>
          <Component {...pageProps} />
        </Transition>
      </div>
    </>
  );
}

export default MyApp;
