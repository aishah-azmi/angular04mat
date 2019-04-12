import {Routes} from '@angular/router';
import {MainComponent} from './main/main.layout';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ApprenticeListPage} from './academy/apprentice-list.page';
import {CohortListPage} from './academy/cohort-list.page';
import {ApprenticeDetailPage} from './academy/apprentice-detail.page';
import {CohortDetailPage} from './academy/cohort-detail.page';
import {Payment} from './payment/payment';
import {CommentListPage} from './comment/list/comment-list-page';
import {CommentDetailPage} from './comment/detail/comment-detail-page';
import {TemplateSyntax} from './template-syntax/template-syntax';

export const appRoutes: Routes = [{
  path: '', component: MainComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'academy/cohorts/list', component: CohortListPage},
    {path: 'academy/cohorts/:code', component: CohortDetailPage},
    {path: 'academy/apprentices/list', component: ApprenticeListPage},
    {path: 'academy/apprentices/:code', component: ApprenticeDetailPage},
    {path: 'payment', component: Payment},
    {path: 'comment/list', component: CommentListPage},
    {path: 'comment/:id', component: CommentDetailPage},
    {path: 'template', component: TemplateSyntax},
  ]
}];
