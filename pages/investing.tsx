export default function Home() {
  return (
    <>
      <div className="PageHeader Grid">
        <div className="MaxWidth Grid">
          <h1 className="PageHeadline">
            <span className="PageHeadline-Small">I MAKE</span>
            INVESTMENTS
          </h1>
        </div>
      </div>

      <div className="ContentBlock">
        <div className="Content">
          <div className="MaxWidth">
            <div className="Card FirstCard">
              <p>
                Investing in good people with good ideas is my jam. Both
                for-profit and nonprofit organizations can do an immense amount
                of good, so I invest in both. I like education, climate change,
                housing, and developer tools.
              </p>
              <p>
                The reasons given below for investing are{" "}
                <b>complete fabrications</b>. Or, shall we say, post-hoc
                rationalizations. Most of my criteria is whether I believe in
                the leader and think they are capable of greatness.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(:root) {
          --bg-color: var(--green);
          --dark-bg-color: var(--dark-green);
          --hero-url: url(/investing-hero.webp);
        }

        .PageHeader {
          background-size: 500px 500px;
        }

        h3 {
          font: 40px var(--headline-font);
        }

        .PortraitCard {
          height: 450px;
          padding: 0;
        }

        .RightCardText {
          font: 30px var(--headline-font);
          padding: 120px 40px;
          float: left;
          width: 30%;
        }

        .CenterCard {
          clear: both;
        }

        .Hey {
          font-size: 60px;
        }

        ul {
          list-style: square;
        }

        li {
          margin-bottom: 20px;
          list-style: dot;
          margin-left: 20px;
        }

        li:last-child {
          margin-bottom: 0;
        }

        .RightCard {
          float: right;
          transform: rotate(2deg);
        }

        .LeftCard {
          float: left;
          transform: rotate(-1deg);
        }

        p {
          margin-bottom: 40px;
        }

        p:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </>
  );
}
