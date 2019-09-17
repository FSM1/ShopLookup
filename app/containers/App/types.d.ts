import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

export interface City {
  id: number;
  name: string;
  malls: Array<number>;
}

export interface Mall {
  id: number;
  name: string;
  shops: Array<number>;
  city: number;
}

export interface Shop {
  id: number;
  name: string;
  mall: number;
  city: number;
}

interface AppState { 
  selectedCity: number | undefined,
  cities: {
    [id: number]: City; 
  },
  selectedMall: number | undefined,
  malls: {
    [id: number]: Mall; 
  },
  shops: {
    [id: number]: Shop; 
  }
}



/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = AppState;
type ContainerActions = AppActions;

export { RootState, ContainerState, ContainerActions };
