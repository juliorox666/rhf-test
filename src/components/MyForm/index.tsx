import React from "react";
import { styled } from "@material-ui/core/styles";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import "./styles.css";

type FormData = {
  firstName: string;
  lastName: string;
};

const TextFieldCustom = styled(TextField)({
  border: 0,
  borderRadius: 3,
  color: "white",
  height: 36,
  "& > div": {
    height: "inherit",
  },
});

const InputText = React.forwardRef<unknown, TextFieldProps>((props, ref) => (
  <TextFieldCustom
    inputRef={ref}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    variant="outlined"
  />
));

interface MyFormProps {
  onSubmitHandler: (value: string) => void;
}

const MyForm: React.FC<MyFormProps> = ({
  onSubmitHandler = (data) => data,
}: MyFormProps) => {
  const { register, handleSubmit, errors } = useForm<FormData>();
  const onSubmit = handleSubmit(({ firstName, lastName }) => {
    onSubmitHandler(`${firstName} ${lastName}`);
  });

  return (
    <div className="myForm">
      <div className="myForm__title">📝 Register Form</div>
      <div className="myForm__box">
        <form className="formData" onSubmit={onSubmit}>
          <label className="formData__label" htmlFor="firstName">
            <div className="formData__text">First Name</div>
            <InputText
              id="firstName"
              name="firstName"
              ref={register({ required: true })}
            />
            {errors.firstName && <span>firstName is required</span>}
          </label>
          <label className="formData__label" htmlFor="lastName">
            <div className="formData__text">Last Name</div>
            <InputText
              id="lastName"
              name="lastName"
              ref={register({ required: true })}
            />
            {errors.lastName && <span>lastName is required</span>}
          </label>

          <div className="formData__submit submit">
            {/* <input className="submit__button" type="submit" value="Send" /> */}
            <button className="submit__button" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyForm;
