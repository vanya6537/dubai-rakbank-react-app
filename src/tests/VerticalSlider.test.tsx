import React from "react";
import { render, screen } from "@testing-library/react";
import { VerticalSlider } from "../components/VerticalSlider";
import { questionsConfig } from "../lib/config";

test("Check total ToggleCircles in Vertical Slider", () => {
  const total = questionsConfig.length;
  const active = 0;
  
  render(
    <VerticalSlider total={total} active={active} onChange={()=>{}} />
  );

  const option = screen.getByTestId(`slider`);
  expect(option.childNodes.length).toBe(total);
});
