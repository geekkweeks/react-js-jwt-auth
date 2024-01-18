import { createContext, useState, useContext } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  const logoutAction = () => {
    // TODO: Need logic here
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        logoutAction,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
