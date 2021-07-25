import React from 'react';
import { Grid } from '@material-ui/core';
import { FunctionComponent } from 'react';
import styles from './LoginScreen.module.css';
import LoginForm from './components/LoginForm';

const LoginScreen: FunctionComponent = () => {
  return (
    <div className={styles['loginBackground']}>
      <Grid className={styles['mainGrid']} container direction="row">
        <div
          className="container"
          style={{
            width: '40%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p className={styles['memeclubTitle']}>
            meme
            <br />
            club
          </p>
        </div>
        <div
          className="container"
          style={{
            width: '60%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <LoginForm />
        </div>
      </Grid>
    </div>
  );
};

export default LoginScreen;
