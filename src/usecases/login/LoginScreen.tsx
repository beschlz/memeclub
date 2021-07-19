import React from 'react';
import { Grid } from '@material-ui/core';
import { FunctionComponent } from 'react';
import styles from './LoginScreen.module.css';
import LoginForm from './components/LoginForm';

const LoginScreen: FunctionComponent = () => {
  return (
    <div className={styles['loginBackground']}>
      <Grid className={styles['mainGrid']} container direction="row">
        <Grid
          container
          direction="row-reverse"
          item
          xs={4}
          alignItems="center"
          alignContent="center"
        >
          <span className={styles['memeclubTitle']}>
            meme
            <br />
            club
          </span>
        </Grid>
        <Grid
          direction="row"
          container
          item
          xs={8}
          alignContent="center"
          alignItems="center"
        >
          <LoginForm />
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginScreen;
