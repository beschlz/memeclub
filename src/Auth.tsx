import React, { useState, useEffect, ReactNode } from 'react';
import firebase from './firebase';

export type AuthType = {
  user: firebase.User | null | undefined;
};

export interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = React.createContext<AuthType>({ user: null });

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<
    firebase.User | undefined | null
  >();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user: currentUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
