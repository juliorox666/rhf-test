import React from "react";
import { render, act, fireEvent } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import MyForm from "components/MyForm";

test("check inputs values", () => {
  const mockOnSubmit = jest.fn();
  const { getByRole } = render(<MyForm onSubmitHandler={mockOnSubmit} />);
  const firstName = getByRole("textbox", { name: /first name/i });
  const lastName = getByRole("textbox", { name: /last name/i });

  act(() => {
    fireEvent.change(firstName, { target: { value: "Julio" } });
    fireEvent.change(lastName, { target: { value: "Guedes" } });
  });

  expect(firstName).toHaveValue("Julio");
  expect(lastName).toHaveValue("Guedes");
});

test("submit the form", () => {
  const mockOnSubmit = jest.fn();
  const { getByRole } = render(<MyForm onSubmitHandler={mockOnSubmit} />);
  const firstName = getByRole("textbox", { name: /first name/i });
  const lastName = getByRole("textbox", { name: /last name/i });

  act(() => {
    fireEvent.change(firstName, { target: { value: "Julio" } });
    fireEvent.change(lastName, { target: { value: "Guedes" } });
  });

  act(() => {
    fireEvent.click(getByRole("button", { name: /send/i }));
  });

  expect(mockOnSubmit).toHaveBeenCalledTimes(1);
});
