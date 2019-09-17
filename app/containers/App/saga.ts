import { put } from 'redux-saga/effects';
import { normalize } from 'normalizr';

import * as actions from './actions';
import { citiesSchema } from './schemas';

const apiEndpoint = process.env.API_ENDPOINT;

const getApiResponse = async () => {
    const response = await fetch(apiEndpoint || '', { method: 'GET'});
    return await response.json();
}

export default function* root() {
    const apiResponse = yield getApiResponse();
    console.log(apiResponse);
    const normalized = normalize(apiResponse, citiesSchema)
    console.log(normalized);
    yield put(actions.saveEntities(normalized.entities))
};

