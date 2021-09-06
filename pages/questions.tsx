import hero from "/public/heros/questions.webp";
import toast from "/public/toast.png";
import computer from "/public/computer.png";
import coffee from "/public/coffee.png";
import homes from "/public/homes.png";
import stump from "/public/stump.png";
import Link from "next/link";
import Image from "next/image";

export default function Questions() {
  return (
    <>
      <div className="PageHeader Grid">
        <div className="MaxWidth Grid">
          <h1 className="PageHeadline">
            <span className="PageHeadline-Small">At 2AM, I ponder these</span>
            Questions
          </h1>
        </div>
      </div>

      <div className="ContentBlock">
        <div className="Content">
          <div className="MaxWidth">
            <div className="Card FirstCard CenterCard">
              <h3>Your Instructions</h3>
              <p>
                I've collected important questions and put them on this page, in
                the hopes that a kindly stranger (you!) might offer a compelling
                answer, or perhaps a promising lead or book recommendation.
                Please{" "}
                <Link href="/contact">
                  <a>contact me</a>
                </Link>{" "}
                if you have something to share!
              </p>
            </div>
            <div className="LeftCard Card">
              <div className="CenterImage">
                <Image src={coffee} width={200} height={200} />
              </div>

              <h4>
                How do you make teaching a high-status profession in the U.S.?
              </h4>
              <p>
                Doctors and lawyers perform service jobs that are well-respected
                in society. Teachers are just as important, but they don't get
                the same respect or pay. If teaching were a high-status
                profession, it would be more competitive to get into, it would
                pay better, and teachers would have more latitude to be creative
                and autonomous. Children would benefit enormously as a result.
              </p>
            </div>
            <div className="RightCard Card">
              <div className="CenterImage">
                <Image src={homes} width={225} height={225} />
              </div>
              <h4>
                How do you create a successful mass movement for greater housing
                density?
              </h4>

              <p>
                Many well-meaning folks are against developing more housing,
                often because of misguided environmentalism, anti-developer
                sentiment, or anti-change conservatism. What efforts could
                convince a majority of Americans that making cities more dense
                is good for everyone? If you did this, we could ease rent
                burdens, reduce wealth gaps, lower carbon emissions, and live in
                a more egalitarian and integrated society.
              </p>
              <p>
                My work on the board of{" "}
                <a href="https://cayimby.org/">California YIMBY's</a>{" "}
                educational arm fits with this goal.
              </p>
            </div>
            <div className="LeftCard Card">
              <div className="CenterImage">
                <Image src={computer} width={180} height={180} />
              </div>
              <h4>How do you bring about universal programming literacy?</h4>
              <p>
                I was lucky to teach myself programming starting around age 13.
                Most children never learn to program a computer, and
                increasingly live at the mercy of the relatively small
                priesthood of programmers. In a world run by software,
                programming literacy should be on par with math and reading as a
                basic skill taught to everyone. If we did this, we'd live in a
                more empowered society and we'd be more capable of understanding
                and shaping the changes brought by software.
              </p>
              <p>
                Two of my favorite investments are working on this problem:{" "}
                <a href="https://replit.com">Replit</a> by lowering the barriers
                to entry to programming, and{" "}
                <a href="https://dynamicland.org">Dynamicland</a> by redefining
                computing itself.
              </p>
            </div>
            <div className="RightCard Card">
              <div className="CenterImage">
                <Image src={stump} width={180} height={180} />
              </div>
              <h4>How can I solve my chronic sinus infections?</h4>
              <p>
                I have had low-grade sinus infections my whole life. I've tried
                sinus surgery and a variety of other things and nothing seems to
                help. This doesn't stop me from doing most things, but it is an
                annoying issue I would love to fix.
              </p>
            </div>

            <div className="LeftCard Card ToastCard">
              <Image src={toast} className="Toast" width={250} height={250} />
              <h4>Why is buttery toast so unreasonably good?</h4>
              <p>It just doesn't make sense. </p>
            </div>

            {/*             
            <h2>Your Questions, Answered</h2>

            <div className="LeftCard Card">
              <h3>What are my values?</h3>

              <p>I post these publicly to remind myself what matters to me.</p>
              <h4>Immersion</h4>
              <p>
                Genuine understanding comes when you’re deep-soaking in the tub
                of new experience. That means changing your environment,
                changing the people you’re around, and staying a while. I try to
                do this as much as I can.
              </p>
              <h4>Treat People Well</h4>
              <p>
                Treating people well is so relatively easy and pays such
                handsome rewards. If you aren’t doing this, what are you doing?
                I gave a{" "}
                <a href="https://www.youtube.com/watch?v=-Xj2DnCz-PI">
                  commencement speech
                </a>{" "}
                on this topic.
              </p>
              <h4>Set High Expectations</h4>
              <p>
                A meaningful gift to give is to help someone raise their own
                expectations of themselves. People are capable of way more than
                they know, and they’ve always got bad stories in their heads
                about why they can’t do such-and-such thing. Rid yourself of
                that silliness, and help others do the same.
              </p>
            </div> */}
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(:root) {
          --bg-color: var(--breadPurple);
          --dark-bg-color: var(--darkBreadPurple);
        }

        .PageHeader {
          background-image: url(${hero.src});
        }
      `}</style>
    </>
  );
}
