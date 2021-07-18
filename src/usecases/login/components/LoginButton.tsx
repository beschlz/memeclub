import { Button } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import styles from './LoginButton.module.css';

const LoginButton: FunctionComponent = () => {
  return (
    <div className={styles['loginButton']}>
      <Button color="default" fullWidth variant="contained">
        Login
      </Button>
    </div>
  );
};

export default LoginButton;
