import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlsScoresComponent } from './mls-scores.component';

describe('MlsScoresComponent', () => {
  let component: MlsScoresComponent;
  let fixture: ComponentFixture<MlsScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlsScoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MlsScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
