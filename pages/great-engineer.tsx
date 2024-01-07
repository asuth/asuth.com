import Meta from "../components/meta";
import hero from "/public/heros/writing.webp";
import Link from "next/link";

export default function () {
  return (
    <>
      <Meta
        title="What makes a great engineer?"
        description="I wrote what about the attributes of great engineers."
      />
      <div className="PageHeader Grid">
        <div className="Grid">
          <div className="MaxWidth Grid"></div>
        </div>
      </div>

      <div className="ContentBlock">
        <div className="Content">
          <div className="MaxWidth">
            <div className="Card FirstCard FirstCard--writing CenterCard">
              <h3>What makes a great&nbsp;engineer?</h3>
              <p>
                <em>September 2023 &middot; By Andrew Sutherland</em>
              </p>
              <p>
                I was recently asked what makes a great engineer, and I liked
                what I wrote so I decided to post it! Here is my list.
              </p>

              <h4>Has learned from the consequences of their own actions</h4>
              <p>
                A great engineer has worked on the same system for multiple
                years. They’ve seen systems evolve. They’ve learned what choices
                or shortcuts they made were worthwhile, and which have caused
                problems. They’ve seen their choices confuse other engineers.
                They’ve had to fix performance issues on code they wrote six
                months ago. You can’t get great without this iteration.
              </p>

              <h4>Is obsessed with their tools</h4>
              <p>
                One basic interview test is how fast and capable an engineer is
                with their editor. Do they know their keyboard shortcuts? Do
                they know their terminal well? A good engineer will not stand
                for a slow editing environment, slow save-refresh loops, slow
                tests, slow deploy processes, or slow code review processes. If
                you can’t work quickly, it’s very hard to do good work. A great
                engineer will stop what they’re doing (within reason) and fix
                problems with their tools before moving forward.
              </p>

              <h4>Understands users deeply and personally</h4>
              <p>
                They themselves are in the room when user testing. They reply to
                support tickets and get on video calls with users. They care! At
                Quizlet, many great engineers were previous Quizlet users and so
                had good default intuition. Even then, nothing beat visiting a
                classroom. They would see kids or teachers totally misunderstand
                a new interface they were building. They would see a
                slow-loading page cause a kid to start distracting another kid.
                They might see a bug in a bugtracker, but when they watch a kid
                hit it and get frustrated in front of them, a great engineer
                will often fix that same-day. A user-centered engineer takes
                time to develop their intuition so they can see well beyond what
                can be written explicitly in a product spec.
              </p>

              <h4>Solves problems without asking permission</h4>
              <p>
                Engineers should be proactive in bringing new ideas to the team.
                They might spend a weekend prototyping a new interface concept
                they thought of. They might come to their team and say, we can’t
                keep building on this page, it need to be rearchitected, and
                here’s how we should do it. When building a new login screen,
                they proactively cover every edge case not previously discussed
                or specced. They do the right thing without slowing down to ask
                for permission.
              </p>

              <h4>Pushes for excellence and delight</h4>
              <p>
                A great engineer will say when the product they’re building
                isn’t good enough yet. Annoyingly for management, often when a
                product is 95% done is when the real interesting work starts.
                When you’ve checked all the important boxes, but the product
                just doesn’t feel great yet, you want engineers to push for
                better. I saw this mistake happen sometimes at Quizlet: we’d
                ship when something was good enough. It wouldn’t get a ton of
                traction. We’d iterate a bit more, but not make major changes.
                Then people would say, well, that didn’t work. In consumer
                products, users need to be delighted or they’ll move on.
              </p>

              <h4>Levels up those around them</h4>
              <p>
                A great engineer makes other engineers great too. That means
                they’ll pair program or mentor other engineers both ad-hoc and
                formally. They’re great at code reviews - they push on
                conceptual problems with code, not just cosmetic problems.
                They’ll push on people to write better tests and to rewrite
                their code if it’s confusing. They’ll research new patterns or
                tools and educate their team on how to use them. They’ll write
                and maintain documentation.
              </p>

              <h4>Goes spelunking</h4>
              <p>
                Many problems have an easy solution and a hard solution. A great
                engineer will sometimes say we can live with a quick/expedient
                solution to a problem. But often they need to go spelunking:
                traversing different layers of code to find a root cause. They
                are unafraid to explore areas they’ve never touched before, and
                they won’t rest until they’ve found the root cause of an issue.
                What appears to be an occasional and simple UI glitch might go
                much deeper. It could be a problem caused by only-in-production
                hot cache keys concentrated on one server. You need engineers
                willing to traverse from the front-end layer (maybe the UI is
                making repeated requests and that’s the real problem) to the app
                layer (maybe the cache key distribution algorithm is wrong) to
                the server layer (maybe the network is configured to rate-limit
                more than expected).
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
