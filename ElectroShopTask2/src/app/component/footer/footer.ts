import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  storeName: string = 'Tech Store';
  storeAddress: string = '123 Main Street, Amman, Jordan';
  contactEmail: string = 'support@techstore.com';
  copyrightMessage: string = '© 2025 Tech Store. All rights reserved.';
}
