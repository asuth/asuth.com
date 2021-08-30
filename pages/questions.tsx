import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="PageHeader Grid">
        <div className="MaxWidth Grid">
          <h1 className="PageHeadline">
            <span className="PageHeadline-Small">At 2AM, I ponder these</span>
            Good Questions
          </h1>
        </div>
      </div>

      <div className="ContentBlock">
        <div className="Content">
          <div className="MaxWidth">
            <div className="Card FirstCard CenterCard">
              <h3>Your Instructions</h3>
              <p>
                I've collected questions that motivate and excite me and put
                them on this page, in the hopes that a kindly stranger (you!)
                might offer a compelling answer, or perhaps an interesting lead
                or book recommendation. Please{" "}
                <Link href="/contact">
                  <a>contact me</a>
                </Link>{" "}
                if you have something to share!
              </p>
            </div>
            <div className="LeftCard Card">
              <h4>
                How do you make teaching a high-status profession in the USA?
              </h4>
              <p>
                Doctors and lawyers perform service jobs that are well-respected
                in society. Teaching is just as important, but doesn't get the
                same respect or pay. Teaching
              </p>
            </div>
            <div className="RightCard Card">
              <h4>
                How do you create a majority movement that supports higher
                housing density?
              </h4>
            </div>
            <div className="LeftCard Card">
              <h4>
                How do you make programming literacy a universal basic skill, on
                par with math and reading?
              </h4>
            </div>
            <div className="LeftCard Card">
              <h4>What should I do about the climate crisis?</h4>
            </div>

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
          background-size: 600px 600px;
          background-image: image-set(
            url("/homes.png") 1x,
            url("/homes.png") 2x
          );
        }
      `}</style>
    </>
  );
}
