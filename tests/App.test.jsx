import { describe, it, expect } from "vitest";

describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});

import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";
import WeatherApp from "../src/components/weather/Weather";

describe("App", () => {
  it("renders correct heading", () => {
    render(<App />);

    screen.debug();
    screen.getByRole("heading", { level: 4, name: /Tasks/i });
  });

  it("renders C", () => {
    render(<App />);
    screen.getByText((content, element) => {
      const hasTemperatureC = content.includes("°C");
      return hasTemperatureC;
    });
  });

  it("should render a button with the text '°C'", () => {
    render(<WeatherApp />);

    const button = screen.getByRole("button", { name: "°C" });

    expect(button).toBeInTheDocument();
  });

  it("should not call the onClick function when it isn't clicked", async () => {
    const onClick = vi.fn();
    render(<WeatherApp />);

    expect(onClick).not.toHaveBeenCalled();
  });

  it("renders F after button click", async () => {
    const user = userEvent.setup();

    render(<App />);
    const button = screen.getByRole("button", { name: "°C" });

    await user.click(button);

    expect(screen.getByRole("button", { name: "°F" })).toBeInTheDocument();
  });
});
