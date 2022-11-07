import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyrintiComponent } from './ayrinti.component';

describe('AyrintiComponent', () => {
  let component: AyrintiComponent;
  let fixture: ComponentFixture<AyrintiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AyrintiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AyrintiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
