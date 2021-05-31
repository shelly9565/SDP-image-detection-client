import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes'

export default (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload; //actual posts
        case CREATE:
            console.log('in reducer CREATE');
            return [...posts, action.payload];
        case UPDATE:
            console.log('in reducer update');
            return posts.map((p) => p._id === action.payload._id ? action.payload : p);
        case DELETE:
            console.log('in reducer delete');
            return posts.filter(p => p._id !== action.payload);
        default:
            return posts;
    }
}
