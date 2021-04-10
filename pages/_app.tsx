import { AppProps } from "next/app";
import "../styles/globals.css";
import Homepage from "../components/homepage";

import { useRouter } from "next/router";
import Home from "./about";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isHomepage = router.pathname === "/";

  return (
    <>
      <Homepage homepageIsCurrent={isHomepage} />
      <div className="Page">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
