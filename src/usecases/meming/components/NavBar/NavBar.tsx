import React, { FunctionComponent } from 'react';
import styles from './NavBar.module.css';
import firebase from '../../../../firebase';
import { Grid } from '@material-ui/core';

interface NavBarProps {
  onMenuOpenClick: () => void;
}

const NavBar: FunctionComponent<NavBarProps> = () => {
  const handleLogOut = () => {
    firebase.auth().signOut();
  };

  return (
    <Grid
      id="homepage_navbar"
      className={styles.navBar}
      container
      direction="row-reverse"
    >
      <div
        id="homepage_navbar_menu_button"
        className={styles.menu}
        onClick={handleLogOut}
        role="button"
      >
        Menu
      </div>
      <div
        role="button"
        id="homepage_navbar_about_button"
        className={styles.navBarElement}
      >
        About
      </div>
      <div
        role="button"
        id="homepage_navbar_feature_request_button"
        className={styles.navBarElement}
      >
        Feature Request
      </div>
    </Grid>
  );
};

export default NavBar;
