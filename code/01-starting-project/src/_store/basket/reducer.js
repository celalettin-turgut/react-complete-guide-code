import { ADD_MEAL, REMOVE_MEAL } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_MEAL:
      let updatedBasket;
      let indexOfOldMeal = state.basket.findIndex(
        (item) => item.id === action.meal.id
      );
      if (indexOfOldMeal === -1) {
        updatedBasket = state.basket.concat(action.meal);
      } else {
        let _meal = {
          ...state.basket[indexOfOldMeal],
          amount: action.meal.amount + state.basket[indexOfOldMeal].amount,
        };
        let newBasket = [...state.basket];
        newBasket[indexOfOldMeal] = _meal;
        updatedBasket = newBasket;
      }
      return {
        ...state,
        basket: updatedBasket,
        totalAmount: state.totalAmount + action.meal.price * action.meal.amount,
      };
    //return { ...state, basket: [...state.basket, action.meal] };

    case REMOVE_MEAL:
      let updatedItems;
      let indexOfExistingItem = state.basket.findIndex(
        (meal) => meal.id === action.id
      );

      let __meal = state.basket[indexOfExistingItem];
      let _meal = { ...__meal };

      if (_meal.amount > 1) {
        _meal.amount--;
        updatedItems = [...state.basket];
        updatedItems[indexOfExistingItem] = _meal;
      } else {
        updatedItems = state.basket.filter((meal) => meal.id !== action.id);
        console.log(updatedItems);
      }

      const updatedState = {
        basket: updatedItems,
        totalAmount: state.totalAmount - _meal.price,
      };

      return updatedState;

    default:
      return state;
  }
};
