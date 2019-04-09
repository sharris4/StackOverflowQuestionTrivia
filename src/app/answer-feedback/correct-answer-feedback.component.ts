import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogResponse } from 'src/models/dialog-response.model';

@Component({
  selector: 'app-correct-answer-feedback',
  templateUrl: 'correct-answer-feedback.component.html'
})
export class CorrectAnswerFeedbackComponent {
  constructor(
    public dialogRef: MatDialogRef<CorrectAnswerFeedbackComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogResponse) { }
}
