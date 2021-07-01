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
import Modal from '../modal/Modal';

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
      <Modal content={safest} showModal={showSafest} setShowModal={setShowSafest} title="You are the SAFEST person out here!" >

      </Modal>

    </div>
  );
};

export default MaskInfo;
