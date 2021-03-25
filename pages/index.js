import Head from "next/head";
import Image from "next/image";
import Header from "./header";

import React, { useLayoutEffect, useState } from "react";

function useOffsets() {
  function updateSize() {
    let newDogOffsetX = 0,
      newDogWidth = 0,
      newDogOffsetY = 0;

    let imgWidth = 4001;
    let imgHeight = 2250;

    let navHeight = 90;
    let imgRatio = imgWidth / imgHeight;

    let cWidth = window.innerWidth;
    let cHeight = window.innerHeight - navHeight;
    let cRatio = cWidth / cHeight;

    let naturalWidth = -1;
    let naturalHeight = -1;

    if (cRatio > imgRatio) {
      naturalWidth = cWidth;
      naturalHeight = cWidth / imgRatio;
    } else {
      naturalHeight = cHeight;
      naturalWidth = cHeight * imgRatio;
    }

    let dogWidth = 965;
    let dogHeight = 558;
    let dogOffsetX = 2375;
    let dogOffsetY = 142;
    let dogWidthRatio = dogWidth / imgWidth;

    let dogOffsetXRatio = dogOffsetX / imgWidth;
    let dogOffsetYRatio = dogOffsetY / imgHeight;

    newDogWidth = naturalWidth * dogWidthRatio;

    newDogOffsetX = naturalWidth * dogOffsetXRatio;
    newDogOffsetY = naturalHeight * dogOffsetYRatio + navHeight;
    setSize([newDogOffsetX, newDogOffsetY, newDogWidth]);
  }

  // put the doggy offscreen in server side render
  const [size, setSize] = useState([-9000, -9000, 0]);
  useLayoutEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export default function Home() {
  const [newDogOffsetX, newDogOffsetY, newDogWidth] = useOffsets();

  return (
    <>
      <Head>
        <title>Andrew Sutherland</title>
        <link rel="icon" href="/favicon.webp" />
      </Head>

      <body class="homepage">
        {/* <div className="bg-green bg-chairHero bg-500 w-full h-96"></div> */}
        <div className="bg-homepage w-full">
          <img
            src="dog-on-pillow.gif"
            style={{
              left: `${newDogOffsetX}px`,
              bottom: `${newDogOffsetY}px`,
              width: `${newDogWidth}px`,
            }}
            className="dog-on-pillow"
          />
        </div>
        <Header classes="homepageNav  bg-yellowTexture bg-500 border-purple"></Header>
      </body>
    </>
  );
}
