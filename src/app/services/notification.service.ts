import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor() {}

  showSuccess(message: string) {
    alert(message); 
  }

  showError(message: string) {
    alert(message); 
  }
}
