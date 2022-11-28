import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page101Component } from './page101.component';

describe('Page101Component', () => {
  let component: Page101Component;
  let fixture: ComponentFixture<Page101Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page101Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
