import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';


const styles = theme => createStyles({
  root: {
    display: 'flex',
    backgroundColor: '#00b5bd',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: '#01223b',
  },
  appHeading: {
    flexGrow: 1,
    textAlign: 'center',
    color: 'white',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    minHeight: '100vh',
    padding: `${theme.spacing(9)}px ${theme.spacing(3)}px ${theme.spacing(3)}px `,
  },
});

interface Props extends WithStyles<typeof styles> {
  children: React.ReactNode,
}

const AppWrapper: React.FunctionComponent<Props> = ({ classes, children }: Props) => (
  <Fragment>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant='h3' className={classes.appHeading}>Shop Directory</Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        {children}
      </main>
    </div>
  </Fragment>
)

export default withStyles(styles, { withTheme: true })(AppWrapper);
