import cd from "/public/cd.png";
import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <div className="PageHeader">
        <div className="Content">
          <div className="MaxWidth">
            <div className="Card CenterCard">
              <div className="CenterImage">
                <Image src={cd} width={90} height={90} />
              </div>
              <h3>404 Not Found</h3>
              <p>
                I don’t know what you did, but you’re on the wrong page. Your
                only option is to{" "}
                <Link href="/">
                  <a>escape</a>
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(:root) {
          --bg-color: #999;
          --dark-bg-color: #555;
        }

        .PageHeader {
          height: auto;
          background: none;
          background-position: 125px 165px;
          border-color: #999;
          border-width: 0;
        }

        .CenterCard {
          margin-top: 50px;
          text-align: center;
          margin-bottom: 50px;
        }
      `}</style>
    </>
  );
}
