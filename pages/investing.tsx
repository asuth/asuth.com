export default function Home() {
  return (
    <>
      <div className="PageHeader Grid">
        <div className="MaxWidth Grid">
          <h1 className="PageHeadline">
            MY
            <br />
            INVESTMENTS
          </h1>
        </div>
      </div>

      <div className="ContentBlock">
        <div className="Content">
          <div className="BlueTexture">
            <div className="MaxWidth">
              {/* <h1 className="RightCardText">
                <span className="Hey">HEY</span>,
                <br />
                I'M ANDREW
              </h1> */}
              {/* <div className="Card PortraitCard RightCard">
                <Image
                  src="/portrait-normal.jpg"
                  objectFit="cover"
                  layout="fill"
                />
              </div> */}
              {/* <div className="Card LeftCard">
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
              </div> */}

              <div className="Card FirstCard">
                <p>
                  Investing in good people with good ideas is my jam. Both
                  for-profit and nonprofit organizations can do an immense
                  amount of good, so I invest in both. I like education, climate
                  change, housing, and developer tools.
                </p>
                <p>
                  The reasons for investing I give below are{" "}
                  <b>complete fabrications</b>. Or, shall we say, post-hoc
                  rationalizations; most of my criteria is whether I believe in
                  the leader and think they are capable of greatness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(:root) {
          --bg-color: var(--green);
          --dark-bg-color: var(--dark-green);
          --hero-url: url(/investing-hero.webp);
        }

        :global(body) {
          background: var(--dark-bg-color) url(/yellow-texture.png);
          background-size: 800px 800px;
        }

        .PageHeader {
          background-size: 500px 500px;
        }

        .Content {
          width: 100%;
        }

        .BlueTexture {
          padding: 50px;
        }

        h3 {
          font: 40px var(--headline-font);
        }

        .PortraitCard {
          height: 450px;
          padding: 0;
        }

        .RightCardText {
          font: 30px var(--headline-font);
          padding: 120px 40px;
          float: left;
          width: 30%;
        }

        .CenterCard {
          clear: both;
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
          background: var(--bg-color);
          font-size: 32px;
          font-family: var(--headline-font);
          padding: 35px;
          place-self: center start;
          margin-left: 5rem;
          border: 4px solid var(--dark-bg-color);
        }
        .ContentBlock {
          width: 100%;
          place-self: stretch start;
          display: grid;
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
