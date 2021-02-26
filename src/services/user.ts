import { AxiosResponse } from "axios";
import { http } from "services/api";
import { User } from "models/User";

export const createUser = (dataUser: User): Promise<AxiosResponse<User>> => {
  if (dataUser.firstName === "err") {
    // its for error testing
    return Promise.reject(new Error("Something is wrong."));
  }
  return http.post<User>(`${process.env.REACT_APP_API_BASE_URL}/login`, {
    ...dataUser,
  });
};
