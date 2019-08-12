import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import { Layout } from '~components/layout';
import { NodeData } from '~models/post.model';
import { SEO } from '~components/seo';

interface Props {
  data: {
    markdownRemark: NodeData;
  };
}

const BlogPost: React.FC<Props> = ({ data }) => (
  <Layout>
    <SEO title={data.markdownRemark.frontmatter.title} />
    <StyledBlogPost>
      <h1 className="title">{data.markdownRemark.frontmatter.title}</h1>
      <span className="date">{data.markdownRemark.frontmatter.date}</span>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
    </StyledBlogPost>
  </Layout>
);

export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;

const StyledBlogPost = styled.article`
  margin: 5rem 0;
  line-height: 2.8rem;
  font-size: 2rem;

  .title {
    font-size: 4rem;
    color: #000;
    line-height: 5rem;
  }

  .date {
    font-size: 1.8rem;
  }

  .content {
    margin-top: 4rem;

    h2 {
      color: #000;
    }

    a {
      text-decoration: none;
      color: #0074d9;
    }

    code {
      font-family: 'Source Code Pro', monospace;
    }

    p {
      color: #000;
    }

    p:first-of-type {
      font-family: 'Source Serif Pro', serif;
      font-size: 3rem;
      line-height: 3.6rem;
      color: #0074d9;
      border-left: 5px solid #0074d9;
      padding-left: 2rem;
    }
  }
`;
