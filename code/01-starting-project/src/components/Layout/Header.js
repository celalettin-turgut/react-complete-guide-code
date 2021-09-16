import React from "react";
import styles from "./Header.module.css";
import mealsImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({ setVisible }) => {
  return (
    <div>
      <header className={styles.header}>
        <h1>MyMeals</h1>
        <HeaderCartButton setVisible={setVisible} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImg} alt="meals" />
      </div>
    </div>
  );
};

export default Header;
