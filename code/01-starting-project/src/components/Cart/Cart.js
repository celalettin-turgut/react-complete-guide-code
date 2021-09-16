import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import { BasketContext } from "../../_store/basket";

const Cart = (props) => {
  const {
    cartContext: { basket, totalAmount, addMeal, removeMeal },
  } = useContext(BasketContext);

  // const group = basket.reduce((curr, meal) => {
  //   const isInclude = Object.keys(curr).includes(meal.id);
  //   // console.log("curr", curr);
  //   // console.log("meal", meal);
  //   if (!isInclude) return { ...curr, [meal.id]: meal };
  //   else {
  //     return {
  //       ...curr,
  //       [meal.id]: { ...meal, amount: meal.amount + curr[meal.id].amount },
  //     };
  //   }
  // }, {});
  // console.log(group);

  const cartItemRemoveHandler = (id) => {
    removeMeal(id);
  };

  const cartItemAddHandler = (item) => {
    const _meal = { ...item, amount: 1 };
    addMeal(_meal);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {basket.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={() => cartItemRemoveHandler(item.id)}
          onAdd={() => cartItemAddHandler(item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal setVisible={props.setVisible}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount.toFixed(2)}$</span>
      </div>
      <div className={classes.actions}>
        <button
          onClick={() => props.setVisible(false)}
          className={classes["button--alt"]}
        >
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
