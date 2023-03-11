import { Action, createAction, props } from '@ngrx/store';
import { Post } from '../../interfaces';

export enum PostActionTypes {
    GET_POSTS_REQUEST = '[post] Create post request',
    CREATE_POST = '[post] Create post request',
    DELETE_POST = '[post] delete post request',
    CREATE_POST_SUCCESS = '[post] Create post success',
    DELETE_POST_SUCCESS = '[post] delete post success',
}

export const GetPostsRequestAction = createAction(PostActionTypes.GET_POSTS_REQUEST);

export const CreatePostRequestAction = createAction(
    PostActionTypes.CREATE_POST,
    props<{post: Post}>()
);

export const DeletePostRequestAction = createAction(
    PostActionTypes.DELETE_POST_SUCCESS,
    props<{id: number}>()
);

// eslint-disable-next-line @ngrx/prefer-action-creator
// export class CreatePostRequestAction implements Action {
//     readonly type = '[Customer Page] Load Customer';
//     constructor(post: Post) { }
// }

// export class DeletePostSuccessActionTest {
//     readonly type = PostActionTypes.GET_POSTS_SUCCESS;
//     constructor(id: number) { }
// }

