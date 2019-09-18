// import { getType } from 'typesafe-actions';

// import * as actions from './actions'
import { ContainerState, ContainerActions } from './types';
import * as actions from './actions';
import { getType } from 'typesafe-actions';

/*
 *
 * App reducer
 *
 */

export const initialState: ContainerState = {
  selectedCity: undefined,
  cities: {},
  selectedMall: undefined,
  malls: {},
  shops: {},
};

function appReducer(state = initialState, action: ContainerActions) {
  switch (action.type) {
    case getType(actions.saveEntities):
      return {
        ...state,
        ...action.payload,
      }
    case getType(actions.setSelectedCity):
      return {
        ...state,
        selectedCity: action.payload,
        selectedMall: undefined,
      }
    case getType(actions.setSelectedMall):
      return {
        ...state,
        selectedMall: action.payload,
      }
    default:
      return state;
  }
}

export default appReducer;
