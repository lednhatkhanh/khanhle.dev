/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

import 'normalize.css/normalize.css';

import { Header } from '~components/header';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<Props> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <>
        <Global
          styles={css`
            html {
              font-size: 10px;
            }
            body {
              font-family: 'Noto Sans', sans-serif;
              font-size: 1.6rem;
              color: #818181;
              border-top: 5px solid #0074d9;
            }
          `}
        />
        <StyledContent>
          <Header />
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </StyledContent>
      </>
    )}
  />
);

const StyledContent = styled.div`
  padding: 4rem 2rem;
  margin: 0 auto;
  max-width: 60rem;
`;

export { Layout };
