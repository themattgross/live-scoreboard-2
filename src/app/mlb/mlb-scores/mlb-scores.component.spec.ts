import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbScoresComponent } from './mlb-scores.component';

describe('MlbScoresComponent', () => {
  let component: MlbScoresComponent;
  let fixture: ComponentFixture<MlbScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlbScoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MlbScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
