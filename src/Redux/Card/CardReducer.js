import { cardAdd } from "./CardAction";
import { CARD_ADD } from "./CardType";
const initialState = {
  error: "no error",
};

const CardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARD_ADD:
      return {
        error: "Please login to make purchase",
      };
    default:
      return state;
  }
};

export default CardReducer;
