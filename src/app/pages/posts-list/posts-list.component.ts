import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { CreatePostComponent } from 'src/app/components/create-post/create-post.component';
import { DeletePostComponent } from 'src/app/components/delete-post/delete-post.component';
import { Post, PostFilter } from 'src/app/shared/interfaces';
import { DeletePostRequestAction } from 'src/app/shared/ngrx/actions/post.actions';
import { AppState } from 'src/app/shared/ngrx/store/app.state';
import { selectPosts } from 'src/app/shared/ngrx/store/post.state';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  posts : Post[] = [];
  postFilter: PostFilter = { name: '' };

  constructor(
    private dialog: MatDialog,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select(selectPosts).subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
  }

  deletePost(post: Post) {
    const dialog = this.dialog.open(DeletePostComponent, {
      height: '150px',
      width: '400px'
    });

    dialog.afterClosed().subscribe((response: boolean)=>{
      if(response === true){
        this.store.dispatch(DeletePostRequestAction({id: post.id }));
      }
    });
  }

  createPost() {
    this.dialog.open(CreatePostComponent, {
      height: '600px',
      width: '600px'
    });
  }
}
