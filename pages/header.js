import Link from "next/link";
import { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <nav
        className={
          (this.props.isHomepage ? "homepageNav " : " ") +
          `nav border-black w-full font-domaineSans p-4 border-b flex justify-center min-w-max`
        }
      >
        <div className="max-w-6xl grid grid-cols-headerGrid grid-rows-1 p-3">
          <Link href="/">
            <a>
              <img
                src="/logo@3x.png"
                width="230"
                height="110"
                className="absolute top-4 logo"
              />
            </a>
          </Link>
          <div className="col-start-2 col-end-2 row-start-1 row-end-1 space-x-6 flex justify-end">
            {/* <Link href="/about"> */}
            <a className="btn btn-a">ABOUT</a>
            {/* </Link> */}
            <Link href="/writing">
              <a className="btn btn-a">WRITING</a>
            </Link>
            <Link href="/speaking">
              <a className="btn btn-a">SPEAKING</a>
            </Link>
            <Link href="/investing">
              <a className="btn btn-a">INVESTING</a>
            </Link>

            <Link href="/contact">
              <a className="btn btn-b">CONTACT</a>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
