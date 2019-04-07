import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer } from 'src/models/answer.model';
import { ApiResponse } from 'src/models/api.response.model';
import { MatDialog } from '@angular/material';
import { CorrectAnswerFeedbackComponent } from 'src/app/answer-feedback/correct-answer-feedback.component';
import { IncorrectAnswerFeedbackComponent } from '../answer-feedback/incorrect-answer-feedback.component';


@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.scss']
})
export class AnswerListComponent implements OnInit {
  apiResponse: ApiResponse;
  answers: Answer[];
  callsLeft: number;
  router: Router;
  isCorrect: any = true;

  constructor(private dataService: DataService, private route: ActivatedRoute, public dialog: MatDialog) {
    console.log(this.route.snapshot.paramMap.get('question_id'));
  }

  getAnswerList(id: number) {
    this.dataService.getAnswerList(id).subscribe(result => {
      this.apiResponse = result;
      this.answers = this.apiResponse.items;
      this.callsLeft = this.apiResponse.quota_remaining;
    });
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.getAnswerList(id);
  }

  openDialog(isAccepted: boolean) {
    let dialogRef;
    if (isAccepted) {
      dialogRef = this.dialog.open(CorrectAnswerFeedbackComponent, {
        data: { isCorrect: this.isCorrect }
      });
    } else {
      dialogRef = this.dialog.open(IncorrectAnswerFeedbackComponent, {
        data: { isCorrect: this.isCorrect }
      });
    }

    // route back to question list after close
    // use for score keeping?
    dialogRef.afterClosed().subscribe(result => {
      this.isCorrect = result;
      this.router.navigate(['.']);
      console.log('The dialog was closed: ' + result);
    }
    );
  }
}