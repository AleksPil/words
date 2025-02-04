import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedButtonComponent } from './selected-button.component';

describe('SelectedButtonComponent', () => {
  let component: SelectedButtonComponent;
  let fixture: ComponentFixture<SelectedButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
