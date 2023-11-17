import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmpArrComponent } from './gmp-arr.component';

describe('GmpArrComponent', () => {
  let component: GmpArrComponent;
  let fixture: ComponentFixture<GmpArrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmpArrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmpArrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
