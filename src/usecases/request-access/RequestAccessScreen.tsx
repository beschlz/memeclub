import { Button, Grid, TextField } from '@material-ui/core';
import React, { FunctionComponent, useState } from 'react';
import styles from './RequestAccessScreen.module.css';

const RequestAccessScreen: FunctionComponent = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');

  const onSendClick = () => {};

  return (
    <Grid container direction="row">
      <Grid item xs={4}>
        <div className={styles.leftSideColorBar} />
      </Grid>
      <Grid
        container
        spacing={0}
        xs={4}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
        item
      >
        <div style={{ width: '600px' }}>
          <p className={styles.introductionText}>
            You are finally about to be able to meme undisturbed
          </p>
          <p className={styles.explanationText}>
            The memeclub is a purely private, non-public meme sharing website.
            Send us your email and you will receive an invite!
          </p>
          <TextField
            variant="outlined"
            margin="normal"
            required
            size="medium"
            fullWidth
            name="name"
            label="Full name"
            id="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            size="medium"
            fullWidth
            name="email"
            label="Email"
            id="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <div style={{ marginTop: '12px' }}>
            <Button
              onClick={onSendClick}
              color="default"
              fullWidth
              variant="contained"
            >
              Request Invite
            </Button>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default RequestAccessScreen;
