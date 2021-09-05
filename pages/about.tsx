import hero from "/public/heros/about.webp";
import Link from "next/link";

export default function About() {
  return (
    <>
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
                adventures, and seriously researching what I might do next.
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

              <p>
                One night, my French 3 teacher gave me an impossible assignment:
                learn 111 French animals and their English translations in 48
                hours. In my struggle to learn them all, I had the idea for
                Quizlet: to build software that would ask me questions
                repeatedly and keeping track of what I needed more work on. I
                built a barebones website that did this, and got 100% on my next
                test. I then shared the tool with friends, and they loved it.
              </p>

              <p>
                I graduated from high school and went off to MIT. I found myself
                in an intellectual wonderland, surrounded by ambitious, excited
                peers. Their big expectations of themselves rubbed off on me. I
                studied Computer Science, did research on speech recognition,
                and took classes on education. I continued to work on Quizlet,
                sacrificing sleep along the way.
              </p>

              <p>
                In 2011, I left MIT to move to San Francisco and focus on
                Quizlet. Over the next 8 years, Quizlet grew to a team of 200
                people. We built it into a ubiquitous tool in education, helping
                tens of millions of students learn in a new way. We built
                revenue to make it sustainable, and raised several rounds of
                venture capital funding. After working on Quizlet for fifteen
                years, I{" "}
                <Link href="/goodbye-quizlet">
                  <a>decided it was time</a>
                </Link>{" "}
                to take a breath and think about what I wanted to do next.
              </p>
            </div>

            <div className="Card LeftCard">
              <h3>The New Andrew</h3>

              <p>INSERT CONTENT HERE.</p>

              <p>
                Haha. But seriously. As I explore what's next for me, I've been
                immersing myself in new environments. I find that that's the
                fastest way for me to learn. I've taught a course at MIT, I've
                driven for Lyft, I've helped run a San Francisco election, I've
                led a crew of teenagers into the wilderness, and I've been
                deeply researching education, housing, and climate change.
              </p>
              <p>
                Having some free time has also meant I could build this website,
                and I LOVE building websites, so that’s cool.
              </p>
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
