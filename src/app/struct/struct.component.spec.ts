import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructComponent } from './struct.component';

describe('StructComponent', () => {
  let component: StructComponent;
  let fixture: ComponentFixture<StructComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StructComponent]
    });
    fixture = TestBed.createComponent(StructComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
