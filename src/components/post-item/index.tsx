import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { PostModel } from '~models/post.model';

interface Props {
  post: PostModel;
}

export const PostItem: React.FunctionComponent<Props> = ({ post }) => (
  <StyledPostItem>
    <span className="date">{post.node.frontmatter.date}</span>
    <h3 className="title-container">
      <Link to={post.node.frontmatter.path} className="title">
        {post.node.frontmatter.title}
      </Link>
    </h3>
    <p className="excerpt">{post.node.excerpt}</p>
  </StyledPostItem>
);

const StyledPostItem = styled.article`
  margin: 5rem 0;

  .date {
    font-size: 1.4rem;
  }

  .title-container {
    margin: 2rem 0 2rem 0;
  }

  .title {
    font-size: 3rem;
    color: #0074d9;
    text-decoration: none;
  }

  .excerpt {
    margin: 0;
  }
`;
