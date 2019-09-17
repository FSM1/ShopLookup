/**
 *
 * App.js
 *
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';
import { Container } from '@material-ui/core';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { DAEMON } from 'utils/constants';

import saga from './saga';
import AppWrapper from '../../components/AppWrapper/index';
import appReducer from './reducer';
import { selectApp } from './selectors';

interface OwnProps {

}

export interface StateProps {

}

interface DispatchProps {

}

type Props = StateProps & DispatchProps & OwnProps;
const App: React.FunctionComponent<Props> = (props: Props) => (
  <AppWrapper>
    <Container maxWidth='lg'>
      Hi there
    </Container>
  </AppWrapper>
);

const mapStateToProps = (state) => selectApp(state);

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    dispatch
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
