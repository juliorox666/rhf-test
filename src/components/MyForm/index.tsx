/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { styled } from "@material-ui/core/styles";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import { Select, MenuItem } from "@material-ui/core";
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

interface UserProps {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  gender: string;
}

interface MyFormProps {
  onSubmitHandler: (data: UserProps) => void;
}

const MyForm: React.FC<MyFormProps> = ({
  onSubmitHandler = (data) => JSON.stringify(data),
}: MyFormProps) => {
  const [user, setUser] = useState<UserProps | null>();
  const {
    register,
    handleSubmit,
    errors,
    setValue,
    watch,
  } = useForm<UserProps>();
  const selectedGender = watch("gender");
  const onSubmit = handleSubmit((data) => {
    onSubmitHandler(data);
    setUser(data);
  });

  const handleChange = (
    event: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    setValue("gender", event.target.value, { shouldValidate: true });
  };

  useEffect(() => {
    register({ name: "gender" }, { required: true });
  }, [register]);

  return (
    <div className="myForm">
      <pre>
        <code>{JSON.stringify(user, null, 4)}</code>
      </pre>
      <div className="myForm__message">
        {user?.firstName && (
          <Alert severity="success">Sign up successfully done!</Alert>
        )}
      </div>
      <div className="myForm__title">📝 Register Form</div>
      <div className="myForm__box">
        <form className="formData" onSubmit={onSubmit}>
          <div className="formData__label">
            <InputText
              error={!!errors.firstName}
              helperText={errors.firstName ? `First name is required` : ``}
              label="First name"
              data-testid="firstName"
              id="firstName"
              name="firstName"
              ref={register({ required: true })}
            />
          </div>
          <div className="formData__label">
            <InputText
              error={!!errors.lastName}
              helperText={errors.lastName ? `Last name is required` : ``}
              label="Last name"
              data-testid="lastName"
              id="lastName"
              name="lastName"
              ref={register({ required: true })}
            />
          </div>
          <div className="formData__label">
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
          <div className="formData__label">
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
          <div className="formData__label">
            <FormControl variant="outlined" error={!!errors.gender} fullWidth>
              <InputLabel htmlFor="gender">Gender</InputLabel>
              <Select
                value={selectedGender}
                onChange={handleChange}
                label="Gender"
                name="gender"
                data-testid="gender"
              >
                <MenuItem value={undefined} />
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
              {errors.gender && (
                <FormHelperText>Gender is required</FormHelperText>
              )}
            </FormControl>
          </div>
          <div className="formData__submit submit">
            <input
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
