import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adminchild1Component } from './adminchild1.component';

describe('Adminchild1Component', () => {
  let component: Adminchild1Component;
  let fixture: ComponentFixture<Adminchild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Adminchild1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adminchild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
