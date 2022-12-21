import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataNumbersRequest } from './data-numbers-request';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortNumbersService {
  constructor(private http: HttpClient) {

  }
  public postNumbers(DataNumbersRequest: DataNumbersRequest) {
    return  this.http.post("http://localhost:8080/api/numbers/sort-command", 
      DataNumbersRequest).pipe(retry(1), catchError(throwError))
  }
}
