import { Button } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import styles from './LoginFormButton.module.css';

interface FunctionComponentProps {
  onLoginButtonClicked: any;
  buttonText: string;
}

const LoginFormButton: FunctionComponent<FunctionComponentProps> = ({
  onLoginButtonClicked,
  buttonText,
}: FunctionComponentProps) => {
  return (
    <div className={styles['loginFromButton']}>
      <Button
        onClick={onLoginButtonClicked}
        color="default"
        fullWidth
        variant="contained"
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default LoginFormButton;
