import hero from "/public/heros/writing.webp";
import Link from "next/link";

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
            <div className="Card FirstCard FirstCard--writing CenterCard">
              <h3>How to not be late</h3>
              <p>
                <em>November 2023 &middot; By Andrew Sutherland</em>
              </p>
              <p>
                I’ve always been a running-a-little-late person. Usually not
                egregiously. Like, six minutes late. It’s not something I’m
                proud of. It’s rude.
              </p>
              <p>
                At a certain point it got to be a problem. I wanted to fix it.
                So I made a pact with my friend Thompson. Every time I was not{" "}
                <em>five minutes early</em> to our meetings, I would have to
                donate $500 to a charity of his choosing. That’s a painful
                amount of money! I learned real quick what my problem was. I
                bought this whole life lesson for $1,500.
              </p>
              <p>
                Ok, scenario time. You have a coffee with a rando at 9am at the
                Blue Bottle in SOMA. It takes about 15 minutes to get there from
                your house. So in your head you say, I’ll leave around 8:40.
                Five minutes of buffer makes you a responsible man.
              </p>
              <p>
                This is a shit plan. It is an eyeball-once-cut-twice plan. It is
                a plan made by an optimist and an optimizer. It’s a plan that
                means you’ll say hello to Mr. Rando at 9:06.
              </p>
              <p>It’s a plan to be late.</p>
              <p>
                Let’s correct this moron (me) and make an actual plan. Upon
                closer inspection, there are many things that can go wrong:
              </p>
              <ul>
                <li>
                  The rideshare will arrive late. Their arrival estimates are
                  terrible optimists, just like you.
                </li>
                <li>You can’t find your keys. again.</li>
                <li>You need to poop before you go.</li>
                <li>You need to shower before you go.</li>
                <li>You might get dropped off a block away.</li>
                <li>You might hit above-average traffic.</li>
                <li>You put the wrong Blue Bottle in SOMA in your calendar.</li>
                <li>
                  You might get stuck behind a garbage truck on a one-way
                  street.
                </li>
              </ul>
              <p>
                Most of these things will not happen. But ONE will. Maybe even
                TWO. And your current "plan" assumes that NONE of them will
                happen.
              </p>
              <p>
                So you need a better plan. When will you shower, and how long
                does that take? What does the maps app say about trip length?
                List every single step with their o’clocks:
              </p>
              <pre>
                8:10 shower
                <br />
                8:20 get dressed, brush teeth, etc.
                <br />
                8:28 call lyft
                <br />
                8:34 lyft arrives <br />
                8:52 lyft drops off
                <br />
                8:55 cross the st, walk into shop, etc.
              </pre>
              <p>
                What you find is your default plan was <em>optimistic</em> and
                your new plan is <em>realistic</em>. There’s padding in there in
                case one thing takes a little extra time.
              </p>
              <p>
                Lastly, the easiest way to be on time is to be early. Plan to be
                5-10 minutes early to stuff. That sounds gross and non-optimal,
                I know. But having an extra moment to prepare for your meeting
                is actually good.
              </p>
              <p>
                If you make an explicit plan, and you plan to be early, you will
                almost never be late. Hey, maybe you are fixable after all!
              </p>
              <p>In summary:</p>
              <ol>
                <li>
                  Your default plan is bad. Your mind will trick you into
                  thinking it’s good.
                </li>
                <li>
                  Make an explicit step-by-step plan for timely arrival. With
                  every step of that plan, make a generous estimate. Don’t
                  choose the best case.
                </li>
                <li>Plan to be early. Early! Early! Early! </li>
              </ol>
              <p>
                P.S. You’re probably wondering -- Andrew, so you’re never late
                now, eh? And you’d be wrong. I’m still late sometimes -- less
                than I used to be, but still more than I’d like. And 100% of the
                time it’s because I reverted to default habits and didn’t make a
                plan.
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
