import React from 'react'
import useStyles from './styles';

const VideoPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.flexDiv} >
            <h1 style={{ color: 'white' }}>Video Gathering Detection</h1>
            <video classes={classes.videoElem} src='/Videos/video.mp4' autoPlay loop type='video/mp4' />
        </div >
    )
}

export default VideoPage
