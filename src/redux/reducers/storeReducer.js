import { STORE } from "../types/storeType";

const INITIAL_STATE = {
  storeData: {},
  userAddedStatus: false
};

const storeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE.UPDATE_STORE_INFO:
      return {
        ...state,
        storeData: action.data
      };

    case STORE.USER_ADDED_SUCCESS:
      return {
        ...state,
        userAddedStatus: action.data
      };

    default:
      return state;
  }
};

export default storeReducer;
