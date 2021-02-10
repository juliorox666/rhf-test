import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HomePage } from "pages/Home";
import { SigninPage } from "pages/Signin";

test("should be in home page", () => {
  const { container } = render(
    <MemoryRouter initialEntries={["/"]}>
      <HomePage />
    </MemoryRouter>
  );
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="home-page"
      >
        <h1>
          Welcome to Home Page
        </h1>
      </div>
    </div>
  `);
});
test("should be in signin page", () => {
  const { container } = render(
    <MemoryRouter initialEntries={["/signin"]}>
      <SigninPage />
    </MemoryRouter>
  );
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="signin-page"
      >
        <div
          class="my-form"
        >
          <pre>
            <code />
          </pre>
          <div
            class="my-form__message"
          />
          <div
            class="my-form__title"
          >
            📝 Register Form
          </div>
          <div
            class="my-form__box"
          >
            <form
              class="form-data"
            >
              <div
                class="form-data__label"
              >
                <div
                  class="MuiFormControl-root MuiTextField-root WithStyles(ForwardRef(TextField))-root-1"
                >
                  <label
                    class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined"
                    data-shrink="false"
                    for="firstName"
                    id="firstName-label"
                  >
                    First name
                  </label>
                  <div
                    class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl"
                  >
                    <input
                      aria-invalid="false"
                      class="MuiInputBase-input MuiOutlinedInput-input"
                      data-testid="firstName"
                      id="firstName"
                      name="firstName"
                      type="text"
                      value=""
                    />
                    <fieldset
                      aria-hidden="true"
                      class="PrivateNotchedOutline-root-2 MuiOutlinedInput-notchedOutline"
                    >
                      <legend
                        class="PrivateNotchedOutline-legendLabelled-4"
                      >
                        <span>
                          First name
                        </span>
                      </legend>
                    </fieldset>
                  </div>
                  
                </div>
              </div>
              <div
                class="form-data__label"
              >
                <div
                  class="MuiFormControl-root MuiTextField-root WithStyles(ForwardRef(TextField))-root-1"
                >
                  <label
                    class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined"
                    data-shrink="false"
                    for="lastName"
                    id="lastName-label"
                  >
                    Last name
                  </label>
                  <div
                    class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl"
                  >
                    <input
                      aria-invalid="false"
                      class="MuiInputBase-input MuiOutlinedInput-input"
                      data-testid="lastName"
                      id="lastName"
                      name="lastName"
                      type="text"
                      value=""
                    />
                    <fieldset
                      aria-hidden="true"
                      class="PrivateNotchedOutline-root-2 MuiOutlinedInput-notchedOutline"
                    >
                      <legend
                        class="PrivateNotchedOutline-legendLabelled-4"
                      >
                        <span>
                          Last name
                        </span>
                      </legend>
                    </fieldset>
                  </div>
                  
                </div>
              </div>
              <div
                class="form-data__label"
              >
                <div
                  class="MuiFormControl-root MuiTextField-root WithStyles(ForwardRef(TextField))-root-1"
                >
                  <label
                    class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined"
                    data-shrink="false"
                    for="phone"
                    id="phone-label"
                  >
                    Phone
                  </label>
                  <div
                    class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl"
                  >
                    <input
                      aria-invalid="false"
                      class="MuiInputBase-input MuiOutlinedInput-input"
                      data-testid="phone"
                      id="phone"
                      name="phone"
                      type="text"
                      value=""
                    />
                    <fieldset
                      aria-hidden="true"
                      class="PrivateNotchedOutline-root-2 MuiOutlinedInput-notchedOutline"
                    >
                      <legend
                        class="PrivateNotchedOutline-legendLabelled-4"
                      >
                        <span>
                          Phone
                        </span>
                      </legend>
                    </fieldset>
                  </div>
                  
                </div>
              </div>
              <div
                class="form-data__label"
              >
                <div
                  class="MuiFormControl-root MuiTextField-root WithStyles(ForwardRef(TextField))-root-1"
                >
                  <label
                    class="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined"
                    data-shrink="false"
                    for="email"
                    id="email-label"
                  >
                    Email
                  </label>
                  <div
                    class="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl"
                  >
                    <input
                      aria-invalid="false"
                      class="MuiInputBase-input MuiOutlinedInput-input"
                      data-testid="email"
                      id="email"
                      name="email"
                      type="text"
                      value=""
                    />
                    <fieldset
                      aria-hidden="true"
                      class="PrivateNotchedOutline-root-2 MuiOutlinedInput-notchedOutline"
                    >
                      <legend
                        class="PrivateNotchedOutline-legendLabelled-4"
                      >
                        <span>
                          Email
                        </span>
                      </legend>
                    </fieldset>
                  </div>
                  
                </div>
              </div>
              <div
                class="form-data__label"
              >
                <select
                  class="form-data__label select-component "
                  data-testid="gender"
                  name="gender"
                >
                  <option
                    value=""
                  >
                    - SELECT ONE -
                  </option>
                  <option
                    value="male"
                  >
                    Male
                  </option>
                  <option
                    value="female"
                  >
                    Female
                  </option>
                  <option
                    value="other"
                  >
                    Other
                  </option>
                </select>
              </div>
              <div
                class="form-data__label"
              />
              <div
                class="form-data__submit submit"
              >
                <input
                  class="submit__button"
                  data-testid="submit"
                  disabled=""
                  id="submit"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  `);
});
