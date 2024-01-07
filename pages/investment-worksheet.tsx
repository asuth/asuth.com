import Meta from "../components/meta";
import hero from "/public/heros/writing.webp";
import Link from "next/link";

export default function () {
  return (
    <>
      <Meta
        title="How I decide on investments"
        description="Seeing a lot of investment opportunities has meant I needed a rigorous process. So I made my own worksheet."
      />
      <div className="PageHeader Grid">
        <div className="MaxWidth Grid"></div>
      </div>

      <div className="ContentBlock">
        <div className="Content">
          <div className="MaxWidth">
            <div className="Card FirstCard FirstCard--writing CenterCard">
              <h3>How I decide on investments</h3>
              <p>
                <em>October 2023 &middot; By Andrew Sutherland</em>
              </p>

              <p>
                I’ve made more than 100 investment decisions over the last 7
                years. Most are nos, but some become{" "}
                <Link href="/investments">investments</Link>. They could be
                for-profit companies, non-profits, or political candidates or
                projects. Seeing a lot of opportunities has meant I needed a
                rigorous process. So I made my own worksheet. When I’m done
                filling it out, it’s clear to me if I want to invest or not.
                Writing is thinking, after all. This tool is nice because I can
                look later on to see if I made good decisions. Here are the
                questions I use:
              </p>
              <h4>What are they building?</h4>
              <p>
                I ask this one first because it’s helpful to me to describe in
                my own words what the thing is. This makes sure I actually
                understand what they’re doing.
              </p>

              <h4>Are they building the world I want to live in?</h4>
              <p>
                I want to live in a world with excellent education, excellent
                cities, and excellent computers. I want a world of abundance,
                and I want to see smaller gaps between rich and poor. If I can’t
                tell myself a story for how this investment works towards these
                goals, it’s not worth it for me.
              </p>

              <h4>Would I want to work for this person?</h4>
              <p>
                This is my favorite question, and the one most frequently
                dispositive. I see some really interesting ideas. But sometimes
                founders seem too bought into their own hype. They might be
                visionary but very hard to work with. Asking if I would work for
                someone is a good proxy for if I think high-caliber people would
                work for this person. At the end of the day, the only way to
                make something successful is by hiring great people to help you.
                I’ve avoided a number of companies that have later blown up
                because of this question. Conversely, I’ve made some great
                investments that were shaky on other fronts but the person was
                someone I’d want to work for.
              </p>

              <h4>What does wild success look like? </h4>
              <p>
                If everything goes right, what happens? This is a useful
                exercise because things are usually small when you invest, but
                could become big. It wasn’t clear for years that Quizlet could
                be a massive education company. It wasn’t clear that Replit
                would be big. Imagining a shiny future helps me get excited
                about the opportunity.
              </p>

              <h4>
                Does doing this deal aid my “Principal Agency”? How would I get
                involved?
              </h4>
              <p>
                I aim to be a principal agent - to make things happen myself,
                not just help others make things happen. My interests are
                cities, computers, and education. If there’s something that
                would help me on my own projects, that’s exciting. If there’s
                something I can help a lot with, that’s exciting. If it’s
                interesting but I have no value to add besides money, it’s hard
                to justify. Other people can make that investment.
              </p>

              <h4>Do I have a gender or other bias in this decision?</h4>
              <p>
                Writing this down can help me see something I’m overlooking. It
                can be harder for women to network into fundraising circles that
                are mostly men. Someone who has conquered a lot of personal
                adversity but is just starting out in business, for example,
                could be a very good bet.
              </p>

              <h4>What are the terms of this deal? How was it sourced?</h4>
              <p>
                If someone I respect sent this to me, that carries weight.
                Writing about this might provoke me to negotiate for a better
                deal or understand its economics better. This is also just
                useful to write somewhere so I can see it later.
              </p>

              <h4>What other pros and cons are there?</h4>
              <p>
                Sometimes a thought doesn’t fit in any of the above buckets, but
                is still important. This is near the end so by this point my
                thoughts are flowing freely. I often have surprising insights
                here.
              </p>

              <h4>What is the “Single Decisive Reason” to do this or not?</h4>
              <p>
                Here I write my final decision in one simple sentence. I nicked
                this from Reid Hoffman via{" "}
                <a href="https://blog.superhuman.com/single-decisive-reason-decision-making-for-fast-scaling-startups/">
                  Rahul Vohra
                </a>
                . Simply: “You should have one overwhelming reason to do
                something. When you have multiple, it’s often a fuzzy decision,
                not well made.”
              </p>

              <p>
                Writing a singular reason often provides me a lot of clarity. It
                also is a great tie-in to the next part.
              </p>

              <h4>Okay, now write the email:</h4>
              <p>
                This isn’t a question, but it’s the last step of the worksheet.
                By now, my reasoning is clear. Almost all decisions mechanically
                require an email to share a decision, so I might as well write
                it now. I can usually scooch my single decisive reason into an
                email, along with a couple more sentences, and boom. Decision
                made!
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
