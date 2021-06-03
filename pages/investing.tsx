export default function Home() {
  const investments: Array<{
    name: string;
    leader: string;
    description: string;
    link: string;
    category: string;
  }> = [
    {
      name: "VotingWorks",
      leader: "Ben Adida",
      description: `VotingWorks is building next-generation, low-cost voting
      systems. I invested because we need inexpensive voting machines
      and auditing systems that the public can trust.`,
      category: "Civic Tech",
      link: "https://voting.works/",
    },
    {
      name: "Replit",
      leader: "Amjad Masad",
      description: `Replit is building a programming environment in the browser. I invested because it’s incredibly important to make programming more accessible to everyone.`,
      link: "https://replit.com/",
      category: "Developer Tools",
    },
    {
      name: "Shyft Power",
      leader: "Ugwem Eneyo",
      description: `Shyft is building hardware and software that allow buildings to seamlessly switch between grid- and non-grid energy sources. I invested because this  could enable developing countries to leapfrog past old grid technologies.`,
      category: "Climate Tech",
      link: "https://shyftpower.com/",
    },
    {
      name: "ToMI",
      leader: "Juan Manuel Lopera",
      description: `
        ToMI is building hardware and software that helps teachers teach with digital tools even when they don’t have an internet connection. I invested because they are bringing digital technology to classrooms that have never had it before.
        `,
      category: "Education Tech",
      link: "https://tomi.digital/",
    },
    {
      name: "Vanta",
      leader: "Christina Cacioppo",
      description: `
        Vanta is building software to automate security on the Internet. I invested because it’s hard to build secure software and it can’t be done without significant automated systems to make sure you’re doing it right.
        `,
      link: "https://www.vanta.com/",
      category: "Security Tools",
    },
    {
      name: "Vercel",
      leader: "Guillermo Rauch",
      description: `
        Vercel is building a cloud-hosting platform for ultra-fast websites. I invested because they are removing a huge amount of complexity from building performant and secure websites.
        `,
      link: "https://vercel.com/",
      category: "Developer Tools",
    },
    {
      name: "CollegeBacker",
      leader: "Jordan Lee",
      description: `CollegeBacker is building software that makes it simple to create college savings accounts. I invested because they are making it easier for everyone, not just rich people, to save for college.`,
      link: "https://collegebacker.com/",
      category: "Education Tech",
    },
    {
      name: "BusRight",
      leader: "Keith Corso",
      description: `
      BusRight is building a modern platform for intelligent school bus routing and tracking. I invested because school buses are a huge public transportation system that could be run much more effectively.`,
      link: "https://busright.com/",
      category: "Education Tech",
    },
    {
      name: "Student Conservation Association",
      leader: "Stephanie Meeks",
      description: `
      The SCA transformed my life when I was age 14 through 16. It taught me about service to a community and country, and about building lifelong bonds through hard work. I invested (and joined the board) because I wanted to give back to organization that gave me so much.`,
      link: "https://www.thesca.org/",
      category: "Youth Development",
    },
    {
      name: "California Yimby",
      leader: "Brian Hanlon",
      description: `
        California is a neat place, but it leads the nation in its real poverty rate. Its anti-building housing policies push way too many people into housing instability and homelessness. Teachers can’t afford to live where they teach. I invested because California Yimby is leading the charge to create an abundant and equitable supply of housing.
        `,
      link: "https://cayimby.org/",
      category: "Policy Advocacy",
    },
    {
      name: "Hidden Genius Project",
      leader: "Brandon Nicholson",
      description: `
          The Hidden Genius Project trains Black Male youth in technology and leadership skills. I invested because creating young leaders can have unpredictable and massive-scale impact down the line.
          `,
      link: "https://www.hiddengeniusproject.org/",
      category: "Youth Development",
    },

    {
      name: "PrismsVR",
      leader: "Anurupa Ganguly",
      description: `PrismsVR is building a virtual reality experience that helps math students develop their spatial reasoning. I invested because students need radical new ways to develop their math understanding and intuition.`,
      link: "https://www.prismsvr.com/",
      category: "Education Tech",
    },
    {
      name: "Synthesis",
      leader: "Chrisman Frank",
      description: `Synthesis is building multiplayer learning games that get students to discuss complex strategies and work in teams. I invested because I love games that prompt deep thought and discussion.`,
      link: "https://www.synthesis.is/",
      category: "Education Tech",
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
                Investing is how I glimpse the future. Both for-profit and
                nonprofit organizations can do an immense amount of good, so I
                invest in both. The investment reasons I give below are mostly
                post-hoc rationalizations. My criteria for investing is largely
                whether I believe in the leader and think they are capable of
                greatness. My favorite areas to invest in are education, climate
                change, housing, and developer tools.
              </p>
              <p>
                If you think I might be a good investor for you, please send an
                email to investments@asuth.com with the following: a description
                of a teacher who changed your life, a description of the high
                expectations you have for yourself, and the materials about your
                endeavor.
              </p>
            </div>

            <div className="Investments">
              {investments.map((investment, k) => (
                <>
                  <div
                    key={`investment${k}`}
                    className={`InvestmentCard ${
                      ["GreenCard", "SalmonCard", "YellowCard"][k % 3]
                    }`}
                  >
                    <div className="InvestmentName">
                      <img src="sca-logo.png" alt="SCA logo" />
                      <h3>{investment.name}</h3>
                    </div>
                    <div className="InvestmentInfo">
                      <span>
                        Led by {investment.leader}
                        <br /> {investment.category}
                      </span>
                      <a className="btn" href={investment.link}>
                        Visit
                      </a>
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
          display: inline-block;
          width: 33%;
          background: #fff;
          margin: 0 5% 80px 0;
          box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
        }

        .SpacerCard {
          display: inline-block;
          width: 20%;
        }

        .Investments {
          display: flex;
          flex-wrap: wrap;
        }

        .InvestmentCard p {
          padding: 25px;
        }

        .InvestmentCard img {
          width: 222px;
          margin: 0;
          display: none;
          margin: 10px 0 0 0;
        }

        .InvestmentCard h3 {
          font-size: 25px;
          text-transform: uppercase;
          display: inline-block;
        }

        .InvestmentName {
          padding: 25px 25px 0 25px;
          // text-align: center;
        }

        .InvestmentInfo {
          padding: 15px 25px 25px 25px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
        }

          .InvestmentInfo span {
            display: inline-block;
            font-size: 0.8rem;
          }

          .InvestmentInfo .btn {
            display inline-block;
            margin-left: 15px;
          }



        .GreenCard .InvestmentInfo, .GreenCard .InvestmentName {
          background: var(--green);
        }

        .SalmonCard .InvestmentInfo, .SalmonCard .InvestmentName {
          background: var(--salmon);
        }

        .YellowCard .InvestmentInfo, .YellowCard .InvestmentName {
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
