import hero from "/public/heros/writing.webp";
import Link from "next/link";
import Image from "next/image";

export default function GoodbyeQuizlet() {
  return (
    <>
      <div className="PageHeader Grid">
        <div className="PageHeaderRainbow Grid">
          <div className="MaxWidth Grid"></div>
        </div>
      </div>

      <div className="ContentBlock">
        <div className="Content">
          <div className="MaxWidth">
            <div className="Card FirstCard CenterCard">
              <h3>Giggles over mockups: Building a demo culture</h3>
              <p>
                <em>December 2023 &middot; By Andrew Sutherland</em>
              </p>

              <p>
                Apple’s iPhone is the most star-spangled awesome product in the
                history of the world. I hate it <em>now</em>, because it rules
                my life and certainly yours too. But there’s no denying it is
                the best product ever made (sorry). Apple made it, not those
                muppets at{" "}
                <a href="https://www.youtube.com/watch?v=eywi0h_Y5_U">
                  Microsoft
                </a>{" "}
                or{" "}
                <a href="https://www.youtube.com/watch?v=cXL_HDzBQsM">
                  Blackberry
                </a>
                . Why did they succeed? Well, they had a demo culture, of
                course.
              </p>

              <p>
                Apple’s culture is unique for its frequent demos and fast cycles
                of iteration. Their process for developing the iPhone was making
                tangible examples of how the device would work. They showed
                those examples to each other, and played with them hands-on.
                These examples weren’t fully working software, but rather{" "}
                <em>demonstrations</em> of what was possible. If they found
                themselves giggling after a demo, they had struck magic. If not,
                they discussed the direction to try out for the next meeting.
              </p>

              <p>
                There were no elaborate written product specifications for what
                the iPhone should be. There were no Photoshop mockups for
                engineers to implement. How would the keyboard work? They made
                demos instead of talking about it. Ken Kocienda’s book{" "}
                <a href="http://creativeselection.io">Creative Selection</a>{" "}
                goes into detail on their process.
              </p>

              <p>
                I love this story because it confirms my own beliefs. I like
                working in a demo culture. So does the most valuable and
                innovative company ever made. So obviously it’s, like, the right
                way to do things.
              </p>

              <figure className="FullSizeMedia">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/Etyt4osHgX0?start=1878"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen={true}
                ></iframe>
                <figcaption>
                  Steve Jobs demos the iPhone and its keyboard for the first
                  time.
                </figcaption>
              </figure>

              <p>
                Here’s what they did: first they had a normal keyboard shrunk to
                a small size. No one at Apple could type with it, so the
                software VP paused all other engineering, and made everyone a
                “keyboard engineer” for a month. They held a keyboard derby to
                decide the best keyboard. The resulting winner was a weird
                keyboard with multiple letters per key and a predictive engine
                underneath to guess the word you typed.
              </p>

              <p>
                The keyboard they chose was nothing like the one that eventually
                shipped, but it had important insights built into it (mainly,
                predictive typing). They kept making new keyboards and
                discussing them <em>after</em> using them first-hand. The whole
                team dogfooded (or in their parlance, “lived on”) the product
                all day long. It was clear when the product was improving and
                when it didn’t yet feel great.
              </p>

              <p>
                After many iterations, Kocienda tried making the keyboard
                auto-accept suggestions when you pressed the spacebar. When he
                first tried this, he and his demo partner couldn’t stop
                giggling. He could type flawlessly and quickly, and so could a
                person who had never seen an iPhone before. Kocienda describes
                this “Giggly Demo” as the moment he knew the keyboard was ready
                for prime time.
              </p>

              <p>
                At the smol age of 15, when I was first building Quizlet, I had
                my own little demo culture. I was the biggest user of Quizlet,
                so I could tell if it was good or not. I would be studying for
                my French class and I’d have an idea. I’d realize there was a
                feature that could make it better -- say, inline editing of
                misspelled terms in the middle of a study session. I’d put my
                textbooks aside and code in the feature. Then I’d get my books
                again and continue studying. If I liked using the new inline
                edit feature, I’d keep it.
              </p>

              <p>
                Thus, I was giving myself lots of feedback all the time. This
                process is the reason for Quizlet’s success out of the gate. I
                had built a product that had been iterated many times, even by
                the date of its first launch in 2007.
              </p>

              <p>
                Years later, we had a breakout new product called{" "}
                <a href="https://quizlet.com/blog/introducing-our-first-collaborative-learning-game-for-the-classroom-quizlet-live">
                  Quizlet Live
                </a>
                . It was the result of a new internal process based around a
                demo culture. It is a multiplayer game, designed for in-person
                classroom usage. We had noticed Quizlet was being used in
                classrooms a lot, but all of our software to date was
                single-player. It couldn’t take advantage of the co-location of
                30 students in one place.
              </p>

              <p>
                We wanted to build a game that was competitive and fun but also
                rewarded thought and accuracy. We built a simple game where
                students had to answer questions, and they won if they got a
                12-in-a-row correct streak.
              </p>

              <figure className="FullSizeMedia">
                <Image
                  src="/images/quizlet-live-team.webp"
                  alt=""
                  width={400}
                  height={300}
                />
                <figcaption>
                  The Quizlet Live team introducing our new game to a classroom
                  of 9th&nbsp;graders.
                </figcaption>
              </figure>

              <p>
                That first game was decent, but it wasn’t magical. Fortunately,
                we developed a methodology of refinement that <em>was</em>{" "}
                magical. We decided we would test the game in a real classroom
                every Friday morning. After a test session, the team would go to
                a nearby restaurant for lunch. Over dumplings or burritos, we
                would review what we had seen and plan our changes for the
                following week.
              </p>

              <p>
                We landed on an idea to make it a team game, since that would
                make it collaborative in addition to being competitive. I
                started working on a team-assignment interface that would enable
                the teacher to match the seating chart of their class.
              </p>

              <p>
                But since we had a demo that Friday and the team assignment code
                wouldn’t be done on time, Sophia, the product manager, requested
                that we do random teams as a stop-gap. I hated the idea. Surely
                teachers would object – they might have kids that shouldn’t be
                together, for example. But I went along because of the deadline.
              </p>

              <p>
                Random teams turned out to be the magic that made the whole game
                work. It meant there was a chaotic 3-minute period where every
                kid had to scramble to find their teammates. They would shout
                “Who’s an owl?” or “Who’s a mouse?” since every team was
                assigned a different animal. That scramble was precisely what
                built excitement and energy for the game to come. It got kids
                out of their chairs and working with someone new. It was
                accidentally brilliant. We made random teams a core part of the
                game.
              </p>

              <p>
                This only happened on our 6th or 7th iteration of the game, and
                only because we had a demo deadline and needed something that
                would work.
              </p>

              <p>
                We knew we had a hit on our hands when the kids and the teachers
                were giggling all the time. And indeed, this became our fastest
                growing product to date. It bent the overall trajectory of the
                company upwards. It made teachers really really love Quizlet. It
                had great educational value with its emphasis on accuracy over
                speed. You could only succeed if you worked collaboratively,
                since the answers were spread across teammates’ screens. Kids
                were obsessed – they loved the stress of building a flawless
                streak of right answers.
              </p>

              <p>
                By contrast, our immediately previous effort was a game called
                Gravity. We didn’t have external deadlines via scheduled class
                visits. We had a long list of feature requirements to build. By
                the time we’d gotten the basic game working, we were already
                past the time allotted for the project. We shipped what we had
                and moved on.
              </p>

              <p>
                It was a dud. If we’d taken the time to build a 7th or 8th
                iteration of the game, I’m certain it would have been a hit. And
                if we had had weekly classroom demos, we would have had faster
                cycles with more accidental discoveries.
              </p>

              <p>
                If you want to build a demo culture, the easiest way to start is
                to run hackathons. Many of our best product ideas started at
                hackathons – where anyone at the company could demo their ideas
                without official approval from anyone. It’s always shocking how
                quickly a prototype can come together if it doesn’t need to work
                beyond a demo. The best demos, often accompanied by giggles,
                frequently became products (Quizlet Live started this way).
              </p>

              <p>
                If you want to make something great, build a demo culture and
                iterate your demos with fast cycle times. Then, watch for
                giggles – they are a sign that you’ve probably found magic.
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
        .FirstCard {
          margin-top: calc(-128px / 2 - 300px);
        }

        :global(:root) {
          --bg-color: var(--writingBlue);
          --dark-bg-color: var(--writingDarkBlue);
        }

        .PageHeader {
          background-image: url(${hero.src});
        }
      `}</style>
    </>
  );
}
