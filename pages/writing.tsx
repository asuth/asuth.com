import Link from "next/link";
import hero from "/public/heros/writing.webp";
import Meta from "../components/meta";

export default function () {
  return (
    <>
      <Meta
        title="Writing"
        description="Hey, I bet you can’t spot the time I signed up for a once-a-month writing club!"
      />
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
              <em>December 2023</em>
              <h3>
                <Link href="/building-a-demo-culture">
                  Giggles over mockups: Building a demo culture
                </Link>
              </h3>
              <br />

              <em>November 2023</em>
              <h3>
                <Link href="/how-to-not-be-late">How to not be late</Link>
              </h3>
              <br />

              <em>October 2023</em>
              <h3>
                <Link href="/investment-worksheet">
                  How I decide on investments
                </Link>
              </h3>
              <br />

              <em>September 2023</em>
              <h3>
                <Link href="/great-engineer">What makes a great engineer?</Link>
              </h3>
              <br />

              <em>September 2021</em>
              <h3>
                <Link href="/goodbye-quizlet">
                  Goodbye Quizlet, Hello World
                </Link>
              </h3>
              <br />
              <p>
                <em>
                  Hey, I bet you can’t spot the time I signed up for a
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
