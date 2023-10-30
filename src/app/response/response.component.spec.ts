import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RESPONSEComponent } from './response.component';

describe('RESPONSEComponent', () => {
  let component: RESPONSEComponent;
  let fixture: ComponentFixture<RESPONSEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RESPONSEComponent]
    });
    fixture = TestBed.createComponent(RESPONSEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
