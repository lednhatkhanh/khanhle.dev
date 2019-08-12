import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import { PostModel } from '~models/post.model';

interface Props {
  post: PostModel;
}

export const PostItem: React.FC<Props> = ({ post }) => (
  <StyledPostItem>
    <span className="date">{post.node.frontmatter.date}</span>
    <h3 className="title-container">
      <Link to={post.node.fields.slug} className="title">
        {post.node.frontmatter.title}
      </Link>
    </h3>
    <p className="excerpt">{post.node.excerpt}</p>
  </StyledPostItem>
);

const StyledPostItem = styled.article`
  margin: 5rem 0;

  .date {
    font-size: 1.8rem;
  }

  .title-container {
    margin: 2rem 0 2rem 0;
  }

  .title {
    font-size: 4rem;
    color: #0074d9;
  }

  .excerpt {
    margin: 0;
    line-height: 2.8rem;
    font-size: 2rem;
  }
`;
