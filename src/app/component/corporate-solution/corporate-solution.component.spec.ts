import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateSolutionComponent } from './corporate-solution.component';

describe('CorporateSolutionComponent', () => {
  let component: CorporateSolutionComponent;
  let fixture: ComponentFixture<CorporateSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
