import Image from "next/image";
import Header from "./header";

export default function Home() {
  return (
    <>
      <Header
        title="About Andrew"
        backgroundColor="blue"
        handleClick={() => {}}
      />
      <div className="WallpaperHeader"></div>
      <div className="ContentBlock">
        <div className="Content">
          <div className="MaxWidth">
            {/* <h1 className="PageHeadline"> */}
            {/* <Image
                className="Img"
                src="/smallplant.png"
                width="50"
                height="55"
              /> */}
            {/* HEY, I'M ANDREW */}
            {/* </h1> */}
          </div>
          <div className="BlueTexture">
            <div className="MaxWidth">
              <h1 className="RightCardText">
                <span className="Hey">HEY</span>,
                <br />
                I'M ANDREW
              </h1>
              <div className="Card PortraitCard RightCard">
                <Image
                  src="/portrait-normal.jpg"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <div className="Card LeftCard">
                <p>
                  I am passionate about teaching, learning, and improving our
                  society’s systems of education.
                </p>
                <p>
                  I am an entrepreneur, so I like making things. That includes
                  this website, which took me took too long to make, but also
                  probably the right amount of time.
                </p>
              </div>
              <div className="Card RightCard">
                <p>
                  I made Quizlet, an educational software company serving
                  millions of students and teachers worldwide.
                </p>
                <p>
                  It gives students a system for learning that helps them come
                  prepared to whatever class they’re taking, and thus raises
                  their own expectations of what they can achieve.
                </p>
              </div>

              <div className="Card LeftCard">
                <p>These days, I'm exploring new things</p>

                <p>Questions that excite me:</p>
                <ul>
                  <li>Why are blueberries the best berry?</li>
                  <li>
                    How do you raise the status of the teaching profession to be
                    similar to doctors or lawyers?
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="PageHeader Flex">
        <Image layout="fill" objectFit="cover" src="/portrait.webp" />
        <div className="MaxWidth ContentBlock">
          <h1 className="HelloText">
            Hey,
            <br />
            I'm Andrew
          </h1>
        </div>
      </div> */}
      <style jsx>{`
        :global(body) {
          background: var(--blue);
        }
        .WallpaperHeader {
          background: url(/homes.png);
          height: 45vh;
          width: 100%;
          background-size: 500px 500px;
          border-bottom: 28px solid var(--yellow);
          box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
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

        .Card {
          background: #fff;
          border: 28px solid #f2f1a0;
          padding: 50px;
          width: 66%;
          position: relative;
          box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
          margin-bottom: 50px;
          font: 18px/1.6 var(--headline-font);
        }

        .PortraitCard {
          height: 450px;
          padding: 0;
        }

        .RightCardText {
          font-size: 30px;
          font-family: var(--headline-font);
          padding: 120px 40px;
          float: left;
          width: 30%;
        }

        .Hey {
          font-size: 60px;
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

        .PageHeadline {
          background: var(--blue);
          font-size: 32px;
          font-family: var(--headline-font);
          padding: 45px 0;
          text-align: center;
        }
        .PageHeader {
          width: 100%;
          height: 60vh;
          position: relative;
        }
        .Flex {
          display: flex;
        }
        .ContentBlock {
          width: 100%;
          place-self: stretch start;
          display: flex;
          margin: 0 auto;
          position: relative;
        }
        .HelloText {
          font-size: 30px;
          font-family: var(--headline-font);
          color: var(--yellow);
          padding-left: 2rem;
          place-self: center center;
        }

        .RightCard {
          float: right;
          transform: rotate(2deg);
        }

        .LeftCard {
          float: left;
          transform: rotate(-1deg);
        }

        p {
          margin-bottom: 40px;
        }

        p:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </>
  );
}
