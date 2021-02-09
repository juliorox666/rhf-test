import { http } from "services/api";

export interface User {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  gender: string;
}

export const createUser = (dataUser: User) => {
  return http.post<User>("/login", {
    ...dataUser,
  });
};
