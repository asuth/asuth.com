import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="PageHeader Grid">
        <div className="MaxWidth Grid">
          <h1 className="PageHeadline">
            <span className="PageHeadline-Small">Where I</span>
            Write
          </h1>
        </div>
      </div>

      <div className="ContentBlock">
        <div className="Content">
          {/* <div className="MaxWidth">
            <div className="Card FirstCard CenterCard">
              <h3>Say hello, future friend</h3>
            </div>

            <div className="Card CenterCard">
              <h3>Say hello, future friend</h3>
            </div>
          </div> */}
        </div>
      </div>

      <div className="CoolBlock">
        <div className="CoolBlock2"></div>
      </div>

      <style jsx>{`
        .CoolBlock {
          height: 500px;
          width: 1000px;
          margin: 0 auto;
          background-size: 600px 600px;

          border: 3px solid #ccc;
          background-image: url(/advanced-bg/main.png);
        }

        .CoolBlock2 {
          height: 500px;
          width: 100%;
          background-size: 600px 600px;
          background-image: url(/advanced-bg/green4.png);
          -webkit-animation: rainbow 20s steps(36) infinite;
        }

        :global(:root) {
          --bg-color: var(--writingBlue);
          --dark-bg-color: var(--writingDarkBlue);
        }

        .PageHeader {
          background-size: 400px 400px;
          background-image: image-set(
            url("/writing-hero-500.webp") 1x,
            url("/writing-hero-1258.webp") 2x
          );
        }
      `}</style>
    </>
  );
}
