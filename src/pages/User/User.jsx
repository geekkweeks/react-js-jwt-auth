import React, { useEffect, useState } from "react";
import "./User.scss";
import { getUsers } from "../../api/user-api";
import { DataGrid } from "@mui/x-data-grid";

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

  const columns = [
    { field: "username", headerName: "Username", width: 200 },
    { field: "name", headerName: "Full Name", width: 500 },
  ];

  return (
    <>
      {users ? (
        <DataGrid
          rows={users}
          getRowId={(row) => row.username}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      ) : (
        <p>Not Ok</p>
      )}
    </>
  );
};

export default User;
