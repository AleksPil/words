import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupTilesComponent } from './group-tiles.component';

describe('GroupTilesComponent', () => {
  let component: GroupTilesComponent;
  let fixture: ComponentFixture<GroupTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupTilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
