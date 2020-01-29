import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.scss']
})
export class PollsComponent implements OnInit {

  constructor(private cookies: CookieService) { }

  ngOnInit() {
    console.log(this.cookies.get('client-id'));
  }

}
