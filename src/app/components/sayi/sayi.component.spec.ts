import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SayiComponent } from './sayi.component';

describe('SayiComponent', () => {
  let component: SayiComponent;
  let fixture: ComponentFixture<SayiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SayiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SayiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
