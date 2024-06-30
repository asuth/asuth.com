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
                Howard's Memorial will be held at 10am on Saturday, July 13,
                2024 at the{" "}
                <a href="https://www.berkeleycityclub.com">
                  Berkeley City Club
                </a>
                . All who knew Howard are welcome to attend.
              </p>
              <p>
                We will be live-streaming the service. This page will be updated
                with a link to the stream.
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
      `}</style>
    </>
  );
}
