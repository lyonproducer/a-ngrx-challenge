import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.scss']
})
export class DeletePostComponent  {

  constructor(
    public dialogRef: MatDialogRef<DeletePostComponent>
  ) { }

  close(option: boolean) {
    this.dialogRef.close(option);
  }

}
