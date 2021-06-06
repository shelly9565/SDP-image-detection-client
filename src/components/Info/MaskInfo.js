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

const MaskInfo = ({ posts }) => {
  const [safest, setSafest] = useState();
  const [showSafest, setShowSafest] = useState(false);
  const classes = useStyles();

  const findTheSafest = () => {
    let safe;

    if (posts.length) {
      safe = posts.find((p) => p.mask.hasMask && p.mask.fullCover);

      if (!safe) {
        safe = posts.find((p) => p.mask.hasMask);
      }
    }

    setSafest(safe);
  };

  const handleTheSafestClick = () => {
    setShowSafest(true);
    findTheSafest();
  };

  return (
    <div>
      <Grid container justify="center">
        <div>
          <Button
            className={classes.menuBtn}
            variant="outlined"
            color="primary"
            onClick={() => handleTheSafestClick()}
          >
            <Typography variant="button" display="block">
              The Safest 😷
            </Typography>
          </Button>
        </div>
      </Grid>

      <Dialog
        classes={{ paper: classes.card }}
        open={showSafest}
        onClose={() => setShowSafest(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className={classes.textAlign}>
          <Typography variant="body1" color="primary">
            You are the SAFEST person out here!
          </Typography>
        </DialogTitle>

        <DialogContent>
          {!safest ? (
            <CircularProgress />
          ) : (
            <img src={safest.url} alt="" height="300" />
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setShowSafest(false)} color="primary">
            <Typography variant="button" display="block">
              OK
            </Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MaskInfo;
