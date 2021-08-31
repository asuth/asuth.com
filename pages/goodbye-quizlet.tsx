import Image from "next/image";

export default function GoodbyeQuizlet() {
  return (
    <>
      <div className="PageHeader Grid">
        <div className="PageHeaderRainbow Grid">
          <div className="MaxWidth Grid"></div>
        </div>
      </div>

      <div className="ContentBlock">
        <div className="Content">
          <div className="MaxWidth">
            <div className="Card FirstCard CenterCard">
              <h3>
                Goodbye Quizlet
                <br /> Hello New Thing
              </h3>

              <p>
                <em>June 2021</em>
              </p>
              <p>
                I started Quizlet because I wanted a tool to help me learn
                French. It helped me a lot, it helped my friends, and now it’s
                helping the world, at scale. It is now used by 65 million
                students and teachers every month, who use it to learn every
                imaginable thing.
              </p>
              <p>
                I built it up, slowly at first, working on it nights and
                weekends while doing my homework. When I was first building it,
                I was the biggest user. When I realized something could be
                better, I’d set my books aside, code up a new feature, and then
                use it to complete my studies.
              </p>
              <p>
                I worked on Quizlet non-stop -- through high school, through
                college, through all of my twenties. I didn’t really have other
                hobbies. I poured my heart and soul into making it work. It
                almost died several times in the early years, over harsh
                disagreements with my first business partner. But perseverance
                paid off, and Quizlet continued to grow, essentially entirely by
                word of mouth. In 2015, after ten years of bootstrapping, we
                raised money from a group of investors led by Fred Wilson at
                Union Square Ventures and Greg Sands at Costanoa Ventures.
              </p>

              <p>
                After raising money, Quizlet kicked into high gear. We grew
                quickly -- the team, the users, the revenue.
              </p>
              <p>
                The people side of things always gave me the most joy. I loved
                mentoring junior engineers. I loved getting 360 feedback from
                the whole team and seeing how far I had to grow. I loved
                chatting with teachers in class visits, all over the world,
                learning what they wanted from their students and their tools. I
                personally interviewed everyone up to the first 150 employees,
                before I became a bottleneck on hiring.{" "}
              </p>
              <p>
                Eventually I found myself adrift. I was the founder, but I
                wasn’t the CEO, and I found myself unexcited about the direction
                the exec team wanted to go in. And to be honest, I was tired of
                working on the same problem I started thinking about when I was
                15. Sure, there were a million new problems encountered along
                the way. But I needed a change.
              </p>
              <p>
                So in December 2019, I left Quizlet. I felt like I was riding a
                train, the same one I’d been riding since I was 15, and it had
                just dumped me in the middle of the desert. What now? I’d poured
                my entire adult life into this one thing. My identity was
                intertwined so tightly with Quizlet -- it’s my baby. Who am I
                without Quizlet? A simultaneously terrifying and exciting
                question.
              </p>
              <p>
                In the past year, I’ve been redeveloping a sense of wonder and
                breadth. I’ve been exploring. I still don’t know what exactly is
                next. I have ideas.
              </p>
              <p>
                Another profound change has been one of loosening. When I was at
                Quizlet, I was keenly aware of the impact of my words and
                actions; one improperly phrased suggestion could send a team on
                a wild goose chase. Now, as a unit of one, I can be weirder.
                Very much weirder.
              </p>
              <p>
                I would like to teach, because I don’t think you can truly
                understand the education system until you’ve felt what it’s like
                to be up late grading papers, wondering why your lessons aren’t
                connecting and how you’ll spark a flame inside your students.
              </p>
              <p>
                I would like to use my talents, wealth, and connections to do
                great things in the world. In some weird sense, I feel like I’ve
                made it. I don’t have anything to prove to other people anymore.
                Just things to prove to myself.
              </p>
              <p>
                Here’s a question that haunts me: if at age 15, being a beginner
                at everything, I could set myself on a path of such incredible
                growth, joy, intensity, then what, at age 31, is the equivalent
                beginner state? How do I get as much hard-won growth out of the
                next 15 years as I got out of the last 15?
              </p>
              <p>
                There are seismic changes happening in education, in politics,
                in technology. I found a present tense of learning and
                exploration, meeting many interesting people, taking lots of
                diligent notes, thinking slowly and deeply. I’ve been saying yes
                to lots of cool things to invest in, to work on. I’ve been
                teaching a class at MIT, all about learning and education, and
                I’ve quite enjoyed that. I’m not in a rush. I’ll find something
                big to do when it’s time.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .FirstCard {
          margin-top: calc(-128px / 2 - 280px);
        }

        :global(:root) {
          --bg-color: var(--writingBlue);
          --dark-bg-color: var(--writingDarkBlue);
        }

        .PageHeader {
          height: 70vh;
          background-size: 600px 600px;
          background-image: image-set(
            url("/writing-hero-500.webp") 1x,
            url("/writing-hero-1258.webp") 2x
          );
        }
      `}</style>
    </>
  );
}
