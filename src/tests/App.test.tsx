import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { questionsConfig } from "../lib/config";

test("renders app and checks if first question present in DOM", () => {
  render(<App />);
  const linkElement = screen.getByText(questionsConfig[0].title);
  expect(linkElement).toBeInTheDocument();
});


test("renders app and checks if second question present in DOM", () => {
  render(<App />);
  const linkElement = screen.getByText(questionsConfig[1].title);
  expect(linkElement).toBeInTheDocument();
});


test("renders app and checks if third question present in DOM", () => {
  render(<App />);
  const linkElement = screen.getByText(questionsConfig[2].title);
  expect(linkElement).toBeInTheDocument();
});

test("renders app and checks if Vertical Slider present in DOM, having correct children", () => {
  render(<App />);
  const el = screen.getByTestId("slider");
  expect(el).toBeInTheDocument();
  expect(el.childNodes.length).toBe(questionsConfig.length);
});
