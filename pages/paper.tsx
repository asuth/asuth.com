import Meta from "../components/meta";
import hero from "/public/heros/writing.webp";
import Link from "next/link";
import Image from "next/image";

export default function () {
  return (
    <>
      <Meta
        title="Paper"
        description="You think paper is from the past but I think it's from the future."
      />
      <div className="PageHeader Grid">
        <div className="MaxWidth Grid"></div>
      </div>

      <div className="ContentBlock">
        <div className="Content">
          <div className="MaxWidth">
            <div className="Card FirstCard FirstCard--writing CenterCard SpecialCard">
              <Image
                alt="For the past year I have been researching PAPER as a medium, and explorings its potential in our digital world. It has many advantages. It's calm, it exists, it's expressive, it's cheap, it's static, and it has possibility. Of course, it can be harder to edit, share, manipulate and store. But paper can be imbued with computery advantages, and if that is done well, a paper operating system could be verrrry interesting. -Andrew"
                className="SpecialImage"
                src="/images/paper.jpg"
                fill={true}
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="BackToHome">
              <Link href="/" className="NavBtn">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(:root) {
          --bg-color: var(--writingBlue);
          --dark-bg-color: var(--writingDarkBlue);
        }

        .PageHeader {
          background-image: url(${hero.src});
        }

        .SpecialCard {
          padding: 0;
          height: 900px;
        }

        @media only screen and (max-width: 768px) {
          .SpecialCard {
            height: 780px;
          }
        }

        .SpecialImage {
          width: 100% !important;
          height: auto;
        }
      `}</style>
    </>
  );
}
