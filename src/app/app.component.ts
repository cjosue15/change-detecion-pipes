import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { CheckAdminUserPipe } from './check-admin.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, CheckAdminUserPipe],
  template: `
    <ng-container *ngIf="user | checkAdminUser">
      <h1>App component</h1>
    </ng-container>
    <button (click)="({})">Click to change</button>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user = {
    isAdmin: true,
  };

  ngOnInit(): void {
    setTimeout(() => {
      this.user = {
        ...this.user,
        isAdmin: false,
      };
    }, 2000);
  }

  showContainer(): boolean {
    console.log('Change detection');

    return this.user.isAdmin;
  }
}
