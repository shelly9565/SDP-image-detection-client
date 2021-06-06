import { CircularProgress, Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import MaskChart from '../components/Chart/MaskChart';
import MaskInfo from '../components/Info/MaskInfo';
import Posts from '../components/Posts/Posts';

const MaskPage = ({ posts }) => {
  const [safePosts, setSafePosts] = useState([]);
  const [unprotectedPosts, setUnprotectedPosts] = useState([]);

  useEffect(() => {
    setSafePosts(posts.filter((p) => p.mask.hasMask));
    setUnprotectedPosts(posts.filter((p) => !p.mask.hasMask));
  }, [posts]);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid container spacing={10}>
      <Grid item xs={12}>
        <MaskChart posts={posts} />
      </Grid>

      <Grid item xs={6}>
        <Posts posts={unprotectedPosts} />
      </Grid>
      <Grid item xs={6}>
        <Posts posts={safePosts} />
      </Grid>

      <Grid item xs={12}>
        <MaskInfo posts={posts} />
      </Grid>
    </Grid>
  );
};

export default MaskPage;
