import { TestBed } from '@angular/core/testing';

import { NgxGoogleChartsService } from './ngx-google-charts.service';

describe('NgxGoogleChartsService', () => {
  let service: NgxGoogleChartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxGoogleChartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
