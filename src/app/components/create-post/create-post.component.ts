import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/shared/interfaces';
import { CreatePostRequestAction } from 'src/app/shared/ngrx/actions/post.actions';
import { AppState } from 'src/app/shared/ngrx/store/app.state';
import { selectPosts } from 'src/app/shared/ngrx/store/post.state';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {

  post: Post = {
    description: '',
    id: 0,
    name: ''
  };

  constructor(
    public dialogRef: MatDialogRef<CreatePostComponent>,
    private store: Store<AppState>
  ) { 
    this.store.select(selectPosts).subscribe(
      (posts: Post[]) => {
        this.post = {
          ...this.post,
          id: posts.length
        };
      }
    );
  }


  addPost(form: NgForm) {
    this.store.dispatch(CreatePostRequestAction({post: this.post}));
    this.close();
  }

  close() {
    this.dialogRef.close();
  }
}
