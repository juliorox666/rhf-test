/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { styled } from "@material-ui/core/styles";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { CircularProgress } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { useForm } from "react-hook-form";
import { http } from "services/api";
import { User, createUser } from "services/user";
import "./styles.css";

const TextFieldCustom = styled(TextField)({
  width: "100%",
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

interface MyFormProps {
  onSubmitHandler: (data: User) => void;
}

const MyForm: React.FC<MyFormProps> = ({
  onSubmitHandler = (data) => JSON.stringify(data),
}: MyFormProps) => {
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>();
  const {
    register,
    handleSubmit,
    errors,
    formState: { isDirty },
    reset,
  } = useForm<User>();
  const onSubmit = handleSubmit((dataForm) => {
    setIsLoading(true);
    createUser(dataForm)
      .then((response) => {
        const { data } = response;
        setHasError(false);
        setUser(data);
        onSubmitHandler(data);
        setIsLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setIsLoading(false);
      });
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
          <Alert data-testid="alert-message-success" severity="success">
            Sign up successfully done!
          </Alert>
        )}
        {hasError && (
          <Alert data-testis="alert-message-error" severity="error">
            Oh no, something bad happened.
          </Alert>
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
              helperText={
                errors.phone ? (
                  <span data-testid="phone-error-message">
                    Phone is required
                  </span>
                ) : (
                  ``
                )
              }
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
              helperText={
                errors.email ? (
                  <span data-testid="email-error-message">
                    Email is required
                  </span>
                ) : (
                  ``
                )
              }
              label="Email"
              data-testid="email"
              id="email"
              name="email"
              ref={register({ required: true })}
            />
          </div>
          <div className="form-data__label">
            <select
              className={`form-data__label select-component ${
                errors.gender ? "select-component-error" : ""
              }`}
              name="gender"
              data-testid="gender"
              ref={register({ required: true })}
            >
              <option value="">- SELECT ONE -</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p
                className="select-component__message"
                data-testid="gender-error-message"
                role="alert"
              >
                Gender is required
              </p>
            )}
          </div>
          <div className="form-data__label">
            {isLoading && (
              <CircularProgress
                className="form-data__label loading-icon"
                data-testid="icon-loading"
              />
            )}
          </div>
          <div className="form-data__submit submit">
            <input
              disabled={!isDirty || isLoading}
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
