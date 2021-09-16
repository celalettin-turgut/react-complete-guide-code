import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import BasketProvider from "./_store/basket";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <BasketProvider>
      <Header setVisible={setVisible} />
      <Meals />
      {visible && <Cart setVisible={setVisible} />}
    </BasketProvider>
  );
};

export default App;
