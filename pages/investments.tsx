import hero from "/public/heros/investments.webp";
import Link from "next/link";
import React, { ReactElement } from "react";

export default function Investments() {
  /*
  function shuffleArray<T>(array: Array<T>): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }*/

  const investments: Array<{
    name: string;
    leader: string;
    description: string | ReactElement;
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
      description: `Shyft is building hardware and software that allow buildings to seamlessly switch between grid and non-grid energy sources. I invested because this could enable developing countries to leapfrog past old grid technologies.`,
      category: "Climate Tech",
      link: "https://shyftpower.com/",
    },
    {
      name: "ToMI",
      leader: "Juan Manuel Lopera",
      description: `
        ToMI is building hardware and software that help teachers teach with digital tools even when they don’t have an internet connection. I invested because they are bringing digital technology to classrooms that have never had it before.
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
      category: "Developer Tools",
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
      name: "Backer",
      leader: "Jordan Lee",
      description: `Backer is building software that makes it simple to create college savings accounts. I invested because they are making it easier for everyone, not just rich people, to save for college.`,
      link: "https://backer.com/",
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
      The SCA transformed my life when I was in high school. It taught me about service to a community and country, and about building lifelong bonds through hard work. I invested (and joined the board) because I wanted to give back to an organization that gave me so much.`,
      link: "https://www.thesca.org/",
      category: "Youth Development",
    },
    {
      name: "California Yimby",
      leader: "Brian Hanlon",
      description: `
        California is a neat place, but its anti-development housing policies push way too many people into housing instability and homelessness. Teachers can’t afford to live where they teach. I invested (and joined the board) because California YIMBY is leading the charge to create an abundant supply of housing for everyone.
        `,
      link: "https://cayimby.org/",
      category: "Housing Policy",
    },
    {
      name: "Hidden Genius Project",
      leader: "Brandon Nicholson",
      description: `
          The Hidden Genius Project trains black male youth in technology and leadership skills. I invested because creating young leaders can have unpredictable and massive-scale impact down the line.
          `,
      link: "https://www.hiddengeniusproject.org/",
      category: "Youth Development",
    },

    {
      name: "PrismsVR",
      leader: "Anurupa Ganguly",
      description: (
        <>
          PrismsVR is building a virtual reality experience that helps math
          students develop their spatial reasoning. I invested because students
          need radical new ways to develop their math understanding and
          intuition.
        </>
      ),
      link: "https://www.prismsvr.com/",
      category: "Spatial Computing",
    },
    {
      name: "Synthesis",
      leader: "Chrisman Frank",
      description: `Synthesis is building multiplayer learning games that get students to discuss complex strategies and work in teams. I invested because I love games that prompt deep thought and discussion.`,
      link: "https://www.synthesis.is/",
      category: "Education Tech",
    },
    {
      name: "Dynamicland",
      leader: "Bret Victor",
      description: `Dynamicland is building a more friendly and communal computing environment from the ground up. I invested because new models of computing, outside the bounds of shrink-wrapped consumer software, are desperately needed.`,
      link: "https://dynamicland.org/",
      category: "Spatial Computing",
    },
    {
      name: "Charm Industrial",
      leader: "Peter Reinhardt",
      description: (
        <>
          Charm Industrial is capturing CO<sub>2</sub> from the atmosphere,
          converting it to bio-oil, and pumping it underground. I invested
          because they are moving faster than anyone in building large-scale
          carbon removal technology.
        </>
      ),
      link: "https://charmindustrial.com",

      category: "Climate Tech",
    },
    {
      name: "Terner Center",
      leader: "Ben Metcalf",
      description: (
        <>
          The Terner Center for Housing Innovation at UC Berkeley does the most
          rigorous research into the causes of and solutions to California's
          housing crisis. I invested because we will make much better housing
          policy decisions if they're backed by good research.
        </>
      ),
      link: "https://ternercenter.berkeley.edu",
      category: "Housing Policy",
    },
    {
      name: "Kosmik",
      leader: "Paul Rony",
      description: (
        <>
          Kosmik is building a digital canvas that helps you think spatially. I
          invested because I want to see spatial reasoning become a core part of
          everyday computing.
        </>
      ),
      link: "https://www.kosmik.app",
      category: "Spatial Computing",
    },
    {
      name: "Sonic Sphere",
      leader: "Ed Cooke",
      description: (
        <>
          Sonic Sphere is building spherical concert halls with mind-blowing
          many-channel audio. I invested because I want real-life and social
          computing to be better than the metaverse.
        </>
      ),
      link: "https://www.sonic-sphere.com",
      category: "Spatial Computing",
    },
  ];

  // shuffleArray(investments);

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
            <span className="PageHeadline-Small">Here are my</span>
            Investments
          </h1>
        </div>
      </div>

      <div className="ContentBlock">
        <div className="Content">
          <div className="MaxWidth">
            <div className="Card FirstCard">
              <p>
                Investing is my way to see the future. I invest in both
                for-profit and non-profit organizations, so you’ll see them
                mixed together in my portfolio below. The reasons I provide for
                investing are kinda post-hoc rationalizations. Honestly, my
                criterion for investing is primarily whether I believe the
                leader is capable of greatness. My favorite areas to invest in
                are education, climate, housing, developer tools, and tools for
                thought.
              </p>
              <p>
                If I would be a good investor for you, please send an email to{" "}
                <a href="mailto:investments@asuth.com">investments@asuth.com</a>{" "}
                with the following: a description of a teacher who changed your
                life and information about your endeavor.
              </p>
            </div>

            <div className="Investments" key="investments">
              {investments.map((investment, k) => (
                <React.Fragment key={`investment${k}`}>
                  <div
                    className={`InvestmentCard ${
                      ["GreenCard", "SalmonCard", "YellowCard"][k % 3]
                    }`}
                  >
                    <div className="InvestmentName">
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
                    <React.Fragment key={`spacer${k}`}>
                      <div className={`SpacerCard`}></div>
                      <div className={`SpacerCard`}></div>
                    </React.Fragment>
                  ) : null}
                </React.Fragment>
              ))}
            </div>
            <div className="BackToHome">
              <Link href="/" legacyBehavior>
                <a className="NavBtn">Back to Home</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
      :global(:root) {
        --bg-color: var(--green);
        --dark-bg-color: var(--dark-green);
        --hero-url: url(/wallpapers/chairs@2x.jpg);
      }

      .PageHeader {
        background-image: url(${hero.src});
        background-position: 0 20px;
      }

      .InvestmentCard {
        display: inline-block;
        width: 36%;
        background: #fff;
        margin: 0 5% 80px 0;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
      }

      .SpacerCard {
        display: inline-block;
        width: 14%;
      }

      @media only screen and (max-width: 850px) {
        .InvestmentCard {
          width: 47.5%;
          margin: 0 5% 60px 0;
        }

        .InvestmentCard:nth-child(even) {
          margin-right: 0;
        }

        .SpacerCard {
          display: none;
        }
      }

      @media only screen and (max-width: 600px) {
        .InvestmentCard {
          width: 100%;
          margin: 0 0 40px 0;
        }
        .SpacerCard {
          display: none;
        }
      }

      .Investments {
        display: flex;
        flex-wrap: wrap;
      }

      .InvestmentCard p {
        padding: 25px;
      }

      .InvestmentCard h3 {
        font: 25px var(--headline-font);
        display: inline-block;
        margin-bottom: 0;
      }

      .InvestmentName {
        padding: 25px 25px 0 25px;
      }

      .InvestmentInfo {
        padding: 15px 25px 25px 25px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
      }

        .InvestmentInfo span {
          display: inline-block;
          font-size: 0.8rem;
        }

        .InvestmentInfo .btn {
          display inline-block;
          text-transform: uppercase;
          font: 12px var(--headline-font);
          margin-left: 10px;
          border: 1px solid #000;
          padding: 4px 6px;
          border-radius: 3px;
        }
          .btn:hover {
            background: #000;
          }

          .GreenCard .btn:hover {
            color: var(--green);
          }

          .SalmonCard .btn:hover {
            color: var(--salmon);
          }

          .YellowCard .btn:hover {
            color: var(--yellow);
          }

          .btn:active {
            transform: rotate(3deg);
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
    `}</style>
    </>
  );
}
