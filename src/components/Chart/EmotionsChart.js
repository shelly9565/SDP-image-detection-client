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
    console.log(`happy`, happy)
    setHappinessRatio(happy / posts.length);
  }, [posts]);
  useEffect(() => {
    console.log(`happinessRatio`, happinessRatio)

  }, [happinessRatio])
  return (
    <Grid container justify="center">
      <div className={classes.gaugeChartContainer}>
        <GaugeChart
          id="gauge-chart1"
          className={classes.gaugeChart}
          nrOfLevels={20}
          percent={happinessRatio}
          colors={['#d85a6d', '#9fcd61']}
          textColor={'#EA9164'}
          animDelay={0}
          formatTextValue={(value) => value + '% Happy'}
        />
      </div>
    </Grid>
  );
};

export default EmotionsChart;
