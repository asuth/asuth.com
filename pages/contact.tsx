import Meta from "../components/meta";
import hero from "../public/heros/contact.webp";

export default function () {
  return (
    <>
      <Meta
        title="Contact"
        description="If you’re on this page, you’re already considering emailing me, so just do it, eh?"
      />
      <div className="PageHeader">
        <div className="Content">
          <div className="MaxWidth">
            <div className="Card  CenterCard">
              <h3>Say hello, future friend</h3>
              <p>
                The best way to reach me is by email at{" "}
                <a href="mailto:asuth@asuth.com">asuth@asuth.com</a>. If you’re
                on this page, you’re already considering emailing me, so just do
                it, eh?
              </p>

              <p>
                You can also follow me on Twitter at{" "}
                <a href="https://twitter.com/asuth">@asuth</a>.
              </p>

              <p>
                I can also be found on{" "}
                <a href="https://www.linkedin.com/in/asuth">LinkedIn</a>, though
                I only accept requests from people I already know.
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
          background-image: url(${hero.src});
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
