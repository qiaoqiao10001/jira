import React from "react";
import { useState } from "react";
import * as auth from "auth-provider";
import { User } from "../screens/project-list/search-panel";

interface AuthForm {
  username: string;
  pwd: string;
}

export const AuthContext = React.createContext<
  | {
      user: User | null;
      register: (form: AuthForm) => Promise<void>;
      login: (form: AuthForm) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);
AuthContext.displayName = "AuthContext";

export const UserStatus = () => {
  const [user, setUser] = useState(null);
  // const login = (form: AuthForm) => auth.login(form).then(setUser);
};

// export const AuthProvider = () => {
//   const [user, setUser] = useState(null);
//   // @ts-ignore
//   const login = (form: AuthForm) => auth.login(form).then(setUser);
//   // @ts-ignore
//   const register = (form: AuthForm) => auth.register(form).then(setUser);
//   const logout = () => auth.logout().then(() => setUser(null));
//   return <AuthContext.Provider value={{ user, login, register, logout }} />;
// };

export {};
