import React from "react";
import styles from "./ListUsers.module.css";

const ListUsers = ({ users }) => {
  return (
    <ol>
      {users.map((user) => {
        return <li key={user.name}>{user.name}</li>;
      })}
    </ol>
  );
};

export default ListUsers;
