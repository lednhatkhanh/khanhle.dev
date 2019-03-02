import React from 'react';
import styled from '@emotion/styled';
import { IoIosHeart } from 'react-icons/io';

export const Footer = () => (
  <StyledFooter>
    © {new Date().getFullYear()}, built with{' '}
    <IoIosHeart className="heart-icon" />
    {` `}and {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </StyledFooter>
);

const StyledFooter = styled.footer`
  .heart-icon {
    color: rgb(255, 167, 196);
    display: inline-block;
    font-size: 2.4rem;
    vertical-align: middle;
  }
`;
