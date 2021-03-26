import Head from "next/head";
import Image from "next/image";
import Header from "./header";
import { Component } from "react";

import React, { useLayoutEffect, useState } from "react";

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

export default class Home extends Component {
  constructor(props) {
    super(props);

    const defaultOffsets = {};
    for (const obj in animations) {
      defaultOffsets[obj] = { offsetX: 0, offsetY: 0, width: 0 };
    }

    this.state = {
      isHomepage: true,
      offsets: defaultOffsets,
    };
  }

  calculateSizes() {
    const imgWidth = 4001;
    const imgHeight = 2250;

    const navHeight = 85;
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

    const offsets = {};
    for (const obj in animations) {
      const widthRatio = animations[obj].width / imgWidth;
      const offsetXRatio = animations[obj].offsetX / imgWidth;
      const offsetYRatio = animations[obj].offsetY / imgHeight;

      offsets[obj] = {
        offsetX: naturalWidth * offsetXRatio,
        offsetY: naturalHeight * offsetYRatio,
        width: naturalWidth * widthRatio,
      };
    }

    this.setState({ offsets: offsets });
  }

  handleClick() {
    this.setState({ isHomepage: !this.state.isHomepage });
  }

  componentDidMount() {
    window.addEventListener("resize", this.calculateSizes.bind(this));
  }

  componentWillMount() {
    if (typeof window !== "undefined") {
      this.calculateSizes();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.calculateSizes.bind(this));
  }

  componentDidM;

  render() {
    return (
      <>
        <Head>
          <title>Andrew Sutherland</title>
          <link rel="icon" href="/favicon.webp" />
        </Head>

        <body
          className={this.state.isHomepage ? "Page--homepage" : "Page--about"}
        >
          <div
            className={
              (this.state.isHomepage ? "is-homepage " : " ") +
              " bg-homepage w-full"
            }
          >
            {Object.entries(this.state.offsets).map(([key, gif]) => (
              <img
                onClick={this.handleClick.bind(this)}
                src={`${key}.gif`}
                key={key}
                style={{
                  left: `${gif.offsetX}px`,
                  bottom: `${gif.offsetY}px`,
                  width: `${gif.width}px`,
                  position: "absolute",
                }}
              />
            ))}
          </div>
          <Header
            isHomepage={this.state.isHomepage}
            handleClick={this.handleClick.bind(this)}
          ></Header>
          <div class="about" onClick={this.handleClick.bind(this)}>
            Hello i'm the about page
          </div>
        </body>
      </>
    );
  }
}
