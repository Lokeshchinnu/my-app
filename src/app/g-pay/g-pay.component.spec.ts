import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GPayComponent } from './g-pay.component';

describe('GPayComponent', () => {
  let component: GPayComponent;
  let fixture: ComponentFixture<GPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GPayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
