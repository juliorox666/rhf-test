import axios, { AxiosResponse } from "axios";
// import { http } from "services/api";

export interface User {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  gender: string;
}

export const createUser = (dataUser: User): Promise<AxiosResponse<User>> => {
  return axios.post<User>(`${process.env.REACT_APP_API_BASE_URL}/login`, {
    ...dataUser,
  });
};
