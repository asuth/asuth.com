import Link from "next/link";
import { Component } from "react";
import Image from "next/image";
import Head from "next/head";

type NodeProps = {
  title: string;
  handleClick: () => void;
  homepageIsCurrent: boolean;
};

type NodeState = {
  preloadHeroPath: string | null;
};

export default class Header extends Component<NodeProps, NodeState> {
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
              background: var(--bg-color);
              width: 100%;
              font-family: var(--headline-font);
              padding: 1.25rem;
              border-bottom: 1px solid #000; /*var(--dark-bg-color);*/
            }
            .logo {
              position: absolute;
              top: 1rem;
              z-index: 2;
            }
            .PageTitle {
              font-size: 30px;
              width: 500px;
            }
            .carrot {
              font-size: 15px;
              transform: translateY(0px);
              color: #666;
            }
          `}</style>
          <div className="MaxWidth grid grid-cols-headerGrid grid-rows-1">
            <Link href="/">
              <a className="logo" onClick={this.props.handleClick}>
                <Image
                  src="/logo@3x.png"
                  width="240"
                  height="131"
                  alt="Andrew Sutherland"
                />
              </a>
            </Link>
            {this.props.homepageIsCurrent ? (
              <>
                <div className="col-start-2 col-end-2 row-start-1 row-end-1 space-x-6 flex justify-end">
                  <Link href="/about">
                    <a
                      onClick={this.props.handleClick}
                      onMouseEnter={this.preloadHero.bind(this, "about")}
                      href="#"
                      className="btn btn-a"
                    >
                      ABOUT
                    </a>
                  </Link>
                  <Link href="/writing">
                    <a
                      onClick={this.props.handleClick}
                      onMouseEnter={this.preloadHero.bind(this, "writing")}
                      href="#"
                      className="btn btn-a"
                    >
                      WRITING
                    </a>
                  </Link>
                  <Link href="/speaking">
                    <a
                      onClick={this.props.handleClick}
                      onMouseEnter={this.preloadHero.bind(this, "speaking")}
                      href="#"
                      className="btn btn-a"
                    >
                      SPEAKING
                    </a>
                  </Link>
                  <Link href="/investing">
                    <a
                      onClick={this.props.handleClick}
                      onMouseEnter={this.preloadHero.bind(this, "investing")}
                      href="#"
                      className="btn btn-a"
                    >
                      INVESTING
                    </a>
                  </Link>

                  <Link href="/contact">
                    <a onClick={this.props.handleClick} className="btn btn-b">
                      CONTACT
                    </a>
                  </Link>
                </div>
              </>
            ) : (
              <div className="col-start-2 col-end-2 row-start-1 row-end-1 space-x-6 flex justify-end">
                <div className="PageTitle"></div>
                <Link href="/">
                  <a onClick={this.props.handleClick} className="btn btn-b">
                    <span className="carrot">&uarr;</span>
                    &nbsp;MORE&nbsp;STUFF&nbsp;AT&nbsp;HOME
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
