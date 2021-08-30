import { useState } from "react";
import styles from "./AddUser.module.css";

const AddUser = ({ users, setUsers }) => {
  const [values, setValues] = useState({ name: "", age: null });

  const addUserHandler = (e) => {
    e.preventDefault();
    console.log(values.name, values.age);
  };

  const handleChange = (prop) => (event) => {
    console.log(prop);
    setValues({ [prop]: event.target.value });
  };

  return (
    <div className={styles.addUserContainer}>
      <form onSubmit={addUserHandler}>
        <div className={styles.formInputContainer}>
          <label htmlFor="name">Name:</label>
          <input onChange={(e) => handleChange("name")} type="text" id="name" />
        </div>
        <div className={styles.formInputContainer}>
          <label htmlFor="age">Age:</label>
          <input onChange={(e) => handleChange("age")} type="number" id="age" />
        </div>
        <div className={styles.formInputContainer}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
