import React from "react";
import {
  render,
  act,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import MyForm from "components/MyForm";
import { User, createUser } from "services/user";

const formUserValues = {
  firstName: "Julio",
  lastName: "Guedes",
  phone: "3199282822",
  email: "julio@gmail.com",
  gender: "male",
};

jest.mock("services/user");
const createUserSpy: jest.SpyInstance = createUser as any;
beforeEach(() =>
  createUserSpy.mockResolvedValue({
    data: {
      ...formUserValues,
    },
  })
);

describe("Form fields", () => {
  test("should inputs change values", () => {
    const mockOnSubmit = jest.fn();
    const { getByTestId } = render(<MyForm onSubmitHandler={mockOnSubmit} />);
    const firstName = getByTestId("firstName") as HTMLInputElement;
    const lastName = getByTestId("lastName") as HTMLInputElement;
    const phone = getByTestId("phone") as HTMLInputElement;
    const email = getByTestId("email") as HTMLInputElement;
    const gender = getByTestId("gender") as HTMLSelectElement;

    act(() => {
      fireEvent.change(firstName, {
        target: { value: formUserValues.firstName },
      });
    });
    act(() => {
      fireEvent.change(lastName, {
        target: { value: formUserValues.lastName },
      });
    });
    act(() => {
      fireEvent.change(phone, { target: { value: formUserValues.phone } });
    });
    act(() => {
      fireEvent.change(email, { target: { value: formUserValues.email } });
    });
    act(() => {
      fireEvent.change(gender, { target: { value: formUserValues.gender } });
    });

    expect(firstName).toHaveValue("Julio");
    expect(lastName).toHaveValue("Guedes");
    expect(phone).toHaveValue("3199282822");
    expect(email).toHaveValue("julio@gmail.com");
    expect(gender).toHaveValue("male");
  });

  test("should firstName be required for submitting", async () => {
    const mockOnSubmit = jest.fn();
    const { getByTestId, container } = render(
      <MyForm onSubmitHandler={mockOnSubmit} />
    );

    const firstName = getByTestId("firstName") as HTMLInputElement;
    const lastName = getByTestId("lastName") as HTMLInputElement;
    const phone = getByTestId("phone") as HTMLInputElement;
    const email = getByTestId("email") as HTMLInputElement;
    const gender = getByTestId("gender") as HTMLSelectElement;

    const submit = getByTestId("submit");

    act(() => {
      fireEvent.change(firstName, {
        target: { value: "" },
      });
    });
    act(() => {
      fireEvent.change(lastName, {
        target: { value: formUserValues.lastName },
      });
    });
    act(() => {
      fireEvent.change(phone, { target: { value: formUserValues.phone } });
    });
    act(() => {
      fireEvent.change(email, { target: { value: formUserValues.email } });
    });
    act(() => {
      fireEvent.change(gender, { target: { value: formUserValues.gender } });
    });

    await act(async () => {
      fireEvent.click(submit);
    });

    expect(container).toMatchSnapshot();
  });

  test("should lastName be required for submitting", async () => {
    const mockOnSubmit = jest.fn();
    const { getByTestId, container } = render(
      <MyForm onSubmitHandler={mockOnSubmit} />
    );

    const firstName = getByTestId("firstName") as HTMLInputElement;
    const lastName = getByTestId("lastName") as HTMLInputElement;
    const phone = getByTestId("phone") as HTMLInputElement;
    const email = getByTestId("email") as HTMLInputElement;
    const gender = getByTestId("gender") as HTMLSelectElement;

    const submit = getByTestId("submit");

    act(() => {
      fireEvent.change(firstName, {
        target: { value: formUserValues.firstName },
      });
    });
    act(() => {
      fireEvent.change(lastName, { target: "" });
    });
    act(() => {
      fireEvent.change(phone, { target: { value: formUserValues.phone } });
    });
    act(() => {
      fireEvent.change(email, { target: { value: formUserValues.email } });
    });
    act(() => {
      fireEvent.change(gender, { target: { value: formUserValues.gender } });
    });

    await act(async () => {
      fireEvent.click(submit);
    });

    expect(container).toMatchSnapshot();
  });

  test("should phone be required for submitting", async () => {
    const mockOnSubmit = jest.fn();
    const { getByTestId, container } = render(
      <MyForm onSubmitHandler={mockOnSubmit} />
    );

    const firstName = getByTestId("firstName") as HTMLInputElement;
    const lastName = getByTestId("lastName") as HTMLInputElement;
    const phone = getByTestId("phone") as HTMLInputElement;
    const email = getByTestId("email") as HTMLInputElement;
    const gender = getByTestId("gender") as HTMLSelectElement;

    const submit = getByTestId("submit");

    act(() => {
      fireEvent.change(firstName, {
        target: { value: formUserValues.firstName },
      });
    });
    act(() => {
      fireEvent.change(lastName, {
        target: { value: formUserValues.lastName },
      });
    });
    act(() => {
      fireEvent.change(phone, { target: { value: "" } });
    });
    act(() => {
      fireEvent.change(email, { target: { value: formUserValues.email } });
    });
    act(() => {
      fireEvent.change(gender, { target: { value: formUserValues.gender } });
    });

    await act(async () => {
      fireEvent.click(submit);
    });

    expect(container).toMatchSnapshot();
  });

  test("should email be required for submitting", async () => {
    const mockOnSubmit = jest.fn();
    const { getByTestId, container } = render(
      <MyForm onSubmitHandler={mockOnSubmit} />
    );

    const firstName = getByTestId("firstName") as HTMLInputElement;
    const lastName = getByTestId("lastName") as HTMLInputElement;
    const phone = getByTestId("phone") as HTMLInputElement;
    const email = getByTestId("email") as HTMLInputElement;
    const gender = getByTestId("gender") as HTMLSelectElement;

    const submit = getByTestId("submit");

    act(() => {
      fireEvent.change(firstName, {
        target: { value: formUserValues.firstName },
      });
    });
    act(() => {
      fireEvent.change(lastName, {
        target: { value: formUserValues.lastName },
      });
    });
    act(() => {
      fireEvent.change(phone, { target: { value: formUserValues.phone } });
    });
    act(() => {
      fireEvent.change(email, { target: { value: "" } });
    });
    act(() => {
      fireEvent.change(gender, { target: { value: formUserValues.gender } });
    });

    await act(async () => {
      fireEvent.click(submit);
    });

    expect(container).toMatchSnapshot();
  });

  test("should gender be required for submitting", async () => {
    const mockOnSubmit = jest.fn();
    const { getByTestId, container } = render(
      <MyForm onSubmitHandler={mockOnSubmit} />
    );

    const firstName = getByTestId("firstName") as HTMLInputElement;
    const lastName = getByTestId("lastName") as HTMLInputElement;
    const phone = getByTestId("phone") as HTMLInputElement;
    const email = getByTestId("email") as HTMLInputElement;
    const gender = getByTestId("gender") as HTMLSelectElement;

    const submit = getByTestId("submit");

    act(() => {
      fireEvent.change(firstName, {
        target: { value: formUserValues.firstName },
      });
    });
    act(() => {
      fireEvent.change(lastName, {
        target: { value: formUserValues.lastName },
      });
    });
    act(() => {
      fireEvent.change(phone, { target: { value: formUserValues.phone } });
    });
    act(() => {
      fireEvent.change(email, { target: { value: formUserValues.email } });
    });
    act(() => {
      fireEvent.change(gender, { target: { value: "" } });
    });

    await act(async () => {
      fireEvent.click(submit);
    });

    expect(container).toMatchSnapshot();
  });
});

describe("Form submitting", () => {
  test("should submit the form with success", async () => {
    const mockOnSubmit = jest.fn();
    const { getByTestId, container } = render(
      <MyForm onSubmitHandler={mockOnSubmit} />
    );

    const firstName = getByTestId("firstName") as HTMLInputElement;
    const lastName = getByTestId("lastName") as HTMLInputElement;
    const phone = getByTestId("phone") as HTMLInputElement;
    const email = getByTestId("email") as HTMLInputElement;
    const gender = getByTestId("gender") as HTMLSelectElement;

    const submit = getByTestId("submit");

    act(() => {
      fireEvent.change(firstName, {
        target: { value: formUserValues.firstName },
      });
    });
    act(() => {
      fireEvent.change(lastName, {
        target: { value: formUserValues.lastName },
      });
    });
    act(() => {
      fireEvent.change(phone, { target: { value: formUserValues.phone } });
    });
    act(() => {
      fireEvent.change(email, { target: { value: formUserValues.email } });
    });
    act(() => {
      fireEvent.change(gender, { target: { value: formUserValues.gender } });
    });

    await act(async () => {
      fireEvent.click(submit);
    });

    // waitForElementToBeRemoved(() => getByTestId("icon-loading"));
    // expect(getByTestId("icon-loading")).toBeInTheDocument();

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(container).toMatchSnapshot();
  });

  test("should fail the submit the form", async () => {
    createUserSpy.mockRejectedValue({});

    const mockOnSubmit = jest.fn();
    const { getByTestId, container } = render(
      <MyForm onSubmitHandler={mockOnSubmit} />
    );

    const firstName = getByTestId("firstName") as HTMLInputElement;
    const lastName = getByTestId("lastName") as HTMLInputElement;
    const phone = getByTestId("phone") as HTMLInputElement;
    const email = getByTestId("email") as HTMLInputElement;
    const gender = getByTestId("gender") as HTMLSelectElement;

    const submit = getByTestId("submit");

    act(() => {
      fireEvent.change(firstName, {
        target: { value: formUserValues.firstName },
      });
    });
    act(() => {
      fireEvent.change(lastName, {
        target: { value: formUserValues.lastName },
      });
    });
    act(() => {
      fireEvent.change(phone, { target: { value: formUserValues.phone } });
    });
    act(() => {
      fireEvent.change(email, { target: { value: formUserValues.email } });
    });
    act(() => {
      fireEvent.change(gender, { target: { value: formUserValues.gender } });
    });

    await act(async () => {
      fireEvent.click(submit);
    });

    // await waitForElementToBeRemoved(() => getByTestId("icon-loading"));
    // expect(getByTestId("icon-loading")).toBeInTheDocument();
    expect(mockOnSubmit).toHaveBeenCalledTimes(0);
    expect(container).toMatchSnapshot();
  });

  test("should fail in the first time and succeed on second time", async () => {
    createUserSpy.mockRejectedValueOnce({});

    const mockOnSubmit = jest.fn();
    const { getByTestId } = render(<MyForm onSubmitHandler={mockOnSubmit} />);

    const firstName = getByTestId("firstName") as HTMLInputElement;
    const lastName = getByTestId("lastName") as HTMLInputElement;
    const phone = getByTestId("phone") as HTMLInputElement;
    const email = getByTestId("email") as HTMLInputElement;
    const gender = getByTestId("gender") as HTMLSelectElement;

    const submit = getByTestId("submit");

    act(() => {
      fireEvent.change(firstName, {
        target: { value: formUserValues.firstName },
      });
    });
    act(() => {
      fireEvent.change(lastName, {
        target: { value: formUserValues.lastName },
      });
    });
    act(() => {
      fireEvent.change(phone, { target: { value: formUserValues.phone } });
    });
    act(() => {
      fireEvent.change(email, { target: { value: formUserValues.email } });
    });
    act(() => {
      fireEvent.change(gender, { target: { value: formUserValues.gender } });
    });

    await act(async () => {
      fireEvent.click(submit);
    });

    // await waitForElementToBeRemoved(() => getByTestId("icon-loading"));

    expect(mockOnSubmit).toHaveBeenCalledTimes(0);
    expect(getByTestId("alert-message-error")).toBeInTheDocument();

    act(() => {
      fireEvent.change(firstName, {
        target: { value: "novonome" },
      });
    });
    act(() => {
      fireEvent.change(lastName, {
        target: { value: formUserValues.lastName },
      });
    });
    act(() => {
      fireEvent.change(phone, { target: { value: formUserValues.phone } });
    });
    act(() => {
      fireEvent.change(email, { target: { value: formUserValues.email } });
    });
    act(() => {
      fireEvent.change(gender, { target: { value: formUserValues.gender } });
    });

    await act(async () => {
      fireEvent.click(submit);
    });

    // await waitForElementToBeRemoved(() => getByTestId("icon-loading"));

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(getByTestId("alert-message-success")).toBeInTheDocument();
  });

  test("should loading after submitting", async () => {
    createUserSpy.mockResolvedValue((value) => new Promise(value));

    const mockOnSubmit = jest.fn();
    const { getByTestId } = render(<MyForm onSubmitHandler={mockOnSubmit} />);

    const firstName = getByTestId("firstName") as HTMLInputElement;
    const lastName = getByTestId("lastName") as HTMLInputElement;
    const phone = getByTestId("phone") as HTMLInputElement;
    const email = getByTestId("email") as HTMLInputElement;
    const gender = getByTestId("gender") as HTMLSelectElement;

    const submit = getByTestId("submit");

    act(() => {
      fireEvent.change(firstName, {
        target: { value: formUserValues.firstName },
      });
    });
    act(() => {
      fireEvent.change(lastName, {
        target: { value: formUserValues.lastName },
      });
    });
    act(() => {
      fireEvent.change(phone, { target: { value: formUserValues.phone } });
    });
    act(() => {
      fireEvent.change(email, { target: { value: formUserValues.email } });
    });
    act(() => {
      fireEvent.change(gender, { target: { value: formUserValues.gender } });
    });

    await act(async () => {
      fireEvent.click(submit);
    });

    await waitForElementToBeRemoved(() => getByTestId("icon-loading"));
  });
});
