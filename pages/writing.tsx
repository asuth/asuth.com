import Image from "next/image";

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
              <h3>
                How do you raise the status of the teaching profession to be
                similar to doctors or lawyers?
              </h3>

              <p>Blurbadurb</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .FirstCard {
          margin-top: calc(-128px / 2 - 50px);
        }

        :global(:root) {
          --bg-color: var(--writingBlue);
          --dark-bg-color: var(--writingDarkBlue);
        }

        .PageHeader {
          height: 70vh;
          background-size: 600px 600px;
          background-image: image-set(
            url("/writing-hero-500.webp") 1x,
            url("/writing-hero-1258.webp") 2x
          );
        }
      `}</style>
    </>
  );
}
