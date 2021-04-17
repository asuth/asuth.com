import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="PageHeader Flex"></div>

      {/* <div className="WallpaperHeader"></div> */}
      <div className="ContentBlock">
        <div className="Content">
          {/* <div className="MaxWidth">
            <h1 className="PageHeadline">
              <Image
                className="Img"
                src="/smallplant.png"
                width="50"
                height="55"
              />
              HEY, I'M ANDREW
            </h1>
          </div> */}
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

              <div className="Card CenterCard">
                <h3>ABOUT ME</h3>
                <p>
                  Hellllllo! I’m Andrew. You found my cool website which I spent
                  way too long making because I wanted to. I’m an entrepreneur,
                  whose primary avocation since I was a wee boy has been making
                  cool websites for way too long because I wanted to.
                </p>
                <p>
                  I made Quizlet, an educational software company serving
                  millions of students and teachers worldwide. Quizlet, at its
                  best, is transformative for students’ confidence. It gives
                  them a system for learning that helps them come prepared to
                  whatever class they’re taking, and thus raises their own
                  expectations of what they can achieve.
                </p>
                <p>
                  After many years growing Quizlet, I left to work on new
                  bullshit. What that is yet isn’t exactly clear. But you’re
                  gonna be dazzled by it.
                </p>
                <h3>My Story</h3>
                <p>
                  One night, when I was 15-years-old, my French teacher gave me
                  an impossible assignment: learn 111 French animals and their
                  English translations in 48 hours. In my struggle to learn them
                  all, I had the idea for Quizlet: to build software that would
                  track what I knew, and ask me questions repeatedly until I
                  knew everything. For my next test, I built a barebones website
                  that did this, and got 100% on that test. From there, I shared
                  the tool with friends and gave it
                </p>
                <p>
                  In 2008, I graduated from high school and went off to MIT.
                  Studying at MIT was like drinking from a firehose, but I loved
                  it. I studied Computer Science, did research on speech
                  recognition, and took classes on education. I made friends
                  with many students who had high expectations of themselves,
                  and that rubbed off on me. I continued to work on Quizlet,
                  sacrificing sleep along the way.
                </p>
                <p>
                  In 2011, I left MIT to move to San Francisco and focus on
                  Quizlet. It was a wrenching decision to leave before
                  graduating, because I was learning so much and having so much
                  fun. I decided I needed to focus on doing one thing well.
                </p>
                <p>
                  Over the next 8 years, Quizlet grew to a team of 200 people,
                  we raised several rounds of funding, we expanded its reach to
                  tens of millions of monthly users, we built revenue to make it
                  sustainable, and we made the product even more useful for
                  learning. I was proud to lead the team along with a great
                  executive team.
                </p>
                <p>
                  When I reached my 30th birthday and my 14-year anniversary of
                  working on Quizlet, I decided it was time to take a breath and
                  think about what I wanted to do next.
                </p>
                <p>
                  My experience taught me many things. It taught me the value of
                  tough feedback, of high expectations, of sweating the details.
                  Through Quizlet, I met teachers and visited classrooms in
                  Germany, South Africa, Brazil, China, Finland, in addition to
                  many cities across the U.S..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(:root) {
          --bg-color: var(--blue);
          --hero-url: url(/about-hero.webp);
        }

        .PageHeader {
          background-size: cover;
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
          font: 18px/1.6 var(--body-font);
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
          background: var(--blue);
          font-size: 32px;
          font-family: var(--headline-font);
          padding: 35px 0;
          text-align: center;
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
