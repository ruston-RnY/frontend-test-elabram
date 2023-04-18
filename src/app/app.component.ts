import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showHeader: boolean = true;

  constructor(private router: Router) {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (
          event['url'] == '/' ||
          event['url'] == '/register' ||
          event['url'] == '/register/success' ||
          event['url'] == '/login'
        ) {
          this.showHeader = false;
        } else {
          this.showHeader = true;
        }
      }
    });
  }
}
