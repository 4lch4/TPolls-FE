import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  username = '4lch4';

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private cookies: CookieService
  ) {
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit(): void {
    this.cookies.set('apiKey', 'oreriutvalkaraprurhasvuzuheledsekeciepvubacvizoruva');
    this.cookies.set('client-id', 'e5ab1a27-09d0-4569-bd48-0f69ab223441');
    this.cookies.set('username', '4lch4');
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }
}
