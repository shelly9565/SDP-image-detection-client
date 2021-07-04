import React from 'react';
import { GridList, GridListTile } from '@material-ui/core';

import Post from './Post/Post';

const Posts = ({ posts }) => {
  return (
    <GridList cellHeight={160} cols={5}>
      {posts.map((p) => (
        <GridListTile key={p.id} cols={1}>
          <Post post={p} />
        </GridListTile>
      ))}
    </GridList>
  );
};

export default Posts;
