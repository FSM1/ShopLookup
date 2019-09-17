import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

interface city {
  id: number;
  name: string;
  malls: Array<number>;
}

interface mall {
  id: number;
  name: string;
  shops: Array<number>;
}

interface shop {
  id: number;
  name: string;
}

interface AppState { 
  cities: {
    [id: number]: city; 
  },
  malls: {
    [id: number]: mall; 
  },
  shops: {
    [id: number]: shop; 
  }
}



/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = AppState;
type ContainerActions = AppActions;

export { RootState, ContainerState, ContainerActions };
