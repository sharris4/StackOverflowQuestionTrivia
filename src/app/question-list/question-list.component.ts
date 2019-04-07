import { Component, OnInit } from '@angular/core';
import { Question } from 'src/models/question.model';
import { DataService } from 'src/services/data.service';
import { ApiResponse } from 'src/models/api.response.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  apiResponse: ApiResponse;
  questions: Question[];
  acceptedQuestions: Question[] = [];
  callsLeft: number;

  constructor(private dataService: DataService) {
  }

  public getQuestionList() {
    this.dataService.getQuestionList().subscribe(result => {
      this.apiResponse = result;
      this.questions = this.apiResponse.items;
      this.callsLeft = this.apiResponse.quota_remaining;
      this.acceptedQuestions = this.questions.filter(question => question.answer_count >= 2 && question.accepted_answer_id != null);
    });
  }

  ngOnInit(): void {
    this.getQuestionList();
  }
}
