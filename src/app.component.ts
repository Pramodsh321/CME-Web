import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { LoaderService } from './app-core/services/loader.service';

@Component({
  selector: 'app-root',
  template: '<app-loader></app-loader><router-outlet></router-outlet>',
})
export class AppComponent {
  constructor(private loaderService: LoaderService, public router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loaderService.show();
      } else if (event instanceof NavigationEnd) { this.loaderService.hide(); }
    });
  }
}
