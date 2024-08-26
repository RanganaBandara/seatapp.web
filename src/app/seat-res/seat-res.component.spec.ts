import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatResComponent } from './seat-res.component';

describe('SeatResComponent', () => {
  let component: SeatResComponent;
  let fixture: ComponentFixture<SeatResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeatResComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeatResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
