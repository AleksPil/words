import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlModesComponent } from './control-modes.component';

describe('ControlModesComponent', () => {
  let component: ControlModesComponent;
  let fixture: ComponentFixture<ControlModesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlModesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlModesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
