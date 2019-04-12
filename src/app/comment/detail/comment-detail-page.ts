import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from '../../../services/comment.service';
import {Observable} from 'rxjs';
import {Comments} from '../comment.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector : 'trg-comment-detail',
  templateUrl : './comment-detail-page.html',
})

export class CommentDetailPage {
  comment$ : Observable<Comments>;
  mainForm: FormGroup;

  constructor(private route:ActivatedRoute,
              private form:FormBuilder,
              private commentService: CommentService) {
    this.mainForm = this.form.group([{
      postId: [''],
      id: [''],
      name: ['', Validators.required],
      email: [''],
      body: [''],
    }]);

    //find by ID
    this.route.params.subscribe((param: { id: number }) => {
      this.comment$ = this.commentService.findCommentsById(param);
    });

  }
    printingBinding(event){
      console.log(event);
  }
}
