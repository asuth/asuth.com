import Link from "next/link";
import { Component } from "react";
import Head from "next/head";

import aboutHero from "/public/heros/about.webp";
import questionsHero from "/public/heros/questions.webp";
import investmentsHero from "/public/heros/investments.webp";
import writingHero from "/public/heros/writing.webp";
import contactHero from "/public/heros/contact.webp";
import metaImage from "/public/metaweb.jpg";
import { withRouter, NextRouter } from "next/router";

type NodeProps = {
  title: string;
  description: string;
  router: NextRouter;
};

type NodeState = {
  preloadHeroPath: string | null;
  offsets: {
    [key: string]: {
      offsetX: number;
      offsetY: number;
    };
  };
};

class Nav extends Component<NodeProps, NodeState> {
  paths: { [key: string]: string } = {
    about: aboutHero.src,
    writing: writingHero.src,
    questions: questionsHero.src,
    investments: investmentsHero.src,
    contact: contactHero.src,
  };

  constructor(props: NodeProps) {
    super(props);

    this.state = {
      preloadHeroPath: null,
      offsets: {
        about: {
          offsetX: 0,
          offsetY: 0,
        },
        writing: {
          offsetX: 0,
          offsetY: 0,
        },
        questions: {
          offsetX: 0,
          offsetY: 0,
        },
        contact: {
          offsetX: 0,
          offsetY: 0,
        },
        investments: {
          offsetX: 0,
          offsetY: 0,
        },
      },
    };
  }

  calculatePositions() {
    const positions: {
      [key: string]: {
        offsetX: number;
        offsetY: number;
      };
    } = {
      about: {
        offsetX: 300,
        offsetY: 1550,
      },
      questions: {
        offsetX: 980,
        offsetY: 1300,
      },
      writing: {
        offsetX: 160,
        offsetY: 200,
      },
      contact: {
        offsetX: 2850,
        offsetY: 1775,
      },
      investments: {
        offsetX: 1875,
        offsetY: 350,
      },
    };

    const imgWidth = 4001;
    const imgHeight = 2250;

    const cWidth = window.innerWidth;

    // nav-bar-height
    const navHeight = 0; //cWidth > 500 ? 85 : 60;
    const imgRatio = imgWidth / imgHeight;

    const wHeight = window.innerHeight;

    const cHeight = wHeight - navHeight;

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

    const offsets: {
      [key: string]: {
        offsetX: number;
        offsetY: number;
      };
    } = {};
    for (const obj in positions) {
      const offsetXRatio = positions[obj].offsetX / imgWidth;
      const offsetYRatio = positions[obj].offsetY / imgHeight;

      let offsetX = naturalWidth * offsetXRatio;
      let offsetY = naturalHeight * offsetYRatio;

      // if buttons are gonna be off screen, reduce their offsets
      // in an incremental and stable way (independently for x and y)

      // fudge factors with v approximate width / height
      // of the buttons
      while (offsetX + 140 > cWidth) {
        offsetX *= 5 / 6;
      }

      // hacky way to avoid logo overlap
      let yFudge = obj === "about" || obj === "questions" ? 160 : 30;
      while (offsetY + yFudge > cHeight) {
        offsetY *= 5 / 6;
      }

      offsets[obj] = {
        offsetX: offsetX,
        offsetY: offsetY,
      };
    }

    this.setState({
      offsets: offsets,
    });
  }

  componentDidMount() {
    this.calculatePositions();
    window.addEventListener("resize", this.calculatePositions.bind(this));
    document.addEventListener("keydown", this.escFunction.bind(this), false);
  }

  // nav to Home when user presses esc
  escFunction(event: KeyboardEvent) {
    if (event.key === "Escape") {
      document.getElementById("HomeBtn")?.click();
    }
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction.bind(this), false);
  }

  preloadHero(pageName: string) {
    this.setState({ preloadHeroPath: this.paths[pageName] });
  }

  placements(navName: string): { left: string; bottom: string } {
    return {
      left: this.state.offsets[navName].offsetX + "px",
      bottom: this.state.offsets[navName].offsetY + "px",
    };
  }

  renderAsciiArt() {
    return (
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<!--


    ██████╗ ███╗   ██╗    ████████╗██╗  ██╗███████╗    ██╗      ██████╗  ██████╗ ██╗  ██╗ ██████╗ ██╗   ██╗████████╗
    ██╔═══██╗████╗  ██║    ╚══██╔══╝██║  ██║██╔════╝    ██║     ██╔═══██╗██╔═══██╗██║ ██╔╝██╔═══██╗██║   ██║╚══██╔══╝
    ██║   ██║██╔██╗ ██║       ██║   ███████║█████╗      ██║     ██║   ██║██║   ██║█████╔╝ ██║   ██║██║   ██║   ██║   
    ██║   ██║██║╚██╗██║       ██║   ██╔══██║██╔══╝      ██║     ██║   ██║██║   ██║██╔═██╗ ██║   ██║██║   ██║   ██║   
    ╚██████╔╝██║ ╚████║       ██║   ██║  ██║███████╗    ███████╗╚██████╔╝╚██████╔╝██║  ██╗╚██████╔╝╚██████╔╝   ██║   
     ╚═════╝ ╚═╝  ╚═══╝       ╚═╝   ╚═╝  ╚═╝╚══════╝    ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝   
                                                                                                                     
    ███████╗ ██████╗ ██████╗     ██╗    ██╗ ██████╗ ███╗   ██╗██████╗ ███████╗██████╗                                
    ██╔════╝██╔═══██╗██╔══██╗    ██║    ██║██╔═══██╗████╗  ██║██╔══██╗██╔════╝██╔══██╗                               
    █████╗  ██║   ██║██████╔╝    ██║ █╗ ██║██║   ██║██╔██╗ ██║██║  ██║█████╗  ██████╔╝                               
    ██╔══╝  ██║   ██║██╔══██╗    ██║███╗██║██║   ██║██║╚██╗██║██║  ██║██╔══╝  ██╔══██╗                               
    ██║     ╚██████╔╝██║  ██║    ╚███╔███╔╝╚██████╔╝██║ ╚████║██████╔╝███████╗██║  ██║                               
    ╚═╝      ╚═════╝ ╚═╝  ╚═╝     ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝  ╚═╝                               
    
    Welcome to my HTML. I've been expecting you.
    

    -->`,
        }}
      />
    );
  }

  render() {
    let path = this.props.router.pathname.substring(1);
    const bgImage = this.paths.hasOwnProperty(path)
      ? `https://asuth.com${this.paths[path]}`
      : `https://asuth.com${metaImage.src}`;

    return (
      <>
        <Head>
          <title>{this.props.title}</title>
          {this.renderAsciiArt()}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#f5ff9e" />
          <meta name="theme-color" content="#f5ff9e" />
          <meta name="description" content={this.props.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta name="twitter:title" content={this.props.title} />
          <meta name="twitter:description" content={this.props.description} />
          <meta name="twitter:image" content={bgImage} />
          <meta name="twitter:card" content="summary_large_image" />

          <meta property="og:title" content={this.props.title} />
          <meta property="og:description" content={this.props.description} />
          <meta property="og:image" content={bgImage} />
          <meta
            property="og:url"
            content={`https://asuth.com${this.props.router.pathname}`}
          />

          {this.state.preloadHeroPath === null ? null : (
            <link rel="preload" as="image" href={this.state.preloadHeroPath} />
          )}
        </Head>

        <nav className="Nav">
          <div className="NavHomeBtns">
            <Link href="/about">
              <a
                onMouseEnter={this.preloadHero.bind(this, "about")}
                onTouchStart={this.preloadHero.bind(this, "about")}
                className="NavBtn"
                style={this.placements("about")}
              >
                ABOUT
              </a>
            </Link>
            <Link href="/writing">
              <a
                onMouseEnter={this.preloadHero.bind(this, "writing")}
                onTouchStart={this.preloadHero.bind(this, "writing")}
                className="NavBtn"
                style={this.placements("writing")}
              >
                WRITING
              </a>
            </Link>
            <Link href="/questions">
              <a
                onMouseEnter={this.preloadHero.bind(this, "questions")}
                onTouchStart={this.preloadHero.bind(this, "questions")}
                className="NavBtn"
                style={this.placements("questions")}
              >
                QUESTIONS
              </a>
            </Link>
            <Link href="/investments">
              <a
                onMouseEnter={this.preloadHero.bind(this, "investments")}
                onTouchStart={this.preloadHero.bind(this, "investments")}
                className="NavBtn"
                style={this.placements("investments")}
              >
                INVESTMENTS
              </a>
            </Link>

            <Link href="/contact">
              <a
                onMouseEnter={this.preloadHero.bind(this, "contact")}
                onTouchStart={this.preloadHero.bind(this, "contact")}
                className="NavBtn"
                style={this.placements("contact")}
              >
                CONTACT
              </a>
            </Link>
          </div>
          <div className="HomeNav">
            <div className="MaxWidth Grid">
              <Link href="/">
                <a id="HomeBtn" className="NavBtn NavBtn--Home">
                  HOME
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default withRouter(Nav);
