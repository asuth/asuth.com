import hero from "/public/heros/about.webp";
import underConstruction from "/public/under-construction.gif";
import andrewAndJohnny from "/public/andrew-and-johnny.webp";
import Link from "next/link";
import Image from "next/image";
import Meta from "../components/meta";

export default function () {
  return (
    <>
      <Meta
        title="About Andrew"
        description="I’m in a goofy and exploratory phase of my life. I am indulging my curiosity, saying yes to adventures, and finding projects that keep me filled with joy and wonder until late into the night."
      />
      <div className="PageHeader Grid">
        <div className="MaxWidth Grid">
          <h1 className="PageHeadline">
            About me
            <span className="PageHeadline-Small">(That’s me &#8680;)</span>
          </h1>
        </div>
      </div>

      <div className="ContentBlock">
        <div className="Content">
          <div className="MaxWidth">
            <div className="Card FirstCard">
              <h3>Hi Friend!</h3>
              <p>
                Welcome to asuth.com. I built this website so you can get to
                know me a bit.
              </p>

              <p>
                I’m in a <span className="Goofy">goofy</span> and exploratory
                phase of my life. I am indulging my curiosity, saying yes to
                adventures, and finding projects that bring me joy and keep me
                up late into the night.
              </p>

              <p>
                Previously, I founded Quizlet, an educational software company
                serving millions of students and teachers worldwide. After
                working on Quizlet from age 15 to age 30, I left the company in
                2020.
              </p>
            </div>
            <div className="Card RightCard">
              <h3>Inventing Quizlet</h3>

              <div className="LeftImage">
                <Image
                  src={andrewAndJohnny}
                  width={233}
                  height={155}
                  alt="Me hugging my French teacher, Johnny Selvin"
                />
              </div>

              <p>
                One day, my French 3 teacher (pictured avec moi) gave me an
                impossible assignment: learn 111 French animals and their
                English translations in 48 hours. In my struggle to learn them
                all, I built a website that would ask me questions repeatedly
                until I could answer each one correctly. With this new tool, I
                aced my next quiz. Then I shared it with my friends. They loved
                it. Quizlet was born.
              </p>

              <p>
                After high school I went off to MIT. It was an intellectual
                wonderland. I was surrounded by ambitious and excited peers who
                had big expectations of themselves, which rubbed off on me. I
                studied computer science, researched speech recognition, and
                took classes on education. I continued to work on Quizlet,
                sacrificing sleep along the way.
              </p>

              <p>
                In 2011, I left MIT to move to San Francisco and focus on making
                Quizlet an amazing tool for learning. Over the next 8 years,
                Quizlet’s{" "}
                <a href="https://www.youtube.com/watch?v=2c16h--F6ZI">team</a>{" "}
                grew to 200 people. We built it into a ubiquitous tool in
                education, helping tens of millions of students learn in a new
                way. We built revenue to make it sustainable and raised several
                rounds of venture capital funding. After working on Quizlet for
                almost fifteen years, I decided it was{" "}
                <Link href="/goodbye-quizlet">time to take a break</Link> and
                think about what I wanted to do next.
              </p>
            </div>

            <div className="Card LeftCard">
              <h3>The New Andrew</h3>

              <div className="RightImage">
                <Image
                  src={underConstruction}
                  width={200}
                  height={152}
                  alt="Old-school Under Construction gif"
                />
              </div>

              <p>INSERT CONTENT HERE.</p>

              <p>
                Haha. But seriously. To construct the new me, I’ve been
                immersing myself in new environments. That’s the fastest way for
                me to learn. Recently, I’ve taught a course about learning at
                MIT, driven for Lyft, helped run a San Francisco municipal
                election, and led crews of teenagers into the wilderness.
              </p>
              <p>
                My narrow set of interests, if you could call them narrow, are
                education, housing, and climate. Education, because I love
                helping kids learn, and kids are funny as hell. Housing, because
                a lack of housing is the secret rotten core of many of our
                society’s problems, from wealth inequality to sidewalk poop. And
                climate, because it is the mega-problem that if we fail to
                address we’re all gonna burn.
              </p>
              <p>
                I also love programming and computers. A day spent programming
                is like a spa day for me: luxurious and restorative. I want
                computers to help me think thoughts I couldn’t otherwise think,
                which you could say makes me a{" "}
                <a href="https://numinous.productions/ttft/">
                  “Tools for Thought”
                </a>{" "}
                person.
              </p>
              <p>
                Having some extra free time has also meant I could build this
                website, and I{" "}
                <a href="https://twitter.com/wesbos/status/1354903492641611797">
                  LOVE
                </a>{" "}
                building websites, so that’s good.
              </p>
            </div>
            <div className="BackToHome">
              <Link href="/" className="NavBtn">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(:root) {
          --bg-color: var(--lightBlue);
          --dark-bg-color: var(--darkLightBlue);
        }

        .PageHeader {
          background-size: cover;
          background-image: url(${hero.src});
        }
        @media only screen and (max-width: 568px) {
          .PageHeader {
            height: 50vh;
          }
        }

        .Goofy {
          display: inline-block;
        }

        .Card:hover .Goofy {
          transform: rotate(360deg);
          transition: transform 0.2s linear;
        }
      `}</style>
    </>
  );
}
