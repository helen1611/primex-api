import { COUNTRY_SELECTED } from "../actions/action-types";

const initialState = { selectedUsers: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case COUNTRY_SELECTED:
      return {
        ...state,
        selectedUsers: action.payload,
      };
    default:
      return state;
  }
};
