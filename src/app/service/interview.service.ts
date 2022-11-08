import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Interview } from '../model/interview';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  constructor(private httpClient: HttpClient) { }

  ROOT_URL: String = 'http://localhost:8080';

  getInterviewById(id: number): Observable<Interview> {
    return this.httpClient.get<Interview>(
      this.ROOT_URL + '/interview/' + id
    );
  }
}
