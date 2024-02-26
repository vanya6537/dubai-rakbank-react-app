import React from "react";
import { render, screen } from "@testing-library/react";
import { ToggleCircle } from "../components/ToggleCircle";

// Testing the SVG classname here. If it's enabled it's going to be "bg-violet-600" and if it's disabled it's going to be "bg-white"
test("renders single enabled ToggleCircle component", () => {
  render(
    <ToggleCircle key={`circle`} active={0} index={0} onChange={() => {}} />,
  );

  const option = screen.getByLabelText("Vertical Slider Circle");
  expect(option.childNodes[0]).toHaveClass(
    "transition",
    "transform",
    "scale-100",
    "fill-current",
    "text-violet-600",
  );
});

test("renders single DISabled ToggleCircle component", () => {
  render(
    <ToggleCircle key={`circle`} active={1} index={0} onChange={() => {}} />,
  );

  const option = screen.getByLabelText("Vertical Slider Circle");
  expect(option.childNodes[0]).toHaveClass(
    "transition",
    "transform",
    "scale-100",
    "fill-current",
    "text-white",
  );
});
