import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/services/data.service';
import { ApiResponse } from 'src/models/api.response.model';
import { QuestionDetail } from 'src/models/question-detail.model';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {
  apiResponse: ApiResponse;
  questionDetail: QuestionDetail;
  callsLeft: number;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
    console.log(this.route.snapshot.paramMap.get('question_id'));
  }

  getQuestionDetail(id: number) {
    this.dataService.getQuestionDetail(id).subscribe(result => {
      this.apiResponse = result;
      this.questionDetail = this.apiResponse.items;
      this.callsLeft = this.apiResponse.quota_remaining;
    });
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.getQuestionDetail(id);
  }
}
