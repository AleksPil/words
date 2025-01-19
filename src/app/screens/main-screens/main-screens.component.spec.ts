import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainScreensComponent } from './main-screens.component';

describe('MainScreensComponent', () => {
  let component: MainScreensComponent;
  let fixture: ComponentFixture<MainScreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainScreensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
