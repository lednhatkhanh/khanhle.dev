import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoLinkedin,
} from 'react-icons/io';

const Header: React.FunctionComponent<{}> = () => (
  <StyledHeader>
    <h1 className="logo-container">
      <Link to="/" className="logo">
        khanhle.dev
      </Link>
    </h1>
    <div className="icons">
      <a
        href="https://github.com/lednhatkhanh"
        className="icon-link twitter-icon"
      >
        <IoLogoTwitter />
      </a>
      <a
        href="https://github.com/lednhatkhanh"
        className="icon-link facebook-icon"
      >
        <IoLogoFacebook />
      </a>
      <a
        href="https://github.com/lednhatkhanh"
        className="icon-link github-icon"
      >
        <IoLogoGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/lednhatkhanh/"
        className="icon-link linkedin-icon"
      >
        <IoLogoLinkedin />
      </a>
    </div>
  </StyledHeader>
);

const StyledHeader = styled.header`
  font-size: 1rem;
  display: flex;
  align-items: center;
  padding-bottom: 2rem;
  border-bottom: 2px solid #ddd;

  .logo-container {
    flex: 1;

    .logo {
      color: #0074d9;
    }
  }

  .icons {
    font-size: 2.4rem;
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 2rem;

    .icon-link {
      display: flex;
    }

    .twitter-icon {
      color: #1aa1f1;
    }

    .facebook-icon {
      color: #4267b2;
    }

    .github-icon {
      color: #23292d;
    }

    .linkedin-icon {
      color: #0077b5;
    }
  }
`;

export { Header };
