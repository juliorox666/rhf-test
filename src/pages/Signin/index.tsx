import React from "react";
import MyForm from "components/MyForm";
import { User } from "services/user";

export const SigninPage: React.FC = () => {
  return (
    <div className="signin-page">
      <MyForm onSubmitHandler={(data: User) => JSON.stringify(data)} />
    </div>
  );
};
