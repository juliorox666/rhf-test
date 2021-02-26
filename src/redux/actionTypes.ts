import { User } from "models/User";

export const UPDATE_FORM = "UPDATE_FORM";
export const SET_USER = "SET_USER";
export const RESET = "RESET";

interface UpdateFormAction {
  type: typeof UPDATE_FORM;
  payload: User;
}

interface SetUserAction {
  type: typeof SET_USER;
  payload: User;
}
interface ResetAction {
  type: typeof RESET;
}

export type FormActionType = UpdateFormAction | SetUserAction | ResetAction;
