import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OscButtonComponent } from './resolume-send-button.component';

describe('OscButtonComponent', () => {
  let component: OscButtonComponent;
  let fixture: ComponentFixture<OscButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OscButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OscButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
