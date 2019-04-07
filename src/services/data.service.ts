import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ApiResponse } from 'src/models/api.response.model';

@Injectable()
export class DataService {
  baseUrl = 'https:/api.stackexchange.com/2.2/questions';
  // tslint:disable-next-line: max-line-length
  questionListFilter = '?page=1&pagesize=100&order=desc&sort=activity&site=stackoverflow&filter=!-Kh-Dzmy1zav)bcGuyxnsy4QBbP_wZ-pT';
  // tslint:disable-next-line: max-line-length
  questionDetailFilter = '?order=desc&sort=activity&site=stackoverflow&filter=!gB6joeoO-lXk4fd_tX*j-iT6QVMJmQrs0z2';
  answerListFilter = '/answers?order=desc&sort=activity&site=stackoverflow&filter=!FcbCE4Nr4Y)qnu-DxsGY4xoxSv';

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
