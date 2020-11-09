import React, { createContext, ReactElement, useContext, useEffect, useState } from 'react';
import cookies from 'js-cookie';

import { AuthContextData } from '@app/interfaces/AuthContextData';
import * as auth from '@app/services/Auth';
import { User } from '@app/interfaces/User';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

type Props = {
  children: ReactElement;
};

export const AuthProvider = ({ children }: Props): React.ReactElement => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadingData() {
      const res = cookies.get('authToken');

      res ? await getAuth(res) : setLoading(true);
    }

    loadingData();
  }, []);

  async function getAuth(token: string) {
    const newToken = 'await auth.signInWithToken(token);';
    setLoading(false);
    cookies.set('authToken', token + newToken);
  }

  async function signIn() {
    const response = await auth.signIn();
    setUser(response.user);
    cookies.set('authToken', response.token);
  }

  function signOut() {
    setUser(null);
    cookies.remove('authToken');
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>{children}</AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
