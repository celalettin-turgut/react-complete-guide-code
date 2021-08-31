import { useState, useRef } from "react";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = ({ setUsers }) => {
  const [error, setError] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const nameRef = useRef();
  const ageRef = useRef();

  const addUserHandler = (e) => {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    console.log(typeof name, typeof age);
    e.preventDefault();
    let error = [];
    if (!nameRef.current.value) {
      error.push("Please provide a name!");
    }
    if (!ageRef.current.value) {
      error.push("Please provide an age!");
    } else {
      if (+ageRef.current.value < 0) {
        error.push("Please provide a valid age!");
      }
    }

    if (error?.length > 0) {
      setModalOpen(true);
      setError(error);
    } else {
      setUsers((prevUsers) => [...prevUsers, { name, age }]);
    }
  };

  const handleErrorOkay = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.addUserContainer}>
      {modalOpen && (
        <ErrorModal
          handleErrorOkay={handleErrorOkay}
          error={error}
        ></ErrorModal>
      )}
      <form onSubmit={addUserHandler}>
        <div className={styles.formInputContainer}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" ref={nameRef} />
        </div>
        <div className={styles.formInputContainer}>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" ref={ageRef} />
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
