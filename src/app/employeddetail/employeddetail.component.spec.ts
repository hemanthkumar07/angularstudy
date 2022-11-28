import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeddetailComponent } from './employeddetail.component';

describe('EmployeddetailComponent', () => {
  let component: EmployeddetailComponent;
  let fixture: ComponentFixture<EmployeddetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeddetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
