import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="PageHeader Grid">
        <div className="MaxWidth Grid">
          <h1 className="PageHeadline">
            <span className="PageHeadline-Small">This is the</span>
            CONTACT PAGE
          </h1>
        </div>
      </div>

      <div className="ContentBlock">
        <div className="Content">
          <div className="MaxWidth">
            <div className="Card FirstCard CenterCard">
              <h3>Say hello, future friend</h3>
              <p>
                The best way to reach me is by email at{" "}
                <a href="mailto:asuth@asuth.com">asuth@asuth.com</a>.
              </p>

              <p>
                You can also follow me on Twitter at{" "}
                <a href="https://twitter.com/asuth">@asuth</a>.
              </p>

              <p>
                I can also be found on{" "}
                <a href="https://www.linkedin.com/in/asuth">LinkedIn</a>, though
                I only accept requests from people I already know.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(:root) {
          --bg-color: var(--pink);
          --dark-bg-color: var(--dark-pink);
          --hero-url: url(/contact-hero.webp);
        }

        .PageHeader {
          background-size: 360px 360px;
        }

        ul {
          list-style: square;
        }

        li {
          margin-bottom: 20px;
          list-style: dot;
          margin-left: 20px;
        }

        li:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </>
  );
}
