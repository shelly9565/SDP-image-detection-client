import { Card, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles';

const Tweet = ({ tweet }) => {
    const classes = useStyles();
    return (
        <div >
            <Card className={classes.card} style={{ backgroundColor: colorDefiner(tweet.Overall_Sentiment) }}>
                <Typography className={classes.title}>{tweet.Text}</Typography>
            </Card>
        </div>
    )
}

export default Tweet

const colorDefiner = (sentiment) => {
    switch (sentiment) {
        case 'negative':
            return '#fff0ed'
        case 'positive':
            return '#edfff0'
        case 'mixed':
            return '#fbffed'
        case 'natural':
            return '#ffffff'
        default:
            return '#ffffff'
    }
}