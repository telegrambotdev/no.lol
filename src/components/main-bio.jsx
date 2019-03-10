import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import { rhythm } from '../utils/typography';

const mainBioQuery = graphql`
  query MainBioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`;

function MainBio() {
  return (
    <StaticQuery
      query={mainBioQuery}
      render={data => {
        const { author } = data.site.siteMetadata;
        return (
          <div
            className="main-bio-container"
            style={{
              marginBottom: rhythm(2.5),
            }}
          >
            <div className="main-bio" style={{ marginRight: rhythm(1) }}>
              <h1 style={{ color: 'var(--red)', marginBottom: rhythm(1 / 5) }}>
                <span role="image" aria-label="woman technologist">
                  👩🏻‍💻
                </span>{' '}
                Hello! Lauren Tan is a leader, speaker, and software engineer{' '}
                <span role="image" aria-label="sparkles">
                  ✨
                </span>
              </h1>
              <ul
                className="horizontal-links"
                style={{ marginBottom: rhythm(1) }}
              >
                <li>
                  <a
                    className="u-no-box-shadow"
                    href="https://github.com/poteto"
                  >
                    <FontAwesomeIcon icon={faGithub} color="var(--gray)" />
                  </a>
                </li>
                <li>
                  <a
                    className="u-no-box-shadow"
                    href="https://twitter.com/sugarpirate_"
                  >
                    <FontAwesomeIcon icon={faTwitter} color="var(--gray)" />
                  </a>
                </li>
                <li>
                  <a
                    className="u-no-box-shadow"
                    href="https://www.linkedin.com/in/laurenelizabethtan/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} color="var(--gray)" />
                  </a>
                </li>
              </ul>
              <p>
                Hi there! I&apos;m a polyglot Engineering Manager at Netflix,
                accomplished public speaker, thoughtful software engineer at
                heart, and{' '}
                <span role="image" aria-label="woman surfing">
                  🏄🏻‍♀️
                </span>{' '}
                webmaster of this little website. I started my career in tech as
                a UI designer, but the allure of learning to bring my own
                designs to life was too enticing. I write about leadership,
                JavaScript, TypeScript, Elixir, and more. Welcome!
              </p>
            </div>
            <Image
              className="avatar"
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 250,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
          </div>
        );
      }}
    />
  );
}

export default MainBio;