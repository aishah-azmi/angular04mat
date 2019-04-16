import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comments} from '../app/comment/comment.model';

const httpOptions = {
  headers: new HttpHeaders( {
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class CommentService {
  constructor(private http: HttpClient){
    console.log('Comment Service is working');
  }
  // TODO findComments
  findComments(): Observable<Comments[]>{
    return this.http.get<Comments[]>('https://jsonplaceholder.typicode.com/comments/');
}

  // TODO findById
  findCommentsById(param: {id:number}): Observable<Comments>{
    return this.http.get<Comments>('https://jsonplaceholder.typicode.com/comments/' + param.id);
  }
  submitComment(comment: Comments){
    return this.http.post<Comments>( 'http://cohort4.ngrok.io/api/comment/submit', JSON.stringify(comment), httpOptions);
  }
}
