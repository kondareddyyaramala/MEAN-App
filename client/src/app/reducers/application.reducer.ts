import { remove, map, isEmpty } from 'lodash';

import { ApplicationActions } from '../actions';

export interface State {
  loadingMaskEnabled: boolean;
}

export const initialState: State = {
  loadingMaskEnabled: false,
};

export function reducer(state = initialState, action: ApplicationActions.Actions): State {
  switch (action.type) {
    case ApplicationActions.actionTypes.APPLICATION_MASK_LOADING: {
      const actionMapping = action as ApplicationActions.ApplicationMaskLoading;
      const payload = actionMapping.payload;
      return Object.assign({}, state, { loadingMaskEnabled: payload.loading });
    }

    default: {
      return state;
    }
  }
}


export const getApplicationLoadingMaskState = (state: State) => { return this.loadingMaskEnabled };