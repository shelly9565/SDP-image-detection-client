import React from 'react';

import useStyles from './styles';

const Post = ({ post }) => {
  const classes = useStyles();

  return (
    <img
      className={classes.image}
      src={
        post.url ||
        'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
      }
      alt="a face"
    />



  );
};

export default Post;
