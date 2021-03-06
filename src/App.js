import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Container, AppBar, Tabs, Tab } from '@material-ui/core';

import { getPosts } from './actions/posts';
import sela from './images/sela.jpeg';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import EmotionsPage from './pages/EmotionsPage';
import MaskPage from './pages/MaskPage';

const App = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container>
      <Route
        path="/"
        render={({ location }) => (
          <>
            <AppBar className={classes.appBar} position="static">
              <img src={sela} alt="sela" height="48" />
              <Tabs value={location.pathname} textColor="primary">
                <Tab label="#2" value="/mask" component={Link} to="/mask" />
                <Tab
                  label="#1"
                  value="/emotions"
                  component={Link}
                  to="/emotions"
                />
              </Tabs>
            </AppBar>

            <Switch>
              <Route
                path="/emotions"
                render={(props) => <EmotionsPage {...props} posts={posts} />}
              />
              <Route
                path="/mask"
                render={(props) => <MaskPage {...props} posts={posts} />}
              />
              <Redirect from="/" exact to="/emotions" />
            </Switch>
          </>
        )}
      />
    </Container>
  );
};

export default App;
