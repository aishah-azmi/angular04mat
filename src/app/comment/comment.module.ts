import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatExpansionModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule, MatNativeDateModule, MatPaginatorModule, MatSnackBarModule, MatSortModule,
  MatStepperModule, MatTableModule,
  MatTabsModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {CommentService} from '../../services/comment.service';
import {CommentListPage} from './list/comment-list-page';
import {CommentDetailPage} from './detail/comment-detail-page';
import {LimitPipe} from './list/limit-pipe';

@NgModule({
  declarations: [
    CommentListPage,
    CommentDetailPage,
    LimitPipe,
  ],
  providers:[
    CommentService,],
  bootstrap : [],
  imports:[
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatSnackBarModule,

  ],

})
export class CommentModule{}
