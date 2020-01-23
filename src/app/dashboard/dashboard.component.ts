import { Component, OnInit } from '@angular/core';
import { Poll } from '../models/polls';
import { PollService } from '../poll.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  polls: Poll[] = [];

  constructor(private pollService: PollService) { }

  ngOnInit() {
    this.getPolls();
  }

  getPolls(): void {
    this.pollService.getPolls()
      .subscribe(polls => this.polls = polls);
  }
}
