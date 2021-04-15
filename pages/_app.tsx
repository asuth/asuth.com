import { AppProps } from "next/app";
import "../styles/globals.css";
import Homepage from "../components/homepage";
import Transition from "../components/transition";

import { useRouter } from "next/router";
import Home from "./about";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isHomepage = router.pathname === "/";

  return (
    <>
      <Homepage homepageIsCurrent={isHomepage} />
      <Transition location={router.pathname}>
        <div className="Page">
          <Component {...pageProps} />
        </div>
      </Transition>
    </>
  );
}

export default MyApp;

// import { useRouter } from "next/router"

// const MainLaylout: React.FC = () => {
//   const router = useRouter()

//   return (
//     // you may import your header and footer here too
//     <Fragment>
//       <Transition location={router.pathname}>
//         <div className="min-h-screen">{children}</div>
//       </Transition>
//     </Fragment>
//   )
