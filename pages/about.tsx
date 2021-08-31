import Image from "next/image";

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
                Welcome to asuth.com. I built this website so you can start to
                get to know me.
              </p>

              <p>
                I’m in a <span className="Goofy">goofy</span> and exploratory
                phase of my life. I’m curious about many things, and I’m taking
                my time to indulge that curiosity now.
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
                In 2008, I graduated from high school and went off to MIT. I
                found myself in an intellectual wonderland, surrounded by
                ambitious, excited peers. Their big expectations of themselves
                rubbed off on me. I studied Computer Science, did research on
                speech recognition, and took classes on education. I continued
                to work on Quizlet, sacrificing sleep along the way.
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
                Haha. But seriously. As I explore what's next for me, I've been
                immersing myself in new environments. I find that that's the
                fastest way for me to learn. I've taught a course at MIT, I've
                driven for Lyft, I've helped run a San Francisco election, I've
                led a crew of teenagers into the wilderness, and I've been
                deeply researching education, housing, and climate change.
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
          --hero-url: url(/about-hero.webp);
        }

        .PageHeader {
          background-size: cover;
        }

        .Goofy {
          display: inline-block;
          // transform: rotate(329deg);
        }

        .Card:hover .Goofy {
          transform: rotate(360deg);
          transition: transform 0.2s linear;
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
