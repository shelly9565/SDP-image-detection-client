import React from 'react'
import useStyles from './styles';

const VideoPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.flexDiv} >
            <h1 >Video Gathering Detection</h1>
            <video classes={classes.videoElem} src='https://sdpdetectionblobstorage.blob.core.windows.net/videos/2a854a60-a1a6-40eb-be74-c0c3e101617f.mp4' autoPlay loop type='video/mp4' />
        </div >
    )
}

export default VideoPage
