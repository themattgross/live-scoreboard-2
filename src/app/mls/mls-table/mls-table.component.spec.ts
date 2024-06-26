import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlsTableComponent } from './mls-table.component';

describe('MlsTableComponent', () => {
  let component: MlsTableComponent;
  let fixture: ComponentFixture<MlsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MlsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
