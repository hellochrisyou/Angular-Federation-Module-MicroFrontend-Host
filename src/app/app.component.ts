import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'wrapper-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell-test';

  constructor(
    private router: Router
  ) {
    console.log('constructor in shell initiated');
  }

  navigate() {
    this.router.navigateByUrl('test');
  }
}
