import styles from "./MealItemForm.module.css";
import Input from "../UI/Input";

const MealItemForm = (props) => {
  console.log(styles);
  return (
    <form className={styles.form}>
      <Input
        id={`amount_${props.id}`}
        label="Amount"
        type="number"
        max={5}
        min={0}
        step="1"
        defaultValue="1"
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
