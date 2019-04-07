import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ApiResponse } from 'src/models/api.response.model';

@Injectable()
export class DataService {
  baseUrl = 'https://api.stackexchange.com/2.2/questions';
  // tslint:disable-next-line: max-line-length
  questionListFilter = '?page=1&pagesize=10&fromdate=1554076800&todate=1554336000&order=desc&sort=activity&site=stackoverflow&filter=!-MOlBhqR0jWQqhlU)*FWIbSUx)w6984n5';
  // tslint:disable-next-line: max-line-length
  questionDetailFilter = '?order=desc&sort=activity&site=stackoverflow&filter=!*1Si8S9*CO9CgElEdOQD77BwhGOZLNjySH))OEUsz';
  answerListFilter = '/answers?order=desc&sort=activity&site=stackoverflow&filter=!.FjuenCLawYY-G_JTT.xr3hh6sqer';

  apiUrl: string;

  constructor(private httpClient: HttpClient) { }

  getQuestionList(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(this.baseUrl + this.questionListFilter).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError));
  }

  getQuestionDetail(id: number): Observable<ApiResponse> {
    this.apiUrl = `${this.baseUrl}/${id}${this.questionDetailFilter}`;

    return this.httpClient.get<ApiResponse>(this.apiUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError));
  }

  getAnswerList(id: number): Observable<ApiResponse> {
    this.apiUrl = `${this.baseUrl}/${id}${this.answerListFilter}`;

    return this.httpClient.get<ApiResponse>(this.apiUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
