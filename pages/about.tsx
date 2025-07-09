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
                My main thing these days is math. I work on giving kids hard
                problems to solve at Art of Problem Solving. We train the most
                intense math kids in the U.S., and lots of medium-intense ones
                too.
              </p>

              <p>
                Previously, I founded Quizlet, an educational software company
                serving millions of students and teachers worldwide. After
                working on Quizlet from age 15 to age 30, I left the company in
                2020.
              </p>

              <p>
                Between Quizlet and AoPS, I was in a{" "}
                <span className="Goofy">goofy</span> and exploratory phase of
                life. You might have called it retirement. I was saying yes to
                lots of adventures, and finding projects that kept me up late
                into the night. That was when I had time to build this website,
                and I{" "}
                <a href="https://twitter.com/wesbos/status/1354903492641611797">
                  LOVE
                </a>{" "}
                building websites, so that was good.
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
              <h3>The Andrew Construction Zone</h3>

              <div className="RightImage">
                <Image
                  src={underConstruction}
                  width={200}
                  height={152}
                  alt="Old-school Under Construction gif"
                />
              </div>

              <p>
                To construct the post-Quizlet me, I immersed myself in new
                environments. I taught a course about learning at MIT, drove for
                Lyft, helped run a San Francisco municipal election, and led
                crews of teenagers into the wilderness.
              </p>

              <p>
                I also installed myself for a period à Paris, which is the
                superior city in the category of all cities. Unlike Americans,
                the French know how to sit outside, have a glass of wine, and
                have an unbothered chat about life. Life sparkles in Paris.
              </p>

              <p>
                As time passed however, I couldn't shake my American yearning
                for long working hours. I became obsessed with education and
                housing policy. I helped found{" "}
                <a href="https://abundancenetwork.com/">Abundance Network</a>{" "}
                and joined the board of{" "}
                <a href="https://cayimby.org">California YIMBY</a>. A lack of
                housing is the secret rotten core of many of our society’s
                problems, from wealth inequality to sidewalk poop. We are on it!
              </p>
            </div>

            <div className="Card RightCard">
              <h3>You need a challenge</h3>

              <p>
                We all seek meaning and purpose in life. My period of personal
                reconstruction was joyful and meandering, and it gave me the
                clarity of purpose I sought.
              </p>

              <p>
                I want to live in a world with excellent education, excellent
                cities, and excellent computers. These are worthy problems to
                work on over many decades. For now, computers can wait. Today, I
                am quite involved in working on cities, while my full-time focus
                is on education.
              </p>

              <p>
                Educational excellence is rare. My high school French teacher
                challenged me in a way I had previously never been challenged.
                Her work led to so many of the good things that have happened in
                my life.
              </p>

              <p>
                I joined AoPS because it's a company that presents kids with
                hard challenges, at scale. We get kids sitting with a single
                hard math problem for hours. I'm quite optimistic we can be
                leaders of a movement towards rigor, challenge, and excellence
                in education in this country. It's also wonderful to be working
                with kids again, because kids are funny as hell.
              </p>

              <p>That's all for now, thank you for reading this far!</p>
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
