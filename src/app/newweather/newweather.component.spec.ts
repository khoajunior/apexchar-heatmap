import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewweatherComponent } from './newweather.component';

describe('NewweatherComponent', () => {
  let component: NewweatherComponent;
  let fixture: ComponentFixture<NewweatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewweatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
