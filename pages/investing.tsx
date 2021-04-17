export default function Home() {
  const investments: Array<{
    name: string;
    leader: string;
    description: string;
  }> = [
    {
      name: "VotingWorks",
      leader: "Ben Adida",
      description: `VotingWorks is building next-generation, low-cost voting
      systems. I invested because we need inexpensive voting machines
      and auditing systems that the public can trust.`,
    },
    {
      name: "Replit",
      leader: "Amjad Madad",
      description: `Replit is building a programming environment in the browser. I invested because it’s incredibly important to make programming more accessible to everyone.`,
    },
    {
      name: "Shyft Power",
      leader: "Ugwem Eneyo",
      description: `Shyft is building hardware and software that allow buildings to seamlessly switch between grid- and non-grid energy sources. I invested because we’ll need solutions like this to defeat climate change.
      .`,
    },
    {
      name: "ToMI",
      leader: "Juan Manuel Lopera",
      description: `
        ToMI is building hardware and software that helps teachers teach with digital tools even when they don’t have an internet connection. I invested because they are building a great product for teachers that no one else is building.
        `,
    },
    {
      name: "Vanta",
      leader: "Christina Cacioppo",
      description: `
        Vanta is building software to automate security on the Internet. I invested because it’s hard to build secure software and it can’t be done without significant automated systems to make sure you’re doing it right.
        `,
    },
    {
      name: "Vercel",
      leader: "Guillermo Rauch",
      description: `
        Vercel is building a cloud-hosting platform for ultra-fast websites. I invested because they are removing a huge amount of complexity from building performant and secure websites.
        `,
    },
    {
      name: "CollegeBacker",
      leader: "Jordan Lee",
      description: `CollegeBacker is building software that makes it simple to create college savings accounts. I invested because they are making it easier for everyone, not just rich people, to save for college.`,
    },
    {
      name: "BusRight",
      leader: "Keith Corso",
      description: `
      BusRight is building a modern platform for intelligent school bus routing and tracking. I invested because...of course this should exist.`,
    },
    {
      name: "Student Conservation Association",
      leader: "Stephanie Meeks",
      description: `
      The SCA transformed my life when I was age 14 through 16. It taught me about service to a community and country, and about building lifelong bonds through hard work. I invested (and joined the board) because I wanted to give back to organization that gave me so much.
      .`,
    },
    {
      name: "California Yimby",
      leader: "Brian Hanlon",
      description: `
        California is a neat place, but it leads the nation in its real poverty rate. Its anti-building housing policies push way too many people into housing instability and homelessness. Teachers can’t afford to live where they teach. I invested because California Yimby is leading the charge to create an abundant and equitable supply of housing
        .`,
    },
    {
      name: "PrismsVR",
      leader: "Anurupa Ganguly",
      description: `PrismsVR is a math education startup building spatial understanding.`,
    },
  ];

  let counter = 2;
  function resetCounter() {
    counter = 0;
    return true;
  }

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

            <div className="Investments">
              {investments.map((investment, k) => (
                <>
                  <div
                    className={`InvestmentCard ${
                      ["GreenCard", "SalmonCard", "YellowCard"][k % 3]
                    }`}
                  >
                    <h3>{investment.name}</h3>
                    <div className="InvestmentInfo">
                      Leader: {investment.leader}
                    </div>
                    <p>{investment.description}</p>
                  </div>
                  {++counter === 4 && resetCounter() ? (
                    <>
                      <div className="SpacerCard"></div>
                      <div className="SpacerCard"></div>
                    </>
                  ) : null}
                </>
              ))}
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

        .InvestmentCard {
          background: #fff;
          box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
        }

        .SpacerCard {
        }

        .Investments {
          display: grid;
          gap: 40px;
          grid-template-columns: 1fr 1fr 1fr;
        }

        .SpacerCard {
          width: 20px;
        }

        .InvestmentCard p {
          padding: 30px;
        }

        .InvestmentCard h3 {
          padding: 15px 30px;
          font-size: 25px;
          text-transform: uppercase;
        }

        .InvestmentCard .InvestmentInfo {
          padding: 15px 30px;
        }

        .GreenCard .InvestmentInfo {
          background: var(--green);
        }

        .SalmonCard .InvestmentInfo {
          background: var(--salmon);
        }

        .YellowCard .InvestmentInfo {
          background: var(--yellow);
        }

        h3 {
          font: 40px var(--headline-font);
        }

        .CenterCard {
          clear: both;
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
