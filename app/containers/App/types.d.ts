import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

type city = {
  id: number;
  name: string;
  malls: Array<number>;
}

type mall = {
  id: number;
  name: string;
  shops: Array<number>;
}

type shop = {
  id: number;
  name: string;
}

interface AppState { 
  cities: Array<city>,
  malls: Array<mall>,
  shops: Array<shop>
}



/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = AppState;
type ContainerActions = AppActions;

export { RootState, ContainerState, ContainerActions };
