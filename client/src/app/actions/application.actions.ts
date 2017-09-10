import { Action } from '@ngrx/store';
import { type } from './util';

export const actionTypes = {
  APPLICATION_MASK_LOADING:            type('[Application] Application Mask Loading'),
};

/**
 * Action to indicate the requesting to update the state of the Application Loading Mask
 * @param enabled {boolean} - whether to enable the mask
 */
export class ApplicationMaskLoading implements Action {
  type = actionTypes.APPLICATION_MASK_LOADING;
  constructor(public payload: { loading: boolean }) { }
}


export type Actions =
    ApplicationMaskLoading;
