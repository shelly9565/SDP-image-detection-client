import React from 'react';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

import sela from '../../images/sela.JPG'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const Info = () => {
    const [openHappy, setHappyOpen] = React.useState(false);
    const [openSad, setSadOpen] = React.useState(false);

    const classes = useStyles();
    const happyBtnTitle = 'The Happiest here :)';
    const sadBtnTitle = 'sad here :(((((';
    const happyImg = 'https://livingwellaware.com/wp-content/uploads/2020/03/Happy.jpg';
    const sadImg = 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_42/1495563/sadness-inside-out-today-main-tease-191018-1495563.jpg';


    const handleHappyClickOpen = () => {
        setHappyOpen(true);
    };
    const handleHappyClose = () => {
        setHappyOpen(false);
    };

    const handleSadClickOpen = () => {
        setSadOpen(true);
    };
    const handleSadClose = () => {
        setSadOpen(false);
    };

    return (
        <div>
            <Grid container justify="center">
                <Button className={classes.menuBtn} variant="outlined" color="primary" onClick={handleHappyClickOpen}>
                    {happyBtnTitle}
                </Button>
                <Button className={classes.menuBtn} variant="outlined" color="primary" onClick={handleSadClickOpen}>
                    {sadBtnTitle}
                </Button>
            </Grid>

            <Dialog open={openHappy} onClose={handleHappyClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" >
                <DialogTitle id="alert-dialog-title">{happyBtnTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">{happyBtnTitle}</DialogContentText>
                </DialogContent>
                {/* <DialogContent><img src={sela} height="60" /></DialogContent> */}
                <DialogContent><img src={happyImg} height="300" /></DialogContent>
                <DialogActions>
                    <Button onClick={handleHappyClose} color="primary"> Ok </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={openSad} onClose={handleSadClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" >
                <DialogTitle id="alert-dialog-title">{sadBtnTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">{sadBtnTitle}</DialogContentText>
                </DialogContent>
                {/* <DialogContent><img src={sela} height="60" /></DialogContent> */}
                <DialogContent><img src={sadImg} height="300" /></DialogContent>
                <DialogActions>
                    <Button onClick={handleSadClose} color="primary"> Ok </Button>
                </DialogActions>
            </Dialog>


        </div>
    );
}

export default Info;