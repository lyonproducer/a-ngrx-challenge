import { PostState } from './post.state';

export interface AppState {
    post: PostState;
}

export const getPostState = (state: AppState) => state.post;