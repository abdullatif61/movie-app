import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGoogleChartsComponent } from './ngx-google-charts.component';

describe('NgxGoogleChartsComponent', () => {
  let component: NgxGoogleChartsComponent;
  let fixture: ComponentFixture<NgxGoogleChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxGoogleChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxGoogleChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
