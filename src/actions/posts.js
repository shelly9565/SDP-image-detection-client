import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes'
import * as api from '../api';


export const getPosts = () => async (dispach) => {

    try {
        const { data } = await api.fetchPosts();
        dispach({ type: FETCH_ALL, payload: data })

    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async dispach => {
    try {
        const { data } = await api.createPost(post);
        dispach({ type: CREATE, payload: data });

    } catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (id, post) => async dispach => {
    try {
        const { data } = await api.updatePost(id, post);
        dispach({ type: UPDATE, payload: data });

    } catch (error) {
        console.log(error.message);
    }
}



export const deletePost = (id) => async dispach => {
    try {
        await api.deletePost(id);
        dispach({ type: DELETE, payload: id });

    } catch (error) {
        console.log(error.message);
    }
}


