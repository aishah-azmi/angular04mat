import {Component} from '@angular/core';
import {CommentService} from '../../../services/comment.service';
import {Observable} from 'rxjs';
import {Comments} from '../comment.model';
import {CommentDataSource} from './comment-datasource';
import {Router, Routes} from '@angular/router';

@Component({
  selector : 'trg-comment-list',
  templateUrl : './comment-list-page.html',
})
export class CommentListPage{

  //$ , dollar sign , defined variable for observable
  comments$ : Observable<Comments[]>; //hold array data ; Coments
  //public dataSource: DataSource<Comments>; //dataSource hold arraydata
  dataSource:CommentDataSource;
  public columns = ['postId','id', 'name', 'email', 'body'];

  constructor(private commentService : CommentService,
              private router : Router){
    //this.comments$ = commentService.findComments();
    this.dataSource = new CommentDataSource(this.commentService);

  }

  navigate(row: Comments){
    console.log(row);
    this.router.navigate(['/comment/', row.id]);
  }

}

