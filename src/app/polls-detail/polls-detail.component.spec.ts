import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollsDetailComponent } from './polls-detail.component';

describe('PollsDetailComponent', () => {
  let component: PollsDetailComponent;
  let fixture: ComponentFixture<PollsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
