import Meta from "../components/meta";

export default function () {
  return (
    <>
      <Meta title="Howard Sutherland Memorial" description="" />
      <meta name="robots" content="noindex" />
      <div className="PageHeader">
        <div className="Content">
          <div className="MaxWidth">
            <div className="Card  CenterCard">
              <h3>Howard Sutherland Memorial</h3>
              <p>
                Howard's Memorial was held at 10am on Saturday, July 13, 2024 at
                the{" "}
                <a href="https://www.berkeleycityclub.com">
                  Berkeley City Club
                </a>
                .
              </p>
              <p>
                <b>
                  <a href="https://drive.google.com/file/d/1pOladLVT7sHVYA2o3GOZPQBwOuCqbsxt/view?usp=sharing">
                    Click here
                  </a>
                </b>{" "}
                to view the recording of the ceremony.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(:root) {
          --bg-color: #8bd6f3;
          --dark-bg-color: #7dbcdb;
        }

        .PageHeader {
          height: auto;
          background: #7dbcdb;
          background-position: 155px -10px;
        }

        .CenterCard {
          margin-top: 50px;
          margin-bottom: 50px;
        }

        :global(.LogoWrap),
        :global(.Nav) {
          display: none;
        }

        :global(.Page) {
          top: 0 !important;
        }
        :global(.PageHeader) {
          height: 100vh !important;
        }
      `}</style>
    </>
  );
}
