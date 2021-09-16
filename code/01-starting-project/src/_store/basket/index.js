import { createContext, useReducer } from "react";
import { ADD_MEAL, REMOVE_MEAL } from "./actions";
import { reducer } from "./reducer";

export const BasketContext = createContext();

const BasketProvider = (props) => {
  const initialState = {
    basket: [],
    totalAmount: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const addMealToBasket = (meal) => {
    dispatch({ type: ADD_MEAL, meal: meal });
  };

  const removeMealFromBasket = (id) => {
    dispatch({ type: REMOVE_MEAL, id: id });
  };

  const cartContext = {
    basket: state.basket,
    totalAmount: state.totalAmount,
    addMeal: addMealToBasket,
    removeMeal: removeMealFromBasket,
  };

  return (
    <BasketContext.Provider value={{ cartContext }}>
      {props.children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
