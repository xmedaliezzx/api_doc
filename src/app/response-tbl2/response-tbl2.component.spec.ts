import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseTbl2Component } from './response-tbl2.component';

describe('ResponseTbl2Component', () => {
  let component: ResponseTbl2Component;
  let fixture: ComponentFixture<ResponseTbl2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponseTbl2Component],
    });
    fixture = TestBed.createComponent(ResponseTbl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
