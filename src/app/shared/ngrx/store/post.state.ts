import { createSelector } from '@ngrx/store';
import { Post } from '../../interfaces';
import { getPostState } from './app.state';

export interface PostState {
    posts: Post[];
}

export const selectPosts = createSelector(
    getPostState,
    (state: PostState) => state.posts
);