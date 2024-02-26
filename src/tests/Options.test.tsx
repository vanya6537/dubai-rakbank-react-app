import React from "react";
import { render, screen } from "@testing-library/react";
import { Options } from "../components/Options";

test("renders Options component", () => {
  const options = [
    { icon: "icon1", label: "Ok" },
    { icon: "icon2", label: "Good" },
    { icon: "icon3", label: "Great" },
  ];

  render(
    <Options
      data={options}
      answer={undefined}
      setAnswer={(val: string) => {
        console.log(val);
      }}
    />,
  );
  for (let i = 0; i < options.length; i++) {
    const option = screen.getByTestId(`${options[i].label}-${i}`);
    expect(option.textContent).toBe(options[i].icon);
  }
});
