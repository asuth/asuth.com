import { Component } from "react";

import Head from "next/head";

import aboutHero from "/public/heros/about.webp";
import questionsHero from "/public/heros/questions.webp";
import investmentsHero from "/public/heros/investments.webp";
import writingHero from "/public/heros/writing.webp";
import contactHero from "/public/heros/contact.webp";
import metaImage from "/public/metaweb.jpg";
import { withRouter, NextRouter } from "next/router";

type NodeProps = {
  title: string;
  description: string;
  router: NextRouter;
};

class Meta extends Component<NodeProps> {
  paths: { [key: string]: string } = {
    about: aboutHero.src,
    writing: writingHero.src,
    questions: questionsHero.src,
    investments: investmentsHero.src,
    contact: contactHero.src,
  };

  constructor(props: NodeProps) {
    super(props);
  }

  renderAsciiArt() {
    return (
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<!--


    ██████╗ ███╗   ██╗    ████████╗██╗  ██╗███████╗    ██╗      ██████╗  ██████╗ ██╗  ██╗ ██████╗ ██╗   ██╗████████╗
    ██╔═══██╗████╗  ██║    ╚══██╔══╝██║  ██║██╔════╝    ██║     ██╔═══██╗██╔═══██╗██║ ██╔╝██╔═══██╗██║   ██║╚══██╔══╝
    ██║   ██║██╔██╗ ██║       ██║   ███████║█████╗      ██║     ██║   ██║██║   ██║█████╔╝ ██║   ██║██║   ██║   ██║   
    ██║   ██║██║╚██╗██║       ██║   ██╔══██║██╔══╝      ██║     ██║   ██║██║   ██║██╔═██╗ ██║   ██║██║   ██║   ██║   
    ╚██████╔╝██║ ╚████║       ██║   ██║  ██║███████╗    ███████╗╚██████╔╝╚██████╔╝██║  ██╗╚██████╔╝╚██████╔╝   ██║   
     ╚═════╝ ╚═╝  ╚═══╝       ╚═╝   ╚═╝  ╚═╝╚══════╝    ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝   
                                                                                                                     
    ███████╗ ██████╗ ██████╗     ██╗    ██╗ ██████╗ ███╗   ██╗██████╗ ███████╗██████╗                                
    ██╔════╝██╔═══██╗██╔══██╗    ██║    ██║██╔═══██╗████╗  ██║██╔══██╗██╔════╝██╔══██╗                               
    █████╗  ██║   ██║██████╔╝    ██║ █╗ ██║██║   ██║██╔██╗ ██║██║  ██║█████╗  ██████╔╝                               
    ██╔══╝  ██║   ██║██╔══██╗    ██║███╗██║██║   ██║██║╚██╗██║██║  ██║██╔══╝  ██╔══██╗                               
    ██║     ╚██████╔╝██║  ██║    ╚███╔███╔╝╚██████╔╝██║ ╚████║██████╔╝███████╗██║  ██║                               
    ╚═╝      ╚═════╝ ╚═╝  ╚═╝     ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝  ╚═╝                               
    
    Welcome to my HTML. I’ve been expecting you.
    

    -->`,
        }}
      />
    );
  }

  render() {
    let path = this.props.router.pathname.substring(1);
    const bgImage = this.paths.hasOwnProperty(path)
      ? `https://asuth.com${this.paths[path]}`
      : `https://asuth.com${metaImage.src}`;

    return (
      <>
        <Head>
          <title>{this.props.title}</title>
          {this.renderAsciiArt()}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#f5ff9e" />
          <meta name="theme-color" content="#3b3b68" />
          <meta name="description" content={this.props.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta name="twitter:title" content={this.props.title} />
          <meta name="twitter:description" content={this.props.description} />
          <meta name="twitter:image" content={bgImage} />
          <meta name="twitter:card" content="summary_large_image" />

          <meta property="og:title" content={this.props.title} />
          <meta property="og:description" content={this.props.description} />
          <meta property="og:image" content={bgImage} />
          <meta
            property="og:url"
            content={`https://asuth.com${this.props.router.pathname}`}
          />
        </Head>
      </>
    );
  }
}

export default withRouter(Meta);
