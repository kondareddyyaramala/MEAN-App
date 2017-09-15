import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromReducers from '../../reducers';
import { NewsModel } from '../../models';
import { NewsActions } from '../../actions';


@Component({
  selector: 'news-landing-page',
  styleUrls: ['./news-landing-page.container.scss'],
  templateUrl: './news-landing-page.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsLandingPageContainer {
  public newsCollection: Array<NewsModel>;

  constructor(private store: Store<fromReducers.State>) { }

  ngOnInit() {
    this.store.dispatch(new NewsActions.RequestNewsCollection());
    this.store.select(fromReducers.getNewsCollection)
      .subscribe(newsCollection => {
        this.newsCollection = newsCollection;
      });
  }

}
