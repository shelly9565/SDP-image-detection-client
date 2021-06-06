import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';

import useStyles from './styles';
import { Typography } from '@material-ui/core';

const EmotionsInfo = ({ posts }) => {
  const [happiest, setHappiest] = useState();
  const [showHappiest, setShowHappiest] = useState(false);
  const classes = useStyles();

  const findTheHappiest = () => {
    let happy;

    if (posts.length) {
      happy = posts.reduce((prev, current) =>
        prev.data.face_detection.faceAttributes.emotion.happiness >
        current.data.face_detection.faceAttributes.emotion.happiness
          ? prev
          : current
      );
    }

    setHappiest(happy);
  };

  const handleTheHappiestClick = () => {
    setShowHappiest(true);
    findTheHappiest();
  };

  return (
    <div>
      <Grid container justify="center">
        <div>
          <Button
            className={classes.menuBtn}
            variant="outlined"
            color="secondary"
            onClick={() => handleTheHappiestClick()}
          >
            <Typography variant="button" display="block">
              The Happiest 🙂
            </Typography>
          </Button>
        </div>
      </Grid>

      <Dialog
        classes={{ paper: classes.card }}
        open={showHappiest}
        onClose={() => setShowHappiest(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className={classes.textAlign} id="alert-dialog-title">
          <Typography variant="body1" color="secondary">
            You are the HAPPIEST person out here!
          </Typography>
        </DialogTitle>

        <DialogContent>
          {!happiest ? (
            <CircularProgress />
          ) : (
            <img src={happiest.url} alt="" height="300" />
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setShowHappiest(false)} color="secondary">
            <Typography variant="button" display="block">
              OK
            </Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EmotionsInfo;
