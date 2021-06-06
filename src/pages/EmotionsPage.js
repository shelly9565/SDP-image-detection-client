import { CircularProgress, Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import EmotionsChart from '../components/Chart/EmotionsChart';
import EmotionsInfo from '../components/Info/EmotionsInfo';
import Posts from '../components/Posts/Posts';

const EmotionsPage = ({ posts }) => {
  const [happyPosts, setHappyPosts] = useState([]);
  const [sadPosts, setSadPosts] = useState([]);

  useEffect(() => {
    setHappyPosts(
      posts.filter((p) => p.emotions.happiness > p.emotions.sadness)
    );
    setSadPosts(posts.filter((p) => p.emotions.happiness < p.emotions.sadness));
  }, [posts]);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid container spacing={10}>
      <Grid item xs={12}>
        <EmotionsChart posts={posts} />
      </Grid>

      <Grid item xs={6}>
        <Posts posts={sadPosts} />
      </Grid>
      <Grid item xs={6}>
        <Posts posts={happyPosts} />
      </Grid>

      <Grid item xs={12}>
        <EmotionsInfo posts={posts} />
      </Grid>
    </Grid>
  );
};

export default EmotionsPage;
