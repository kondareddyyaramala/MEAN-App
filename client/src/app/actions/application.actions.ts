import { Action } from '@ngrx/store';

import { type } from './util';

export const actionTypes = {
  APPLICATION_MASK_LOADING:            type('[Application] Application Mask Loading'),
  FORM_VALIDATION_FLAG:                type('[Application] Form Validation Flag')
};

/**
 * Action to indicate the requesting to update the state of the Application Loading Mask
 * @param enabled {boolean} - whether to enable the mask
 * @param message {string} - message to display to the user
 */
export class ApplicationMaskLoading implements Action {
  type = actionTypes.APPLICATION_MASK_LOADING;
  constructor(public payload: {
    key: string,
    loading: boolean
    message?: string
  }) { }
}

/**
 * Action to indicate the requesting to update the state of the Application Loading Mask
 * @param validationFormName {string} - the validationFormName that's checked for validity
 * @param isValid {boolean} - is the form valid
 */
export class UpdateFormValidationFlag implements Action {
  type = actionTypes.FORM_VALIDATION_FLAG;
  constructor(public validationFormName: string, public isValid: boolean) {}
}

export type Actions =
    ApplicationMaskLoading
  | UpdateFormValidationFlag;
