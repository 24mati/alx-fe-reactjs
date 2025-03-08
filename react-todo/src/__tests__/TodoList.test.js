import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../TodoList";

test("renders TodoList component", () => {
  render(<TodoList />);
  expect(screen.getByText(/todo list/i)).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  const addButton = screen.getByText(/add todo/i);
  fireEvent.click(addButton);
  expect(screen.getByText(/new task/i)).toBeInTheDocument();
});
