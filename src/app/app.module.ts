import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {MainModule} from './main/main.module';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {AcademyModule} from './academy/academy.module';
import {AcademyService} from '../services/academy.service';
import {DashboardModule} from './dashboard/dashboard.module';
import {CohortStatusPipe} from './academy/cohort-status.pipe';
import {Payment} from './payment/payment';
import {CommentModule} from './comment/comment.module';
import {CommentService} from '../services/comment.service';
import {FormsModule} from '@angular/forms';
import {TemplateSyntax} from './template-syntax/template-syntax';
import {ApprenticeCreatorDialog} from './academy/apprentice-creator.dialog';


@NgModule({
  declarations: [
    AppComponent,
    Payment,
    ApprenticeCreatorDialog
  ],
  imports: [
    CommentModule,
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MainModule,
    DashboardModule,
    AcademyModule,
    FormsModule,
  ],

  providers: [AcademyService,],
  bootstrap: [AppComponent,]
})
export class AppModule {
}
