import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Answer } from 'src/models/answer.model';
import { ApiResponse } from 'src/models/api.response.model';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.scss']
})
export class AnswerListComponent implements OnInit {
  apiResponse: ApiResponse;
  answers: Answer[];
  callsLeft: number;

  constructor(private dataService: DataService, private route: ActivatedRoute) {
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
}
