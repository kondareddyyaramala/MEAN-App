import { NewsActions } from '../actions';
import { NewsModel } from '../models';

export interface State {
  newsCollection: Array<NewsModel>;
}

export const initialState: State = {
  newsCollection: []
};

export function reducer(state = initialState, action: NewsActions.Actions): State {
  switch (action.type) {
    case NewsActions.actionTypes.INITIALIZE_NEWS_COLLECTION: {
      const act = action as NewsActions.InitializeNewsCollection;
      const { newsCollection } = act.payload;
      return Object.assign({}, state, { newsCollection });
    }

    default: {
      return state;
    }
  }
}

export const getNewsCollection = (state: State): Array<NewsModel> => { return state.newsCollection };
