import React from "react";
import styles from "./ListUsers.module.css";
import Card from "../UI/Card";

const ListUsers = ({ users }) => {
  return (
    <ol>
      {users.map((user) => {
        return (
          <Card key={user.name}>
            {user.name} ({user.age})
          </Card>
        );
      })}
    </ol>
  );
};

export default ListUsers;
