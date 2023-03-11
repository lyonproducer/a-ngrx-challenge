import { Injectable } from '@angular/core';
import { Post } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [
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

  constructor() { }

  getPosts(): Post[] {
    return this.posts;
  }

  addPost(post: Post) {
    this.posts.push(post);
  }
}
