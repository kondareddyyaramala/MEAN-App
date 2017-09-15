import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { AppConstants } from '../common/config';

import { NewsModel } from '../models';

@Injectable()
export class NewsService {
  constructor(public http: Http) { }

  getNewsCollection(): Observable<Array<NewsModel>> {
    return this.http.get(AppConstants.newsApiUrl).map(res => res.json().articles.map(news => new NewsModel(news)));
  }
}
