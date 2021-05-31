import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';


import { TextField, Button, Typography, Paper } from '@material-ui/core'

const Form = ({ currentId, setCurrentId }) => {
    const [newPostData, setPostData] = useState({ fullName: '', selectedFile: '' });
    const classes = useStyles();
    const dispatch = useDispatch();
    const updatedPost = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

    useEffect(() => {
        if (updatedPost) setPostData(updatedPost);
    }, [updatedPost]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, newPostData));

        } else {
            dispatch(createPost(newPostData));
        }
        clear();
    };

    const clear = () => {
        setCurrentId(null);
        setPostData({ fullName: '', selectedFile: '' });
    };

    return (
        <Paper className={classes.paper} >
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography varient="h6">{currentId ? 'Editing' : 'Creating'} New Person</Typography>
                <TextField name="fullName" varient="outlined" label="fullName" fullWidth value={newPostData.fullName} onChange={(e) => setPostData({ ...newPostData, fullName: e.target.value })} />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...newPostData, selectedFile: base64 })}
                    />
                </div>
                <Button className={classes.contained} color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;
