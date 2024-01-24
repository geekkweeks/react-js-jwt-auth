import React, { useEffect, useState } from "react";
import "./User.scss";
import { getUsers } from "../../api/user-api";

const User = () => {
  const [users, setUsers] = useState(null);

  const getAllUsers = async () => {
    const result = await getUsers();
    console.log(result);
    setUsers(result);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return <>{users ? <p>Data is available</p> : <p>Not Ok</p>}</>;
};

export default User;
