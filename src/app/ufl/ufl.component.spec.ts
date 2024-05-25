import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UflComponent } from './ufl.component';

describe('UflComponent', () => {
  let component: UflComponent;
  let fixture: ComponentFixture<UflComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UflComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UflComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
