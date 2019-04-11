import {CommentService} from '../../../services/comment.service';
import {Component} from '@angular/core';

@Component({
  selector : 'trg-comment-detail',
  templateUrl : './comment-detail-page.html',
})


export class CommentDetailPage {
  constructor(private commentService : CommentService)
  {
    //find by ID
    //this.commentService.findCommentsById()
    //  .subscribe(data =>{console.log(data);
     // });

  }
}
