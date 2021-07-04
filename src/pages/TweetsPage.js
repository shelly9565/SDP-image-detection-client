import { Container } from '@material-ui/core';
import { PieChart } from 'react-minimal-pie-chart';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import socket from '../api/socket'
import useStyles from './styles';
import Tweet from '../components/Tweet/Tweet';

const TweetsPage = () => {
    const classes = useStyles();
    const [ratio, setRatio] = useState({})
    useEffect(() => {
        console.log(`hey`)
        axios.get('http://localhost:8080/tweets').then(res => {
            console.log(`res.data`, res.data)
            setRatio(res.data)
        })
        socket.on('tweets', ({ tweets, ratio }) => {

        })
    }, [])
    return (
        <Container maxWidth="md" >
            <PieChart className={classes.pieChart}
                data={[{ title: 'positive', value: ratio.positive, color: '#218838' },
                { title: 'mixed', value: ratio.mixed, color: '#F7BF42' },
                { title: 'negative', value: ratio.negative, color: '#c74450' },
                { title: 'natural', value: ratio.natural, color: '#f7f7f9' },
                ]}
                label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
                labelStyle={{
                    fill: '#DE8349',
                    pointerEvents: 'none',
                }}
            />
            <Tweet tweet={{ Text: 'hello how are you doing sir??', Overall_Sentiment: 'positive' }} />
        </Container>
    )
}

export default TweetsPage
