import { TextField } from '@material-ui/core';
import React, { FunctionComponent, useState } from 'react';
import LoginButton from './LoginButton';
import styles from './LoginForm.module.css';
import firebase from '../../../firebase';
import { useHistory } from 'react-router-dom';

const LoginForm: FunctionComponent = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleLoginClicked = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      history.push('/');
    } catch {
      setLoginError(true);
    }
  };

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
        onChange={(event) => {
          setEmail(event.target.value);
        }}
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
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      {loginError && <p>Wrong Username or Password</p>}
      <LoginButton onLoginButtonClicked={handleLoginClicked} />
    </form>
  );
};

export default LoginForm;
