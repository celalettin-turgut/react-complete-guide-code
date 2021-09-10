import React from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ name, description, price, id }) => {
  const priceRendered = `$${price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{priceRendered}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
