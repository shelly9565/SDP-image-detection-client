import { useEffect, useState } from 'react';
import GaugeChart from 'react-gauge-chart';
import { Card, Grid } from '@material-ui/core';

import useStyles from './styles';

const MaskChart = ({ posts }) => {
  const [safenessRatio, setSafenessRatio] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    let safe = 0;

    posts.forEach((p) => {
      if (p.mask.hasMask) safe++;
    });

    setSafenessRatio(safe / posts.length);
  }, [posts]);

  return (
    <Grid container justify="center">
      <div className={classes.gaugeChartContainer}>
        <GaugeChart
          id="gauge-chart2"
          className={classes.gaugeChart}
          nrOfLevels={20}
          percent={safenessRatio}
          colors={['#f50057', '#3f51b5']}
          textColor={'#464A4F'}
          animDelay={0}
          formatTextValue={(value) => value + '% Safe'}
        />
      </div>
    </Grid>
  );
};

export default MaskChart;
