import Head from "next/head";
import Image from "next/image";
import Header from "./header";

import React, { useLayoutEffect, useState } from "react";

function useOffsets() {
  function updateSize() {
    const imgWidth = 4001;
    const imgHeight = 2250;

    const navHeight = 90;
    const imgRatio = imgWidth / imgHeight;

    const cWidth = window.innerWidth;
    const cHeight = window.innerHeight - navHeight;
    const cRatio = cWidth / cHeight;

    let naturalWidth = -1;
    let naturalHeight = -1;

    if (cRatio > imgRatio) {
      naturalWidth = cWidth;
      naturalHeight = cWidth / imgRatio;
    } else {
      naturalWidth = cHeight * imgRatio;
      naturalHeight = cHeight;
    }

    const animations = {
      dog: {
        width: 965,
        height: 558,
        offsetX: 2375,
        offsetY: 142,
      },
      turbine: {
        width: 548,
        height: 638,
        offsetX: 2668,
        offsetY: 1180,
      },
      kids: {
        width: 487,
        height: 510,
        offsetX: 1235,
        offsetY: 587,
      },
    };

    const offsets = {};
    for (const obj in animations) {
      const widthRatio = animations[obj].width / imgWidth;
      const offsetXRatio = animations[obj].offsetX / imgWidth;
      const offsetYRatio = animations[obj].offsetY / imgHeight;

      offsets[obj] = {
        offsetX: naturalWidth * offsetXRatio,
        offsetY: naturalHeight * offsetYRatio + navHeight,
        width: naturalWidth * widthRatio,
      };
    }

    setSize(offsets);
  }

  // put the doggy offscreen in server side render
  const [size, setSize] = useState({
    dog: { offsetX: 0, offsetY: 0, width: 0 },
    turbine: { offsetX: 0, offsetY: 0, width: 0 },
    kids: { offsetX: 0, offsetY: 0, width: 0 },
  });
  useLayoutEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export default function Home() {
  const offsets = useOffsets();

  return (
    <>
      <Head>
        <title>Andrew Sutherland</title>
        <link rel="icon" href="/favicon.webp" />
      </Head>

      <body className="homepage">
        {/* <div className="bg-green bg-chairHero bg-500 w-full h-96"></div> */}
        <div className="bg-homepage w-full">
          <img
            src="dog-on-pillow.gif"
            style={{
              left: `${offsets.dog.offsetX}px`,
              bottom: `${offsets.dog.offsetY}px`,
              width: `${offsets.dog.width}px`,
            }}
            className="dog-on-pillow"
          />
          <img
            src="wind-turbine.gif"
            style={{
              left: `${offsets.turbine.offsetX}px`,
              bottom: `${offsets.turbine.offsetY}px`,
              width: `${offsets.turbine.width}px`,
              position: "absolute",
            }}
            className="wind-turbine"
          />
          <img
            src="kids.gif"
            style={{
              left: `${offsets.kids.offsetX}px`,
              bottom: `${offsets.kids.offsetY}px`,
              width: `${offsets.kids.width}px`,
              position: "absolute",
            }}
            className="kids"
          />
        </div>
        <Header classes="homepageNav bg-500 border-purple"></Header>
      </body>
    </>
  );
}
