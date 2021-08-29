import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SckotioComponent } from './sckotio.component';

describe('SckotioComponent', () => {
  let component: SckotioComponent;
  let fixture: ComponentFixture<SckotioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SckotioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SckotioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
