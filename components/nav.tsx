import Link from "next/link";
import { Component } from "react";
import Image from "next/image";
import Head from "next/head";

type NodeProps = {
  title: string;
  homepageIsCurrent: boolean;
};

type NodeState = {
  preloadHeroPath: string | null;
};

export default class Nav extends Component<NodeProps, NodeState> {
  constructor(props: NodeProps) {
    super(props);

    this.state = {
      preloadHeroPath: null,
    };
  }

  preloadHero(pageName: string) {
    this.setState({ preloadHeroPath: `/${pageName}-hero.webp` });
  }

  clickMover() {
    // document.getElementsByClassName("Page")[0].style.left =
    //   event.screenX + "px";
    // document.getElementsByClassName("Page")[0].style.top = event.screenY + "px";
  }

  render() {
    return (
      <>
        <Head>
          <title>{this.props.title}</title>
          <link rel="icon" href="/face.png" />
          {this.state.preloadHeroPath === null ? null : (
            <link rel="preload" as="image" href={this.state.preloadHeroPath} />
          )}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <nav className="Nav">
          <style jsx>{`
            .carrot {
              font-size: 20px;
              transform: translateY(0px) rotate(-90deg);

              // color:  var(--dark-bg-color);
            }
          `}</style>
          <div
            className="MaxWidth NavLinks"
            onClick={this.clickMover.bind(this)}
          >
            {this.props.homepageIsCurrent ? (
              <>
                <Link href="/about">
                  <a
                    onMouseEnter={this.preloadHero.bind(this, "about")}
                    href="#"
                    className="btn btn-about"
                  >
                    ABOUT
                  </a>
                </Link>
                <Link href="/writing">
                  <a
                    onMouseEnter={this.preloadHero.bind(this, "writing")}
                    href="#"
                    className="btn btn-writing"
                  >
                    WRITING
                  </a>
                </Link>
                {/* <Link href="/speaking">
                    <a
                      onMouseEnter={this.preloadHero.bind(this, "speaking")}
                      href="#"
                      className="btn btn-a"
                    >
                      QUESTIONS
                    </a>
                  </Link> */}
                <Link href="/investing">
                  <a
                    onMouseEnter={this.preloadHero.bind(this, "investing")}
                    href="#"
                    className="btn btn-investing"
                  >
                    INVESTING
                  </a>
                </Link>

                <Link href="/contact">
                  <a className="btn btn-contact">CONTACT</a>
                </Link>
              </>
            ) : (
              <Link href="/">
                <a className="btn btn-more">
                  {/* <span className="carrot">&#8629;</span> */}
                  <span className="carrot">&nbsp;✕&nbsp;</span>
                  {/* <span className="carrot">☞</span> */}
                </a>
              </Link>
            )}
          </div>
        </nav>
      </>
    );
  }
}
