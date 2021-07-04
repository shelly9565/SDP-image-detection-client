import { useEffect, useState } from 'react';
import GaugeChart from 'react-gauge-chart';
import { Card, Grid } from '@material-ui/core';

import useStyles from './styles';

const EmotionsChart = ({ posts }) => {
  const [happinessRatio, setHappinessRatio] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    let happy = 0;
    posts.forEach((p) => {
      if (p.data.face_detection &&
        p.data.face_detection.faceAttributes.emotion.happiness >
        p.data.face_detection.faceAttributes.emotion.sadness
      )
        happy++;
    });
<<<<<<< HEAD
    console.log(`happy`, happy)
=======
>>>>>>> 2e9c1d9c92a5e652f028c4805a90e6f265813171
    setHappinessRatio(happy / posts.length);
  }, [posts]);

  return (
    <Grid container justify="center">
      <div className={classes.gaugeChartContainer}>
        <GaugeChart
          id="gauge-chart1"
          className={classes.gaugeChart}
          nrOfLevels={20}
          percent={happinessRatio}
          colors={['#3f51b5', '#f50057']}
          textColor={'#464A4F'}
          animDelay={0}
          formatTextValue={(value) => value + '% Happy'}
        />
      </div>
    </Grid>
  );
};

export default EmotionsChart;
