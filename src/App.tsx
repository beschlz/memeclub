import React from 'react';
import LoginScreen from './usecases/login/LoginScreen';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostHomePage from './usecases/meming/PostHomePage';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute';
import RequestAccessScreen from './usecases/request-access/RequestAccessScreen';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute component={PostHomePage} path="/" exact />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/requestAccess" component={RequestAccessScreen} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
