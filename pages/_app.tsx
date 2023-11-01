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
    "/investments": "Investments",
    "/contact": "Contact",
    "/questions": "Questions I’m Pondering",
    "/goodbye-quizlet": "Goodbye Quizlet, Hello World",
    "/great-engineer": "What makes a great engineer?",
    "/investment-worksheet": "My worksheet for making investment decisions",
  };

  const descriptions: { [key: string]: string } = {
    "/": "On the lookout for wonder",
    "/about":
      "I’m in a goofy and exploratory phase of my life. I am indulging my curiosity, saying yes to adventures, and finding projects that keep me filled with joy and wonder until late into the night.",
    "/writing":
      "If this appears to be one of those elaborate websites with just two blog posts on it, you are indeed perceptive.",
    "/investments":
      "Investing is my way to see the future. I invest in both for-profit and non-profit organizations, so you’ll see them mixed together in my portfolio.",
    "/contact":
      "If you’re on this page, you’re already considering emailing me, so just do it, eh?",
    "/questions":
      "I’ve collected important questions and put them on this page, in the hopes that a kindly stranger (you!) might offer a compelling answer, or perhaps a promising lead or book recommendation.",
    "/goodbye-quizlet":
      "After founding and leading Quizlet for nearly fifteen years, I left last year. This is the first time I’ve written about it.",
  };

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
      <Nav
        title={titles[router.pathname]}
        description={descriptions[router.pathname]}
      ></Nav>
      <Transition location={router.pathname}>
        <Component {...pageProps} />
      </Transition>
    </>
  );
}

export default MyApp;
