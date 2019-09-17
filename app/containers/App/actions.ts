import { createStandardAction } from 'typesafe-actions';
import ActionTypes from './constants';
import {  } from './types';

export const saveEntities = createStandardAction(ActionTypes.SAVE_ENTITIES)<undefined>();

