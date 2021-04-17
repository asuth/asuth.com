import { Component } from "react";

const animations: {
  [key: string]: {
    width: number;
    height: number;
    offsetX: number;
    offsetY: number;
  };
} = {
  dog: {
    width: 958,
    height: 533,
    offsetX: 2378,
    offsetY: 161,
  },
  turbine: {
    width: 524,
    height: 635,
    offsetX: 2672,
    offsetY: 1186,
  },
  kids: {
    width: 476,
    height: 534,
    offsetX: 1233,
    offsetY: 584,
  },
};

type OffsetType = {
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
  offsets: OffsetType;
  shouldPreloadHomepage: boolean;
};

export default class Homepage extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);

    const defaultOffsets: OffsetType = {};
    for (const obj in animations) {
      defaultOffsets[obj] = { offsetX: 0, offsetY: 0, width: 0 };
    }

    this.state = {
      offsets: defaultOffsets,
      shouldPreloadHomepage: false,
    };
  }

  // this function re-creates background-size: cover logic
  // so that we can figure out where the animated pieces should be placed
  calculateSizes() {
    const imgWidth = 4001;
    const imgHeight = 2250;

    const navHeight = 85;
    const imgRatio = imgWidth / imgHeight;

    const wHeight = window.innerHeight;
    const cHeight = wHeight - navHeight;
    const cWidth = window.innerWidth;

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

    const offsets: OffsetType = {};
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

    this.setState({ offsets: offsets });
    document.documentElement.style.setProperty("--app-height", `${wHeight}px`);
  }

  // handleClick() {
  //   this.setState({ isHomepage: !this.props.isHomepage });
  // }

  componentDidMount() {
    this.calculateSizes();
    window.addEventListener("resize", this.calculateSizes.bind(this));
    console.log("didMount");
    window.addEventListener("load", this.preloadHomepage.bind(this));
    if (document.readyState === "complete") {
      this.preloadHomepage();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.calculateSizes.bind(this));
  }

  preloadHomepage() {
    this.setState({ shouldPreloadHomepage: true });
  }

  // If user has landed on homepage, render this html right away
  // If they're on a different page, render this after the main content has loaded
  renderRealHomepage() {
    return (
      <>
        <link rel="preload" as="image" href="homepage-2880.webp" />
        {Object.entries(this.state.offsets).map(([key, gif]) => (
          // if we're actually on the homepage, render the gifs
          <img
            src={key === "kids" ? "kids.webp" : `${key}.gif`}
            key={key}
            style={{
              left: `${gif.offsetX}px`,
              bottom: `${gif.offsetY}px`,
              width: `${gif.width}px`,
              position: "absolute",
            }}
          />
        ))}
      </>
    );
  }

  render() {
    return (
      <>
        <div
          className={
            (this.props.homepageIsCurrent ? "HomepageIsCurrent " : " ") +
            (this.state.shouldPreloadHomepage ? "HomepageIsLoaded " : " ") +
            "HomepageBackground"
          }
        >
          {this.props.homepageIsCurrent || this.state.shouldPreloadHomepage
            ? this.renderRealHomepage()
            : ""}
        </div>
        <style jsx>{`
          :global(:root) {
            --bg-color: var(--hpPurple);
          }
        `}</style>
      </>
    );
  }
}
