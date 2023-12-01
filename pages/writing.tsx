import Link from "next/link";
import hero from "/public/heros/writing.webp";

export default function Home() {
  return (
    <>
      <div className="PageHeader Grid">
        <div className="MaxWidth Grid">
          <h1 className="PageHeadline">
            <span className="PageHeadline-Small">My</span>
            Writing
          </h1>
        </div>
      </div>

      <div className="ContentBlock">
        <div className="Content">
          <div className="MaxWidth">
            <div className="Card FirstCard CenterCard">
              <em>November 2023</em>
              <h3>
                <Link href="/how-to-not-be-late" legacyBehavior>
                  <a>How to not be late</a>
                </Link>
              </h3>
              <br />

              <em>October 2023</em>
              <h3>
                <Link href="/investment-worksheet" legacyBehavior>
                  <a>How I decide on investments</a>
                </Link>
              </h3>
              <br />

              <em>September 2023</em>
              <h3>
                <Link href="/great-engineer" legacyBehavior>
                  <a>What makes a great engineer?</a>
                </Link>
              </h3>
              <br />

              <em>September 2021</em>
              <h3>
                <Link href="/goodbye-quizlet" legacyBehavior>
                  <a>Goodbye Quizlet, Hello World</a>
                </Link>
              </h3>
              <br />
              <p>
                <em>
                  Hey, I bet you can't spot the time I signed up for a
                  once-a-month writing club!
                </em>
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
          background-image: url(${hero.src});
        }
      `}</style>
    </>
  );
}
