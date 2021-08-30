import { useState } from "react";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = ({ setUsers }) => {
  const [values, setValues] = useState({ name: "", age: "" });

  const addUserHandler = (e) => {
    e.preventDefault();
    if (!values.name || !values.age) return;
    setUsers((prevUsers) => [...prevUsers, values]);
    setValues({ name: "", age: "" });
  };

  const handleChange = (event, prop) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className={styles.addUserContainer}>
      <form onSubmit={addUserHandler}>
        <div className={styles.formInputContainer}>
          <label htmlFor="name">Name:</label>
          <input
            onChange={(e) => handleChange(e, "name")}
            type="text"
            id="name"
            value={values.name}
          />
        </div>
        <div className={styles.formInputContainer}>
          <label htmlFor="age">Age:</label>
          <input
            onChange={(e) => handleChange(e, "age")}
            type="number"
            id="age"
            value={values.age}
          />
        </div>
        <div className={styles.formInputContainer}>
          <Button className={styles.myButton} type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
