import Link from "next/Link";

export default function Header(props) {
  return (
    <nav
      className={`${props.classes} w-full font-domaineSans p-4 border-b flex justify-center min-w-max`}
    >
      <div className="max-w-6xl grid grid-cols-headerGrid grid-rows-1 p-3">
        <img
          src="/logo@3x.png"
          width="230"
          height="110"
          className="absolute top-4"
        />
        <div className="col-start-2 col-end-2 row-start-1 row-end-1 space-x-6 flex justify-end">
          <Link href="/about">
            <a className="btn btn-a">ABOUT</a>
          </Link>
          <Link href="/">
            <a className="btn btn-a">WRITING</a>
          </Link>
          <Link href="/about">
            <a className="btn btn-a">SPEAKING</a>
          </Link>
          <Link href="/">
            <a className="btn btn-a">INVESTING</a>
          </Link>

          <Link href="/about">
            <a className="btn btn-b">CONTACT</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
