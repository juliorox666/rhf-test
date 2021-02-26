import { User } from "models/User";
import { UPDATE_FORM, FormActionType, SET_USER, RESET } from "../actionTypes";

const initialState: User = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  gender: "",
};

const formState = (state = initialState, action: FormActionType): User => {
  switch (action.type) {
    case UPDATE_FORM: {
      return { ...state, ...action.payload };
    }
    case SET_USER: {
      return { ...state, ...action.payload };
    }
    case RESET:
      return initialState;
    default: {
      return state;
    }
  }
};

export default formState;
