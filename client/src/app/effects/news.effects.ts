import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, Action } from '@ngrx/store';

import { NewsActions } from '../actions';
import { NewsService } from '../services';
import * as fromReducers from '../reducers';
import { NewsModel } from '../models';

@Injectable()
export class NewsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<fromReducers.State>,
    private newsService: NewsService,
  ) { }

  /**
   * Fetch News collection data
   * @success: fire off customer data action
   */
  @Effect()
  requestNewsCollection$: Observable<Action> = this.actions$
    .ofType(NewsActions.actionTypes.REQUEST_NEWS_COLLECTION)
    .map((action: NewsActions.RequestNewsCollection) => action)
    .switchMap(payload => {
      return this.newsService.getNewsCollection()
        .map((res: Array<NewsModel>) => {
          return new NewsActions.InitializeNewsCollection({ newsCollection: res });
        })
        .catch(err => {
          return Observable.of(new NewsActions.InitializeNewsCollection({ newsCollection: [] }));
        })
    });
}
