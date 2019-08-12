import React from 'react';

import { PostModel } from '~models/post.model';
import { PostItem } from '~components/post-item';

interface Props {
  posts: PostModel[];
}

const defaultProps = { posts: [] };

export const PostList: React.FC<Props> & {
  defaultProps: typeof defaultProps;
} = ({ posts }) => (
  <>
    {posts.map(post => (
      <PostItem key={post.node.id} post={post} />
    ))}
  </>
);

PostList.defaultProps = defaultProps;
