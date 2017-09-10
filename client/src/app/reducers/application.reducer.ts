import { remove, map, isEmpty } from 'lodash';

import { ApplicationActions } from '../actions';

export interface State {
  loadingMasks: Array<{
    key: string,
    message?: string
  }>;
  loadingMaskEnabled: boolean;
  loadingMaskMessage: string;
}

export const initialState: State = {
  loadingMasks: [],
  loadingMaskEnabled: false,
  loadingMaskMessage: '',
};

export function reducer(state = initialState, action: ApplicationActions.Actions): State {
  switch (action.type) {

    /**
     * Add the item into the array if it is being loaded, remove if it is not
     */
    case ApplicationActions.actionTypes.APPLICATION_MASK_LOADING: {
      const actionMapping = action as ApplicationActions.ApplicationMaskLoading;
      const payload = actionMapping.payload;

      const loadingMasks = state.loadingMasks.slice(0);
      if (payload.loading) {
        loadingMasks.push({
          key: payload.key,
          message: payload.message
        });
      } else {
        remove(loadingMasks, (item) => {
          return item.key === payload.key;
        });
      }

      return Object.assign({}, state, { loadingMasks });
    }

    default: {
      return state;
    }
  }
}

/**
 * Return the longest running request
 */
export const getApplicationLoadingMaskState = (state: State) => {
  if (!isEmpty(state.loadingMasks)) {
    return {
      enabled: true,
      messages: map(state.loadingMasks, mask => mask.message)
    };
  }
  return {
    enabled: false
  };
};
