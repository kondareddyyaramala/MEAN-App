import { Action } from '@ngrx/store';
import { type } from './util';

import { NewsModel } from '../models';

export const actionTypes = {
  REQUEST_NEWS_COLLECTION:            type('[News] Request News Collection'),
  INITIALIZE_NEWS_COLLECTION:         type('[News] Initialize News Collection'),
};


export class RequestNewsCollection implements Action {
  type = actionTypes.REQUEST_NEWS_COLLECTION;
  constructor() { }
}


export class InitializeNewsCollection implements Action {
  type = actionTypes.INITIALIZE_NEWS_COLLECTION;
  constructor(public payload: { newsCollection: Array<NewsModel>}) { }
}


export type Actions =
    RequestNewsCollection |
    InitializeNewsCollection;
