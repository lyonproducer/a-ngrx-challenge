import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsListRoutingModule } from './posts-list-routing.module';
import { PostsListComponent } from './posts-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { CreatePostComponent } from 'src/app/components/create-post/create-post.component';
import { DeletePostComponent } from 'src/app/components/delete-post/delete-post.component';
import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  entryComponents: [
    CreatePostComponent,
    DeletePostComponent
  ],
  declarations: [
    PostsListComponent,
    CreatePostComponent,
    DeletePostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PostsListRoutingModule,
    MatDialogModule,
    FilterPipeModule
  ]
})
export class PostsListModule { }
