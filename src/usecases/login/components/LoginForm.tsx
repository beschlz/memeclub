import { TextField } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import LoginButton from './LoginButton';
import styles from './LoginForm.module.css';

const LoginForm: FunctionComponent = () => {
  return (
    <form className={styles['loginForm']}>
      <p className={styles['loginText']}>Login</p>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        color="secondary"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <LoginButton />
    </form>
  );
};

export default LoginForm;
