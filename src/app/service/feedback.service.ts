import { Injectable } from '@angular/core';
import { Candidate } from '../model/candidate';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from '../model/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  constructor(private httpClient: HttpClient) { }

  ROOT_URL: String = 'http://localhost:8080';

  getCandidate(id: number): Observable<Candidate> {
    return this.httpClient.get<Candidate>(
      this.ROOT_URL + '/candidate/' + id
    );
  }

  postFeedback(model: Feedback): Observable<Feedback> {
    return this.httpClient.post<Feedback>(this.ROOT_URL + '/feedback/', model);
  }

}
