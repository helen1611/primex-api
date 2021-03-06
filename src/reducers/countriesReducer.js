import { FETCH_COUNTRIES } from "../actions/action-types";

const initialState = { countries: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    default:
      return state;
  }
};
