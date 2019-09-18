/**
 *
 * App.js
 *
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';
import { Container, Grid } from '@material-ui/core';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { DAEMON } from 'utils/constants';

import saga from './saga';
import AppWrapper from '../../components/AppWrapper/index';
import appReducer from './reducer';
import { selectApp } from './selectors';
import { City, Shop, Mall } from './types';
import { setSelectedCity, setSelectedMall } from './actions';
import SelectableList from 'components/SelectableList';

interface OwnProps {

}

export interface StateProps {
  cities: Array<City>,
  malls: Array<Mall>,
  shops: Array<Shop>,
  selectedCity?: number;
  selectedMall?: number;
}

interface DispatchProps {
  selectCity(id: number): void,
  selectMall(id: number): void,
}

type Props = StateProps & DispatchProps & OwnProps;
const App: React.FunctionComponent<Props> = ({cities, malls, shops, selectCity, selectMall, selectedCity, selectedMall}: Props) => (
  <AppWrapper>
    <Container maxWidth='lg'>
      <Grid container>
        <Grid item xs={4}>
          <SelectableList listName='Cities' items={cities} selectItem={selectCity} selectedItem={selectedCity} />
        </Grid>
        <Grid item xs={4}>
          <SelectableList listName='Malls' items={malls} selectItem={selectMall} selectedItem={selectedMall} />
        </Grid>
        <Grid item xs={4}>
          <SelectableList listName='Shops' items={shops} />
        </Grid>
      </Grid>
    </Container>
  </AppWrapper>
);

const mapStateToProps = (state) => selectApp(state);

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    selectCity: (id: number) => dispatch(setSelectedCity(id)),
    selectMall: (id: number) => dispatch(setSelectedMall(id)),
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer<OwnProps>({ key: 'app', reducer: appReducer })
const withSaga = injectSaga<OwnProps>({ key: 'app', saga: saga, mode: DAEMON });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(App);
