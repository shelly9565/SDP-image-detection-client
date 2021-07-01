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
    setHappinessRatio(happy / posts.length);
  }, [posts]);

  return (
    <Grid container justify="center">
      <Card className={classes.card}>
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
      </Card>
    </Grid>
  );
};

export default EmotionsChart;
