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
                  If this appears to be one of those elaborate websites with
                  just two blog posts on it, you are indeed perceptive.
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
