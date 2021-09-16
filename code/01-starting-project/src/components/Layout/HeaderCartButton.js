import React, { useContext } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { BasketContext } from "../../_store/basket";

const HeaderCartButton = ({ setVisible }) => {
  const { cartContext } = useContext(BasketContext);
  const numberOfCartItems = cartContext.basket.length;
  console.log("amount", numberOfCartItems);
  return (
    <button onClick={() => setVisible(true)} className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
