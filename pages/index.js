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

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// `wait` milliseconds.
const debounce = (func, wait) => {
  let timeout;

  // This is the function that is returned and will be executed many times
  // We spread (...args) to capture any number of parameters we want to pass
  return function executedFunction(...args) {
    // The callback function to be executed after
    // the debounce time has elapsed
    const later = () => {
      // null timeout to indicate the debounce ended
      timeout = null;

      // Execute the callback
      func(...args);
    };
    // This will reset the waiting every function execution.
    // This is the step that prevents the function from
    // being executed because it will never reach the
    // inside of the previous setTimeout
    clearTimeout(timeout);

    // Restart the debounce waiting period.
    // setTimeout returns a truthy value (it differs in web vs Node)
    timeout = setTimeout(later, wait);
  };
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
    console.log("calcsi");
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
    this.calculateSizes();

    window.addEventListener(
      "resize",
      this.calculateSizes.bind(this)

      // debounce(() => this.calculateSizes(), 25)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "resize",
      this.calculateSizes.bind(this)
      // debounce(() => this.calculateSizes(), 25)
    );
  }

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
