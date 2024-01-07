import { Component } from "react";
import Meta from "./meta";

const animations: {
  [key: string]: {
    width: number;
    height: number;
    offsetX: number;
    offsetY: number;
    imageSizes: Array<number>;
    extension: string;
  };
} = {
  dog: {
    width: 958,
    height: 533,
    offsetX: 2378,
    offsetY: 161,
    imageSizes: [750, 600, 450, 300],
    extension: "gif",
  },
  // turbine: {
  //   width: 524,
  //   height: 635,
  //   offsetX: 2672,
  //   offsetY: 1186,
  // },
  kids: {
    width: 476,
    height: 534,
    offsetX: 1233,
    offsetY: 584,
    imageSizes: [470, 350, 280, 200],
    extension: "gif",
  },
  // laptop: {
  //   width: 576,
  //   height: 375,
  //   offsetX: 234,
  //   offsetY: 698,
  //   imageSizes: [260],
  //   extension: "gif",
  // },
  boat: {
    width: 164,
    height: 251,
    offsetX: 800,
    offsetY: 1000,
    imageSizes: [150, 120, 105, 90, 75],
    extension: "gif",
  },
};

type AnimationObjectOffsetType = {
  [key: string]: {
    offsetX: number;
    offsetY: number;
    width: number;
  };
};

type HomeProps = {
  homepageIsCurrent: boolean;
};

type HomeState = {
  offsets: AnimationObjectOffsetType;
  appHeight: number;
  domHasLoaded: boolean;
};

let initialBrowserWidthCss: string | null = null;

export default class Homepage extends Component<HomeProps, HomeState> {
  timerId: ReturnType<typeof setTimeout> | null;

  constructor(props: HomeProps) {
    super(props);

    this.timerId = null;

    this.state = {
      offsets: {},
      appHeight: 0,
      domHasLoaded: false,
    };
  }

  // this function re-creates background-size: cover logic
  // so that we can figure out where the animated pieces should be placed
  calculateSizes() {
    const imgWidth = 4001;
    const imgHeight = 2250;

    const cWidth = window.innerWidth;

    const imgRatio = imgWidth / imgHeight;

    const cHeight = window.innerHeight;

    const cRatio = cWidth / cHeight;

    let naturalWidth = -1;
    let naturalHeight = -1;

    // we are using the full width of the window, and cropping away some height
    if (cRatio > imgRatio) {
      naturalWidth = cWidth;
      naturalHeight = cWidth / imgRatio;
      // we are using the full height of the window, and cropping away some width
    } else {
      naturalWidth = cHeight * imgRatio;
      naturalHeight = cHeight;
    }

    const offsets: AnimationObjectOffsetType = {};
    for (const obj in animations) {
      const widthRatio = animations[obj].width / imgWidth;
      const offsetXRatio = animations[obj].offsetX / imgWidth;
      const offsetYRatio = animations[obj].offsetY / imgHeight;

      const offsetX = naturalWidth * offsetXRatio;
      // don't load animations that would load offscreen
      // e.g. on mobile devices. Also fudge factor for tiny amount of gif showing
      if (offsetX + 25 < cWidth) {
        offsets[obj] = {
          offsetX: offsetX,
          offsetY: naturalHeight * offsetYRatio,
          width: naturalWidth * widthRatio,
        };
      }
    }

    this.setState({
      offsets: offsets,
    });
  }

  pageSetters() {
    const newH = window.innerHeight;
    if (newH != this.state.appHeight) {
      document.documentElement.classList.toggle("PageIsResizing", true);
      if (this.timerId !== null) {
        clearTimeout(this.timerId);
      }
      this.timerId = setTimeout(() => {
        document.documentElement.classList.toggle("PageIsResizing", false);
      }, 50);
      this.setState({ appHeight: newH });
    }

    document.documentElement.classList.toggle(
      "HtmlHomepageIsCurrent",
      this.props.homepageIsCurrent
    );
  }

  componentDidUpdate() {
    this.pageSetters();
  }

  componentDidMount() {
    this.calculateSizes();
    window.addEventListener("resize", this.calculateSizes.bind(this));
    window.addEventListener("load", this.preloadHomepage.bind(this));
    if (document.readyState === "complete") {
      this.preloadHomepage();
    }
    this.pageSetters();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.calculateSizes.bind(this));
  }

  preloadHomepage() {
    this.setState({ domHasLoaded: true });
  }

  // If user has landed on homepage, render this html right away
  // If they're on a different page, render this after the main content has loaded
  renderAnimations() {
    return (
      <>
        {Object.entries(this.state.offsets).map(([key, gif]) => {
          let dpr = window.devicePixelRatio;
          let renderedWidth = gif.width * dpr;
          // find the smallest image on server that's bigger than what's needed
          // i.e. allow downscaling but not upscaling (upscaling looked bad)
          let chosenWidth = animations[key].imageSizes[0];
          animations[key].imageSizes.forEach((w) => {
            if (w > renderedWidth) {
              chosenWidth = w;
            }
          });
          // if we're actually on the homepage, render the gifs
          return (
            <div
              className={`AnimationContainer--${key}`}
              key={key}
              style={{
                left: `${gif.offsetX}px`,
                bottom: `${gif.offsetY}px`,
                position: "absolute",
              }}
            >
              <img
                src={`${key}-${chosenWidth}.${animations[key].extension}`}
                className={`Animation--${key}`}
                style={{ width: `${gif.width}px` }}
              />
            </div>
          );
        })}
      </>
    );
  }

  render() {
    let isBrowser = typeof window !== "undefined";

    const shouldPreload =
      isBrowser && (this.props.homepageIsCurrent || this.state.domHasLoaded);

    let bgWidths = [
      4000, 3800, 3600, 3400, 3200, 3000, 2800, 2600, 2400, 2200, 2000, 1800,
      1600, 1400, 1200, 1000,
    ];
    let max = Math.max(...bgWidths);

    let staticCss = "";
    let bestCss: string[] = [];

    // fudge factor because image is 16:9 but often browsers are 4:3 or whatever window size
    // number of pixels
    const windowRatioFudgeFactor = 300;

    // this very goofy past-midnight code is set up so that initial download
    // will get the right image with media queries, but subsequently the css
    // will be based on the browser window's initial size. this prevents
    // dynamic downloading of different size backgrounds as people resize
    // their window, which creates a white flash.
    // resize behavior is expected of ~all people
    bgWidths.forEach((w) => {
      let thisCss = `.HomepageBackground {
        background-image: url(/desktop/desktop-${w}.webp);
        background-image: -webkit-image-set(
          url(/desktop/desktop-${w}.webp) 1x,
          url(/desktop/desktop-${Math.min(max, w * 2)}.webp) 2x,
          url(/desktop/desktop-${Math.min(max, w * 3)}.webp) 3x
        );
      }
      `;

      bestCss.push(thisCss);

      staticCss += `
      @media screen and (max-width: ${w - windowRatioFudgeFactor}px) {
        ${thisCss}
      }
      `;
    });

    if (isBrowser && initialBrowserWidthCss === null) {
      let windowWidth = window.innerWidth;
      let bestCssIndex = bgWidths.length - 1;
      while (windowWidth + windowRatioFudgeFactor > bgWidths[bestCssIndex]) {
        bestCssIndex--;
      }
      initialBrowserWidthCss = bestCss[bestCssIndex];
    }

    return (
      <>
        {this.props.homepageIsCurrent ? (
          <Meta
            title="Andrew Sutherland"
            description="On the lookout for wonder"
          />
        ) : null}
        <div
          key="hpBg"
          className={
            "HomepageBackground" +
            (this.state.domHasLoaded ? " HomepageIsLoaded" : "")
          }
        >
          {/* only render animations in client side */}
          {shouldPreload ? this.renderAnimations() : null}
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              this.state.domHasLoaded && initialBrowserWidthCss
                ? initialBrowserWidthCss
                : staticCss,
          }}
        ></style>
      </>
    );
  }
}
