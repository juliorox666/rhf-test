import React from "react";
import { render, screen, act, fireEvent } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import MyForm from "components/MyForm";

test("check inputs values", () => {
  const handleSetUserName = jest.fn();
  render(<MyForm setUserName={handleSetUserName} />);
  const firstName = screen.getByRole("textbox", { name: /first name/i });
  const lastName = screen.getByRole("textbox", { name: /last name/i });

  fireEvent.change(firstName, { target: { value: "Julio" } });
  fireEvent.change(lastName, { target: { value: "Guedes" } });

  expect(firstName).toHaveValue("Julio");
  expect(lastName).toHaveValue("Guedes");
});

test("submit the form", () => {
  let submittedData;
  // eslint-disable-next-line no-return-assign
  const handleSetUserName = (data: string) => (submittedData = "Julio Guedes");
  render(<MyForm setUserName={handleSetUserName} />);
  const firstName = screen.getByRole("textbox", { name: /first name/i });
  const lastName = screen.getByRole("textbox", { name: /last name/i });

  fireEvent.change(firstName, { target: { value: "Julio" } });
  fireEvent.change(lastName, { target: { value: "Guedes" } });

  expect(firstName).toHaveValue("Julio");
  expect(lastName).toHaveValue("Guedes");

  expect(submittedData).toEqual("Julio Guedes");
});
