import { createStandardAction } from 'typesafe-actions';
import ActionTypes from './constants';

export const saveEntities = createStandardAction(ActionTypes.SAVE_ENTITIES)<{}>();
export const setSelectedCity = createStandardAction(ActionTypes.SELECT_CITY)<number>();
export const setSelectedMall = createStandardAction(ActionTypes.SELECT_MALL)<number>();


