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
              <h3>Reach Around!</h3>

              <p>
                You can find me on the following:
                <a href="https://linkedin.com/in/asuth">LinkedIn</a>
              </p>

              <p>
                You can email me at{" "}
                <a href="mailto:asuth@asuth.com">asuth@asuth.com</a>
              </p>

              <p>
                You can follow me on twitter
                <a href="https://twitter.com/asuth">@asuth</a>
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

        .Content {
          width: 100%;
        }

        .BlueTexture {
          background: var(--dark-blue) url(/yellow-texture.png);
          background-size: 800px 800px;

          // background: url(/homes.png);
          // background-size: 500px 500px;

          padding: 50px;
          overflow: auto;
        }

        h3 {
          font: 28px var(--headline-font);
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .CenterCard {
          clear: both;
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

        .RightCard {
          float: right;
        }

        .LeftCard {
          float: left;
        }

        p {
          margin-bottom: 30px;
        }

        p:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </>
  );
}
