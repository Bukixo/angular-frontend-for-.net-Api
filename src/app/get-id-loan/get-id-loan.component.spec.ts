import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIdLoanComponent } from './get-id-loan.component';

describe('GetIdLoanComponent', () => {
  let component: GetIdLoanComponent;
  let fixture: ComponentFixture<GetIdLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetIdLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetIdLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
