import React from "react";
import { render, act, fireEvent } from "@testing-library/react";
import MyForm from "components/MyForm";

describe("Form validation", () => {
  test("should inputs change values", () => {
    const mockOnSubmit = jest.fn();
    const { getByTestId } = render(<MyForm onSubmitHandler={mockOnSubmit} />);

    const firstName = getByTestId("firstName") as HTMLInputElement;
    const lastName = getByTestId("lastName") as HTMLInputElement;

    act(() => {
      fireEvent.change(firstName, { target: { value: "Julio" } });
      fireEvent.change(lastName, { target: { value: "Guedes" } });
    });

    expect(firstName).toHaveValue("Julio");
    expect(lastName).toHaveValue("Guedes");
  });

  test("should firstName be required for submitting", async () => {
    const mockOnSubmit = jest.fn();
    const { getByTestId, container } = render(
      <MyForm onSubmitHandler={mockOnSubmit} />
    );

    const firstName = getByTestId("firstName") as HTMLInputElement;
    const lastName = getByTestId("lastName") as HTMLInputElement;
    const submit = getByTestId("submit");

    await act(async () => {
      fireEvent.input(firstName, { target: { value: "" } });
    });
    await act(async () => {
      fireEvent.input(lastName, { target: { value: "Guedes" } });
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
    const submit = getByTestId("submit");

    await act(async () => {
      fireEvent.input(firstName, { target: { value: "Julio" } });
    });
    await act(async () => {
      fireEvent.input(lastName, { target: { value: "" } });
    });

    await act(async () => {
      fireEvent.click(submit);
    });

    expect(container).toMatchSnapshot();
  });

  test("should be able to submit the form", async () => {
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

    await act(async () => {
      fireEvent.change(firstName, { target: { value: "Julio" } });
      fireEvent.change(lastName, { target: { value: "Guedes" } });
      fireEvent.change(phone, { target: { value: "31998282827" } });
      fireEvent.change(email, { target: { value: "julio@gmail.com" } });
      fireEvent.change(gender, { target: { value: "male" } });
    });

    await act(async () => {
      fireEvent.click(submit);
    });

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(container).toMatchSnapshot();
  });
});
