import Link from "next/link";
import { Component } from "react";
import Image from "next/image";
import Head from "next/head";

type NodeProps = {
  title: string;
  handleClick: () => void;
};

type State = {};

export default class Header extends Component<NodeProps, State> {
  render() {
    return (
      <>
        <Head>
          <title>{this.props.title}</title>
          <link rel="icon" href="/favicon.webp" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <nav
          className={`nav border-black font-domaineSans border-b flex justify-center`}
        >
          <style jsx>{`
            nav {
              background: var(--blue);
              width: 100%;
              font-family: var(--headline-font);
              padding: 1.25rem;
            }
            .logo {
              position: absolute;
              top: 1rem;
              z-index: 2;
            }
          `}</style>
          <div className="MaxWidth grid grid-cols-headerGrid grid-rows-1">
            <Link href="/">
              <a className="logo" onClick={this.props.handleClick}>
                <Image src="/logo@3x.png" width="240" height="131" />
              </a>
            </Link>
            <div className="col-start-2 col-end-2 row-start-1 row-end-1 space-x-6 flex justify-end">
              <Link href="/about">
                <a
                  onClick={this.props.handleClick}
                  href="#"
                  className="btn btn-a"
                >
                  ABOUT
                </a>
              </Link>
              <Link href="/writing">
                <a
                  onClick={this.props.handleClick}
                  href="#"
                  className="btn btn-a"
                >
                  WRITING
                </a>
              </Link>
              <Link href="/speaking">
                <a
                  onClick={this.props.handleClick}
                  href="#"
                  className="btn btn-a"
                >
                  SPEAKING
                </a>
              </Link>
              <Link href="/investing">
                <a
                  onClick={this.props.handleClick}
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
          </div>
        </nav>
      </>
    );
  }
}
