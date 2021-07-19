import { Button } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import styles from './LoginButton.module.css';

interface FunctionComponentProps {
  onLoginButtonClicked: any;
}

const LoginButton: FunctionComponent<FunctionComponentProps> = ({
  onLoginButtonClicked,
}: FunctionComponentProps) => {
  return (
    <div className={styles['loginButton']}>
      <Button
        onClick={onLoginButtonClicked}
        color="default"
        fullWidth
        variant="contained"
      >
        Login
      </Button>
    </div>
  );
};

export default LoginButton;
