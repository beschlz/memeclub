import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from './Auth';

interface PrivateRouteProps {
  component: React.FC;
  path: string;
  exact: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component,
  path,
  exact,
}: PrivateRouteProps) => {
  const { user: currentUser } = useContext(AuthContext);
  const condition = currentUser !== undefined && currentUser !== null;

  return condition ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to="/login" />
  );
};
export default PrivateRoute;
