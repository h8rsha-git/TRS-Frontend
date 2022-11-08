import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidate } from '../model/candidate';
import { Feedback } from '../model/feedback';
import { Interview } from '../model/interview';
import { FeedbackService } from '../service/feedback.service';
import { InterviewService } from '../service/interview.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {

  candidate: Candidate;
  candidateId: number;
  model: Feedback;
  interview: Interview;
  submitted = false;

  // Steps for the project (Day 1)
  // 1. we have interview id from user (from parameter) ✅
  // 2. we need to get interview object ✅
  // 3. we need to extract candidate id from that object ✅
  // 4. we need to save the data in interview table ✅


  // Steps for the project (Day 2)
  // 1. making the asynchronous functions in order ✅
  // 2. making the project -> a microservice

  // 1.1 Imported ActivatedRoute
  constructor(
    private route: ActivatedRoute,
    private feedbackService: FeedbackService,
    private interviewService: InterviewService) {
  }


  ngOnInit() {
    this.getInterviewObj();
  }

  getInterviewObj() {
    // get interview id
    const interview_id = Number(this.route.snapshot.paramMap.get('id'));
    // calling interview object from interview id
    this.interviewService.getInterviewById(interview_id).subscribe((interviewObj: Interview) => {
      this.interview = interviewObj;
      this.candidateId = Number(interviewObj.candidateId);
      this.model = new Feedback(-1, "Exceeds the expectation", 0, "Passed", this.interview);
      // calling candidate object from candidate id
      this.feedbackService.getCandidate(this.candidateId).subscribe((candidateObj: Candidate) => {
        this.candidate = candidateObj;
        console.log("Candidate: " + this.candidate);
      });
    });
  }

  onSubmit() {
    this.submitted = true;
    // send data to database
    this.feedbackService.postFeedback(this.model).subscribe(() => {
      console.log("Form Submitted !!");
    });
    // thank you note
  }

  onSelected(value: string): void {
    this.model.status = value;
  }

  onItemChange(value) {
    this.model.rating = value;
  }

  showResume() {
    // candidate from CandidateService (get by id)
    window.location.href = this.candidate.resume;
  }

}
