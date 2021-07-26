import React, { FunctionComponent } from 'react';
import NavBar from './components/NavBar/NavBar';

const PostHomePage: FunctionComponent = () => {
  const handleOpenMenuClick = () => {};

  return (
    <>
      <NavBar onMenuOpenClick={handleOpenMenuClick} />
    </>
  );
};

export default PostHomePage;
