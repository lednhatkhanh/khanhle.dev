import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '~components/layout';
import { SEO } from '~components/seo';
import { PostList } from '~components/posts-list';
import { PostModel } from '~models/post.model';

interface Props {
  data: {
    allMarkdownRemark: {
      edges: PostModel[];
    };
  };
}

const IndexPage: React.FunctionComponent<Props> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <SEO title="Home" keywords={[`blog`, `developer`]} />
    <PostList posts={edges} />
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
