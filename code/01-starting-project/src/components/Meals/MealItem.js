import React from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext, useState, useRef } from "react";
import { BasketContext } from "../../_store/basket";

const MealItem = ({ name, description, price, id, meal }) => {
  const {
    cartContext: { addMeal },
  } = useContext(BasketContext);
  const priceRendered = `$${price.toFixed(2)}`;

  const addMealHandler = (amount) => {
    const _meal = { ...meal, amount: +amount };
    addMeal(_meal);
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{priceRendered}</div>
      </div>
      <div>
        <MealItemForm id={id} meal={meal} onAddMeal={addMealHandler} />
      </div>
    </li>
  );
};

export default MealItem;
