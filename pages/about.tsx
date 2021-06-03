import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="PageHeader Grid">
        <div className="MaxWidth Grid">
          <h1 className="PageHeadline">
            <span className="PageHeadline-Small">ABOUT</span>
            ANDREW
          </h1>
        </div>
      </div>

      <div className="ContentBlock">
        <div className="Content">
          <div className="MaxWidth">
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
              <h3>HELLO, STRANGER!</h3>
              <p>
                Welcome to asuth.com. I built this website so you can get to
                know me a bit.
              </p>

              <p>
                I founded Quizlet, an educational software company serving
                millions of students and teachers worldwide. Students tell
                Quizlet what they’re learning, and Quizlet gives them
                flashcards, games, and other activities that help them master
                their material. After working on Quizlet from age 15 to age 30,
                I left the company in 2020.
              </p>

              <p>
                I’m now in a fun, exploratory phase of my life. I’m curious
                about many things, and I’m taking my time to indulge that
                curiosity now.
              </p>
            </div>
            <div className="Card RightCard">
              <h3>Inventing Quizlet</h3>

              <p>
                One night, when I was 15-years-old, my French teacher gave me an
                impossible assignment: learn 111 French animals and their
                English translations in 48 hours. In my struggle to learn them
                all, I had the idea for Quizlet: to build software that would
                ask me questions repeatedly and keeping track of what I needed
                more work on. I built a barebones website that did this, and got
                100% on my next test. I then shared the tool with friends, and
                they loved it.
              </p>

              <p>
                In 2008, I graduated from high school and went off to MIT. Being
                at MIT was like drinking from a firehose. I studied Computer
                Science, did research on speech recognition, and took classes on
                education. I made friends with many students who had big
                expectations of themselves, and that rubbed off on me. I
                continued to work on Quizlet, sacrificing sleep along the way.
              </p>
            </div>

            <div className="Card LeftCard">
              <h3>Building the Company</h3>

              <p>
                In 2011, I left MIT to move to San Francisco and focus on
                Quizlet. It was a wrenching decision to leave before graduating,
                because I was learning so much and having so much fun. I decided
                I needed to focus on doing one thing well.
              </p>
              <p>
                Over the next 8 years, Quizlet grew to a team of 200 people. We
                built it into a ubiquitous tool in education, helping tens of
                millions of students learn in a new way. We built revenue to
                make it sustainable, and raised several rounds of venture
                capital funding. After working on Quizlet for fifteen years, I
                decided it was time to take a breath and think about what I
                wanted to do next.
              </p>
            </div>

            <div className="Card RightCard">
              <h3>The New Andrew</h3>

              <p>INSERT CONTENT HERE.</p>

              <p>
                But really. I dunno what's next. It's gonna be cool tho. Having
                some free time meant I could build this website, and I LOVE
                building websites, so that's cool.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(:root) {
          --bg-color: var(--blue);
          --dark-bg-color: var(--dark-blue);
          --hero-url: url(/about-hero.webp);
        }

        .PageHeader {
          background-size: cover;
          height: 70vh;
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
