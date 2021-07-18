import React, { FunctionComponent } from 'react';
import firebase from '../../firebase';

const PostHomePage: FunctionComponent = () => {
  const handleLogOut = () => {
    firebase.auth().signOut();
  };

  return (
    <div>
      <p>Welcome to Memeclub</p>
      <button onClick={handleLogOut}>Log out</button>
    </div>
  );
};

export default PostHomePage;
