import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NoContentContainer } from './no-content.container';

/**
 * No Content Module
 * This module and its contents pertains to all of the No Content logic within the application
 * @export
 * @class NoContentModule
 */
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    NoContentContainer
  ],
  providers: [ ]
})
export class NoContentModule { }
