import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouttimeComponent } from './couttime.component';

describe('CouttimeComponent', () => {
  let component: CouttimeComponent;
  let fixture: ComponentFixture<CouttimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouttimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouttimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
