/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { styled } from "@material-ui/core/styles";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import { useForm } from "react-hook-form";
import "./styles.css";

const TextFieldCustom = styled(TextField)({
  border: 0,
  borderRadius: 3,
  color: "white",
});

type InputTextProps = {
  id: string;
  "data-testid": string;
  name: string;
  error: boolean;
  helperText: React.ReactNode;
  label: string;
};
const InputText = React.forwardRef<TextFieldProps, InputTextProps>(
  ({ "data-testid": datatestid, ...props }: InputTextProps, ref) => (
    <TextFieldCustom
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      inputRef={ref}
      inputProps={{ "data-testid": datatestid }}
      variant="outlined"
    />
  )
);

interface User {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  gender: string;
}

interface MyFormProps {
  onSubmitHandler: (data: User) => void;
}

const MyForm: React.FC<MyFormProps> = ({
  onSubmitHandler = (data) => JSON.stringify(data),
}: MyFormProps) => {
  const [user, setUser] = useState<User | null>();
  const {
    register,
    handleSubmit,
    errors,
    formState: { isDirty },
    reset,
  } = useForm<User>();
  const onSubmit = handleSubmit((data) => {
    onSubmitHandler(data);
    setUser(data);
  });

  useEffect(() => {
    if (user) {
      reset(user);
    }
  }, [reset, user]);

  return (
    <div className="my-form">
      <pre>
        <code>{JSON.stringify(user, null, 4)}</code>
      </pre>
      <div className="my-form__message">
        {user?.firstName && (
          <Alert severity="success">Sign up successfully done!</Alert>
        )}
      </div>
      <div className="my-form__title">📝 Register Form</div>
      <div className="my-form__box">
        <form className="form-data" onSubmit={onSubmit}>
          <div className="form-data__label">
            <InputText
              error={!!errors.firstName}
              helperText={
                errors.firstName ? (
                  <span data-testid="firstname-error-message">
                    First name is required
                  </span>
                ) : (
                  ``
                )
              }
              label="First name"
              data-testid="firstName"
              id="firstName"
              name="firstName"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-data__label">
            <InputText
              error={!!errors.lastName}
              helperText={
                errors.lastName ? (
                  <span data-testid="lastname-error-message">
                    Last name is required
                  </span>
                ) : (
                  ``
                )
              }
              label="Last name"
              data-testid="lastName"
              id="lastName"
              name="lastName"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-data__label">
            <InputText
              error={!!errors.phone}
              helperText={errors.phone ? `Phone is required` : ``}
              label="Phone"
              data-testid="phone"
              id="phone"
              name="phone"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-data__label">
            <InputText
              error={!!errors.email}
              helperText={errors.email ? `Email is required` : ``}
              label="Email"
              data-testid="email"
              id="email"
              name="email"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-data__label">
            <select
              className="form-data__label select-component"
              name="gender"
              data-testid="gender"
              ref={register({ required: true })}
            >
              <option value="">- SELECT ONE -</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <span role="alert">Gender is required</span>}
          </div>
          <div className="form-data__submit submit">
            <input
              disabled={!isDirty}
              id="submit"
              data-testid="submit"
              className="submit__button"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyForm;
