import styles from "./MealItemForm.module.css";
import Input from "../UI/Input";
import { useRef } from "react";

const MealItemForm = ({ id, meal, onAddMeal }) => {
  const inputAmountRef = useRef();

  const submitForm = (event) => {
    event.preventDefault();
    onAddMeal(inputAmountRef.current.value);
  };

  return (
    <form onSubmit={submitForm} className={styles.form}>
      <Input
        ref={inputAmountRef}
        id={`amount_${id}`}
        label="Amount"
        type="number"
        max={5}
        min={1}
        step="1"
        defaultValue={1}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
