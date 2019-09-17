import { ApplicationRootState } from "types";
import { createSelector, createStructuredSelector } from "reselect";
import { RootState } from "./types";
import { StateProps } from ".";

const selectCityList = (state: ApplicationRootState) => {
  return state.app.cities;
}

const makeSelectCities = createSelector(selectCityList, substate => {
  return substate;
})

export const selectApp = createStructuredSelector<RootState, StateProps>({
  cities: makeSelectCities
})