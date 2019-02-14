import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS,
  EMPLOYEE_DELETE_SUCCESS
} from "../actions/types";

const INITIAL_STATE = { name: "", phone: "", shift: "" };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      const key = action.payload.prop;
      const value = action.payload.value;
      return { ...state, [key]: value };
    case EMPLOYEE_CREATE:
    case EMPLOYEE_SAVE_SUCCESS:
    case EMPLOYEE_DELETE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
