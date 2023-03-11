import { Action, createReducer, on, State } from '@ngrx/store';
import { Post } from '../../interfaces';
import { CreatePostRequestAction, DeletePostRequestAction, GetPostsRequestAction } from '../actions/post.actions';
import { PostState } from '../store/post.state';

export const initialPostsState = {
    posts: [
        {
          id: 0,
          name: 'Post test 1',
          description: 'Description post 1'
        },
        {
          id: 1,
          name: 'Post test 2',
          description: 'Description post 2'
        },
        {
          id: 2,
          name: 'Post test 3',
          description: 'Description post 3'
        },
        {
          id: 4,
          name: 'Post test 4',
          description: 'Description post 4'
        }
    ]
};


export const postReducer = createReducer(
    initialPostsState,
    on(GetPostsRequestAction, (state, action): PostState => ({
        posts: state.posts
    })),
    on(CreatePostRequestAction, (state, action): PostState => ({
        posts: [...state.posts, action.post]
    })),
    on(DeletePostRequestAction, (state, action): PostState => {
        const index = state.posts.findIndex((post)=> post.id === action.id );
        const newArr = [...state.posts];
        newArr.splice(index, 1);      
        return {posts: newArr}
    })
  );