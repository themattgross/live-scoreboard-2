import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbStandingsComponent } from './mlb-standings.component';

describe('MlbStandingsComponent', () => {
  let component: MlbStandingsComponent;
  let fixture: ComponentFixture<MlbStandingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlbStandingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MlbStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
