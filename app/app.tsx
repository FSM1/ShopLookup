/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import "core-js/stable";
import "regenerator-runtime/runtime";

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'sanitize.css/sanitize.css';

import App from './containers/App';

import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import 'file-loader?name=[name].[ext]!./.htaccess'; 

import configureStore from './configureStore';
import history from './utils/history';


import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Router } from 'react-router';

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
  typography: {
    fontFamily: '\'Montserrat\', sans-serif',
  },
});

const store = configureStore();

const MOUNT_NODE = document.getElementById('app') as HTMLElement;

const render = (Component = App as React.ComponentType) => {
  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Router history={history}>
          <Component />
        </Router>
      </MuiThemeProvider>
    </Provider>,
    MOUNT_NODE,
  );
};

declare const module: any;
if (module.hot) {
  module.hot.accept(['./containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    // tslint:disable-next-line:max-line-length
    const App = require('./containers/App').default; // https://github.com/webpack/webpack-dev-server/issues/100
    render(App);
  });
}

render();

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install();
}
