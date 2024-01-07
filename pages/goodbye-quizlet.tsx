import hero from "/public/heros/writing.webp";
import smallplant from "/public/smallplant.png";
import Link from "next/link";
import Image from "next/image";
import Meta from "../components/meta";

export default function () {
  return (
    <>
      <Meta
        title="Goodbye Quizlet, Hello World"
        description="After founding and leading Quizlet for nearly fifteen years, I left last year. This is the first time I’ve written about it."
      />
      <div className="PageHeader Grid">
        <div className="MaxWidth Grid"></div>
      </div>

      <div className="ContentBlock">
        <div className="Content">
          <div className="MaxWidth">
            <div className="Card FirstCard FirstCard--writing CenterCard">
              <h3>
                Goodbye Quizlet,
                <br /> Hello World
              </h3>
              <p>
                <em>September 2021 &middot; By Andrew Sutherland</em>
              </p>
              <p>
                After founding and leading Quizlet for nearly fifteen years, I
                left last year. This is the first time I’ve written about it.
              </p>
              <p>
                I started Quizlet while I was in high school because I wanted a
                tool to help me learn French. It has become a ubiquitous tool,
                used by the vast majority of teachers and students in the U.S.
                and soon the world. They use it to learn every imaginable thing.
              </p>
              <p>
                I worked on Quizlet non-stop—through high school, through
                college, through all of my twenties. I didn’t really have other
                hobbies. I poured my heart and soul into making it work. The
                company almost died several times in the early years. But
                Quizlet continued to grow. In 2015, after ten years of
                bootstrapping, we raised money from a group of investors.
              </p>
              <p>
                After raising money, Quizlet kicked into high gear. We grew
                quickly—the team, the users, the revenue.
              </p>
              <p>
                I loved the work. I loved making a product that people adored,
                and that genuinely helped them. We had many stories of kids
                who’d transformed their whole outlook on education after finding
                Quizlet. I loved interviewing new people to join our team. I
                loved mentoring engineers. I loved getting 360-degree feedback
                from everyone on the team and seeing how I’d grown and how much
                further I had to go.
              </p>
              <p>
                I loved staying up late at night, writing code that would change
                how millions of people learn. I loved chatting with teachers
                during classroom visits all over the world, hearing what they
                wanted from their students and their tools. I loved working with
                a team that deeply cared about learning.
              </p>
              <p>
                Eventually I found myself adrift. I was the founder and CTO, but
                I wasn’t the CEO, and I had begun to disagree with the direction
                the rest of the exec team wanted to go. And if I’m honest, I was
                tired of working on roughly the same problem I started thinking
                about when I was 15. Sure, there were a million new problems
                encountered along the way. Quizlet was succeeding, but I needed
                a change.
              </p>
              <p>
                So I left. I felt like I had been riding a train, the same one
                I’d been riding since I was 15, and it had just dropped me off
                in the middle of nowhere. What now? I’d poured my entire adult
                life into this one cause, my identity tightly intertwined with
                my software-baby. Who am I without Quizlet, I wondered.
              </p>
              <p>
                In the past year, I’ve redeveloped a sense of wonder and
                nurtured a wide breadth of interests. I’ve been exploring the
                depths of education policy, which led me to housing policy and
                structural political reform. I’ve taught a course on
                programming, a class about learning at MIT, and life skills to
                teenagers deep in the wilderness. I’ve{" "}
                <Link href="/investments">invested</Link> in a number of new
                companies. I’ve joined two boards. I’ve been spending time on
                the proverbial and literal beach.
              </p>
              <p>
                A profound change has been one of loosening. When I was at
                Quizlet, I was too keenly aware of the impact of my words and
                actions; one improperly phrased suggestion could send a team on
                a wild goose chase. Now, as a unit of one, I can be weirder.
                Weirder and goofier. The website you’re on now reflects this new
                changed me.
              </p>
              <p>
                In some unexpected sense, I don’t feel like I have anything to
                prove to other people anymore. I just have things to prove to
                myself. I would like to use my talents, wealth, and connections
                to do great things in the world.
              </p>
              <p>
                This thought comes to me often: If at age 15, being a beginner
                at everything, I could set myself on a path of such incredible
                growth, joy, intensity, then what, at age 31, is the equivalent
                beginner state? How do I get as much hard-won growth out of the
                next 15 years as I got out of the last 15?
              </p>
              <p>
                There are seismic changes happening in education, in our
                climate, in politics, and in technology. I’m immensely enjoying
                being fully open to new possibilities. I’ll find something big
                to do when it’s time.
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
