import Meta from "../components/meta";

export default function () {
  return (
    <>
      <Meta title="Howard Sutherland Memorial" description="" />
      <div className="PageHeader">
        <div className="Content">
          <div className="MaxWidth">
            <div className="Card  CenterCard">
              <h3>Howard Sutherland Memorial</h3>
              <p>
                Howard's Memorial will be held at 10am Pacific Time on Saturday,
                July 13, 2024 at the{" "}
                <a href="https://www.berkeleycityclub.com">
                  Berkeley City Club
                </a>
                . All who knew Howard are welcome to attend.
              </p>
              <p>
                <a href="https://us02web.zoom.us/j/84868950583?pwd=AniHTvmbDi3nv5MkpHf7MTSrGodaiM.1">
                  Click here
                </a>{" "}
                to view the livestream via Zoom. We aim to start the formal
                portion of the service at 10:45am Pacific Time.
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
