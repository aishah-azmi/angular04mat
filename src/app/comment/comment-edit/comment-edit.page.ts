import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from '../../../services/comment.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {ApprenticeCreatorDialog} from '../../academy/apprentice-creator.dialog';
import {MatSnackBarConfig} from '@angular/material/typings/esm5/snack-bar';

@Component({
  selector: 'trg-comments-edit-page',
  templateUrl: './comment-edit.page.html'
})

export class CommentEditPage{
  mainForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private commentService: CommentService,
              private form: FormBuilder,
              private dialogRef: MatDialogRef<CommentEditPage>) {

    this.mainForm = this.form.group(
      {
        postId : [''],
        id : [''],
        name : ['', Validators.required],
        email : [''],
        body : ['']
      });
  }
  /*
  printbinding (event) {
    console.log(event)
  }*/
  submitComment(){
    this.commentService.submitComment(this.mainForm.value)
      .subscribe(data=>{}, error1=>{console.log(error1)
    });
  }

  show(): void {
    const config = new MatDialogConfig();
    config.width = "600px";
    config.height = "480px";
    const dialogRef = this.dialog.open(ApprenticeCreatorDialog, config);
    dialogRef.afterClosed().subscribe(result => {
      this.snackBar.open('Message has been sent', '',
        <MatSnackBarConfig>{duration: 3000});
    });

  }
