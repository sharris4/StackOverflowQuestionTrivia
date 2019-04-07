import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogResponse } from 'src/models/dialog-response.model';

@Component({
  selector: 'app-incorrect-answer-feedback',
  templateUrl: 'incorrect-answer-feedback.component.html',
})
export class IncorrectAnswerFeedbackComponent {
  constructor(
    public dialogRef: MatDialogRef<IncorrectAnswerFeedbackComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogResponse) { }
}
