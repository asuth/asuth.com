import { Component } from "react";

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
    extension: "webp",
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
  shouldPreloadHomepage: boolean;
  originalBgSize: number | null;
};

export default class Homepage extends Component<HomeProps, HomeState> {
  timerId: ReturnType<typeof setTimeout> | null;

  constructor(props: HomeProps) {
    super(props);

    this.timerId = null;

    const defaultOffsets: AnimationObjectOffsetType = {};
    for (const obj in animations) {
      defaultOffsets[obj] = {
        offsetX: 0,
        offsetY: 0,
        width: 0,
      };
    }

    this.state = {
      offsets: defaultOffsets,
      appHeight: 0,
      shouldPreloadHomepage: false,
      originalBgSize: null,
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
      // e.g. on mobile devices
      if (offsetX < cWidth) {
        offsets[obj] = {
          offsetX: offsetX,
          offsetY: naturalHeight * offsetYRatio,
          width: naturalWidth * widthRatio,
        };
      }
    }

    // calculate size of bg image
    let originalBgSize = this.state.originalBgSize;
    if (originalBgSize === null) {
      let bgWidths = [
        1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3200,
        3400, 3600, 3800,
      ];
      let naturalWidthScaledWithDPR = naturalWidth * window.devicePixelRatio;
      bgWidths.sort(
        (a, b) =>
          Math.abs(a - naturalWidthScaledWithDPR) -
          Math.abs(b - naturalWidthScaledWithDPR)
      );
      originalBgSize = bgWidths[0];
    }

    this.setState({
      offsets: offsets,
      originalBgSize: originalBgSize,
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

      document.documentElement.style.setProperty("--app-height", `${newH}px`);
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
    this.setState({ shouldPreloadHomepage: true });
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
            <img
              src={`${key}-${chosenWidth}.${animations[key].extension}`}
              key={key}
              style={{
                left: `${gif.offsetX}px`,
                bottom: `${gif.offsetY}px`,
                width: `${gif.width}px`,
                position: "absolute",
              }}
            />
          );
        })}
      </>
    );
  }

  render() {
    let baseImage = encodeURIComponent("/homepage-flawless.webp");
    let backgroundUrl = `/_next/image?url=${baseImage}&w=${this.state.originalBgSize}&q=87`;
    const shouldPreload =
      typeof window !== "undefined" &&
      (this.props.homepageIsCurrent || this.state.shouldPreloadHomepage);

    return (
      <>
        <div
          className={
            (this.state.shouldPreloadHomepage ? "HomepageIsLoaded " : "") +
            "HomepageBackground"
          }
          style={
            this.state.originalBgSize
              ? {
                  backgroundImage: `url("${backgroundUrl}")`,
                }
              : {}
          }
        >
          {/* only render animations in client side */}
          {shouldPreload ? (
            <link rel="preload" as="image" href={backgroundUrl} />
          ) : null}
          {shouldPreload ? this.renderAnimations() : null}
        </div>
      </>
    );
  }
}
