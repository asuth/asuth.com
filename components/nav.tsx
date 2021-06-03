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

  render() {
    return (
      <>
        <Head>
          <title>{this.props.title}</title>
          <link rel="icon" href="/favicon.webp" />
          {this.state.preloadHeroPath === null ? null : (
            <link rel="preload" as="image" href={this.state.preloadHeroPath} />
          )}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <nav className={`nav flex justify-center`}>
          <style jsx>{`
            .nav {
              background: var(--nav-bar-color);
              width: 100%;
              font-family: var(--headline-font);
              padding: 20px;
              border-bottom: 1px solid #000; /*var(--dark-bg-color);*/
            }

            @media only screen and (max-width: 768px) {
              :root {
                --nav-bar-height: 60px;
              }

              .nav {
                padding: 10px;
              }

              .nav .btn {
                padding: 5px 10px;
              }
            }

            .carrot {
              font-size: 20px;
              transform: translateY(0px) rotate(-90deg);

              // color:  var(--dark-bg-color);
            }
          `}</style>
          <div className="MaxWidth grid grid-cols-headerGrid grid-rows-1">
            {this.props.homepageIsCurrent ? (
              <>
                <div className="col-start-2 col-end-2 row-start-1 row-end-1 space-x-6 flex justify-end">
                  <Link href="/about">
                    <a
                      onMouseEnter={this.preloadHero.bind(this, "about")}
                      href="#"
                      className="btn btn-a"
                    >
                      ABOUT
                    </a>
                  </Link>
                  <Link href="/writing">
                    <a
                      onMouseEnter={this.preloadHero.bind(this, "writing")}
                      href="#"
                      className="btn btn-a"
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
                      className="btn btn-a"
                    >
                      INVESTING
                    </a>
                  </Link>

                  <Link href="/contact">
                    <a className="btn btn-b">CONTACT</a>
                  </Link>
                </div>
              </>
            ) : (
              <div className="col-start-2 col-end-2 row-start-1 row-end-1 space-x-6 flex justify-end">
                <Link href="/">
                  <a className="btn btn-b">
                    {/* <span className="carrot">&#8629;</span> */}
                    <span className="carrot">☞</span>
                    &nbsp;MORE&nbsp;STUFF
                  </a>
                </Link>
              </div>
            )}
          </div>
        </nav>
      </>
    );
  }
}
