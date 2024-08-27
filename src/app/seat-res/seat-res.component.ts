import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './seat-res.component.html',
  styleUrls: ['./seat-res.component.scss'],
  imports: [CommonModule, FormsModule, RouterOutlet]
})
export class SeatResComponent {
  title = 'Seat Reservation System';

  seats = Array.from({ length: 100 }, (_, i) => ({
    number: i + 1,
    status: 'normal',
    reservedBy: ''
  }));

  reserverName = '';

  constructor(private router: Router) {}

  selectSeat(seat: any): void {
    if (seat.status === 'reserved') return;

    seat.status = seat.status === 'normal' ? 'selected' : 'normal';
  }

  reserveSeats(): void {
    if (!this.reserverName.trim() || !this.seats.some(seat => seat.status === 'selected')) {
      alert('Please enter a valid name and select at least one seat.');
      return;
    }

    this.seats.forEach(seat => {
      if (seat.status === 'selected') {
        seat.status = 'reserved';
        seat.reservedBy = this.reserverName;
      }
    });

    this.resetSeats();
    this.reserverName = '';

    // Navigate to the payment component
    this.router.navigate(['/payment']);
  }

  resetSeats(): void {
    this.seats.forEach(seat => {
      if (seat.status === 'selected') {
        seat.status = 'normal';
      }
    });
  }
}
