import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs';
import {CommentService} from '../../../services/comment.service';

export class CommentDataSource extends DataSource<any>{
  constructor(private commentService : CommentService) {
    //inject CommentService to retrieve data
    super();
  }

  //connect to get value
  connect(): Observable<any[]> {
    return this.commentService.findComments();
  }

  disconnect(): void {
  }
}
