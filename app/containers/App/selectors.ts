import { ApplicationRootState } from "types";
import { createSelector, createStructuredSelector } from "reselect";
import { RootState } from "./types";
import { StateProps } from ".";

const selectCityList = (state: ApplicationRootState) => {
  return state.app.cities;
}

const selectSelectedCity = (state: ApplicationRootState) => {
  return state.app.selectedCity;
}

const selectMallList = (state: ApplicationRootState) => {
  return state.app.malls;
}

const selectSelectedMall = (state: ApplicationRootState) => {
  return state.app.selectedMall;
}

const selectShopList = (state: ApplicationRootState) => {
  return state.app.shops;
}

const makeSelectCities = createSelector(selectCityList, cities => {
  return Object.values(cities);
})

const makeSelectMalls = createSelector(selectMallList, selectSelectedCity, 
  (malls, selectedCity) => {
    return selectedCity ? 
      Object.values(malls).filter(m => m.city === selectedCity) : 
      [];
})

const makeSelectShops = createSelector(selectShopList, selectSelectedCity, selectSelectedMall, 
  (shops, selectedCity, selectedMall) => {
    return selectedCity && selectedMall ? 
      Object.values(shops).filter(s => s.mall === selectedMall) :
      (selectedCity) ? 
        Object.values(shops).filter(s => s.city === selectedCity) :
        [];
})

export const selectApp = createStructuredSelector<RootState, StateProps>({
  cities: makeSelectCities,
  malls: makeSelectMalls,
  shops: makeSelectShops,
  selectedCity: selectSelectedCity,
  selectedMall: selectSelectedMall,
})