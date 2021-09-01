import { AppProps } from "next/app";
import Link from "next/link";
import { useEffect } from "react";

import "../styles/globals.css";
import Homepage from "../components/homepage";
import Nav from "../components/nav";
import Transition from "../components/transition";

import { useRouter } from "next/router";

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
              src="logo-200.png"
              srcSet="logo-200.png 1x,
   logo-400.png 2x,
   logo-600.png 3x"
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
