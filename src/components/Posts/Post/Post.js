import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import moment from 'moment';

import useStyles from './styles';

const Post = ({ post }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          post.url ||
          'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
        }
      />

      <div className={classes.overlay}>
        <Typography variant="subtitle2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>

      <CardContent className={classes.details}>
        <Typography variant="body2" color="primary">
          {(
            post.data.face_detection.faceAttributes.emotion.sadness * 100
          ).toFixed(1)}
          % 🙁
        </Typography>

        <Typography variant="body2" color="secondary">
          🙂{' '}
          {(
            post.data.face_detection.faceAttributes.emotion.happiness * 100
          ).toFixed(1)}
          %
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
