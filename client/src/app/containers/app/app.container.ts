import { Component, ViewEncapsulation, ViewContainerRef } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { throttle } from 'lodash';


/*
 * App Container
 * Top Level Container of the application to bootstrap and route into
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.container.css',
  ],
  templateUrl:'./app.container.html'
})
export class AppContainer {
  constructor() {}

}
