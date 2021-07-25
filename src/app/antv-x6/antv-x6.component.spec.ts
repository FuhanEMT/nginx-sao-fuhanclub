import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntvX6Component } from './antv-x6.component';

describe('AntvX6Component', () => {
  let component: AntvX6Component;
  let fixture: ComponentFixture<AntvX6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntvX6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntvX6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
