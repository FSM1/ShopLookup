// import { getType } from 'typesafe-actions';

// import * as actions from './actions'
import { ContainerState, ContainerActions} from './types';
import * as actions from './actions';
import { getType } from 'typesafe-actions';

/*
 *
 * App reducer
 *
 */

export const initialState: ContainerState = {
  cities: [],
  shops: [],
  malls: [],
};

function appReducer(state = initialState, action: ContainerActions) {
  switch (action.type) {
    default:
      return state;
  }
}

export default appReducer;
