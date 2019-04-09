import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  MatButtonModule,
  MatBadgeModule,
  MatCardModule,
  MatChipsModule,
  MatDialogModule,
  MatDialogRef,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MAT_DIALOG_DATA,
} from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from 'src/services/data.service';
import { AnswerListComponent } from './answer-list/answer-list.component';
import { CorrectAnswerFeedbackComponent } from './answer-feedback/correct-answer-feedback.component';
import { IncorrectAnswerFeedbackComponent } from './answer-feedback/incorrect-answer-feedback.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    QuestionDetailComponent,
    AnswerListComponent,
    CorrectAnswerFeedbackComponent,
    IncorrectAnswerFeedbackComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatChipsModule,
    MatToolbarModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatInputModule,
    RouterModule.forRoot([
      { path: '', component: QuestionListComponent },
      { path: 'questions/:id', component: QuestionDetailComponent },
      { path: '', redirectTo: 'question-list', pathMatch: 'full' }
    ])
  ],
  providers: [DataService,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }],
  bootstrap: [AppComponent],
  entryComponents: [CorrectAnswerFeedbackComponent, IncorrectAnswerFeedbackComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);