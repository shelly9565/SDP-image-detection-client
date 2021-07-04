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

const EmotionsInfo = ({ posts }) => {
  const [happiest, setHappiest] = useState();
  const [showHappiest, setShowHappiest] = useState(false);
  const classes = useStyles();

  const findTheHappiest = () => {
    let happy;

    if (posts.length) {
      happy = posts.reduce((prev, current) => {
        if (prev.data.face_detection || current.data.face_detection) return prev;
        else
          return prev.data.face_detection && current.data.face_detection && prev.data.face_detection.faceAttributes.emotion.happiness >
            current.data.face_detection.faceAttributes.emotion.happiness
            ? prev
            : current
      }
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
      <Modal content={happiest} showModal={showHappiest} setShowModal={setShowHappiest} title="You are the HAPPIEST person out here!">
      </Modal>
    </div >
  );
};

export default EmotionsInfo;
