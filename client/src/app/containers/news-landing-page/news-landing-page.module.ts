import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NewsLandingPageContainer } from './news-landing-page.container';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    NewsLandingPageContainer
  ],
  providers: [ ]
})
export class NewsLandingPageModule {}
