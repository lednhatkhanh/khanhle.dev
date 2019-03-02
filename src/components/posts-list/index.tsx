import React from 'react';

import { PostModel } from '~models/post.model';
import { PostItem } from '~components/post-item';

interface Props {
  posts: PostModel[];
}

export const PostList: React.FunctionComponent<Props> & {
  defaultProps: typeof defaultProps;
} = ({ posts }) => (
  <>
    {posts.map(post => (
      <PostItem key={post.node.id} post={post} />
    ))}
  </>
);

const defaultProps = { posts: [] };

PostList.defaultProps = defaultProps;
