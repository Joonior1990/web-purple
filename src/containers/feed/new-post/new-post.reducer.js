import { combineReducers } from 'redux';
import postEditor from '../post-edit-form/post-edit-form.reducer';
import { POST_ADDED } from '../post-edit-form/post-edit-form.actions';
import { OPEN_DIALOG, CLOSE_DIALOG } from './new-post.action-types';

const newPostReducer = (state = { dialogOpen: false }, action) => {
    switch (action.type) {
        case OPEN_DIALOG:
            return { ...state, dialogOpen: true };
        case POST_ADDED:
        case CLOSE_DIALOG:
            return { ...state, dialogOpen: false };
        default:
            return state;
    }
};

const newPost = combineReducers({
    state: newPostReducer,
    postEditor,
});

export default newPost;
