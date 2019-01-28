import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCatererComponent } from './find-caterer.component';

describe('FindCatererComponent', () => {
  let component: FindCatererComponent;
  let fixture: ComponentFixture<FindCatererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCatererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCatererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
