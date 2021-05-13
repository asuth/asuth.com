import { AppProps } from "next/app";
import "../styles/globals.css";
import Homepage from "../components/homepage";
import Header from "../components/header";
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
  };

  return (
    <div className={isHomepage ? "WrapperHomepageIsCurrent" : ""}>
      <Homepage homepageIsCurrent={isHomepage} />
      <Header
        title={titles[router.pathname]}
        handleClick={() => {}}
        homepageIsCurrent={isHomepage}
      ></Header>
      <Transition location={router.pathname}>
        <div className="Page">
          <Component {...pageProps} />
        </div>
      </Transition>
    </div>
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
