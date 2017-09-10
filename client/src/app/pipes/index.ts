import { NgModule } from '@angular/core';
import { Http } from '@angular/http';


import { EllipsisPipe } from './ellipsis/ellipsis';

export const PIPES = [
  EllipsisPipe,
];


@NgModule({
  imports: [
  ],
  declarations: [PIPES],
  exports: [PIPES],
})
export class PipesModule {
  constructor() { }
}
