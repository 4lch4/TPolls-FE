import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Poll } from '../models/polls';
import { PollService } from '../poll.service';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.scss']
})
export class PollsComponent implements OnInit {
  polls: Poll[] = [];

  constructor(private cookies: CookieService, private pollService: PollService) { }

  ngOnInit() {
    // this.
    console.log(`this.cookies.get('client-id') = ${this.cookies.get('client-id')}`);
    this.getPolls();
  }

  getPolls(): void {
    this.pollService.getPolls()
      .subscribe(polls => this.polls = polls);
  }
}
