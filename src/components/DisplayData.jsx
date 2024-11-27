import React from "react";

const DisplayData = ({ users }) => {
  return (
    <div>
      <h2>Stored Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Email: {user.email}, Password: {user.password}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayData;
