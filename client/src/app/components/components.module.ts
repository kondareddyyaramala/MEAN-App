import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


// Common Components
const COMMON_COMPONENTS = [];

export const COMPONENTS = [
  COMMON_COMPONENTS,
];


/**
 * Contains sharable components accessible to all containers in the application
 * @export
 * @class ComponentsModule
 */
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [ COMPONENTS ],
  exports: [ COMPONENTS ],
  entryComponents: [
  ]
})
export class ComponentsModule { }
