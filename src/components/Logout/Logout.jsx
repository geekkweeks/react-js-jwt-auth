import React, { useContext } from "react";
import useAuth from "../../hooks/useAuth";

const Logout = () => {
  const { logoutAction } = useAuth();
  return (
    <button type="button" onClick={logoutAction}>
      Logout
    </button>
  );
};

export default Logout;
