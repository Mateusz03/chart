import React from "react";
import { render } from "@testing-library/react";
import Chart from "./Chart";
import { DataContext } from "../../contexts/Data.context";

describe("Chart", () => {
  it("should render chart with correct data", () => {
    const mockData = [
      { canal: "Canal 1", qty: 5 },
      { canal: "Canal 2", qty: 10 },
    ];

    // Ustawienie wartości dla useContext
    React.useContext = jest.fn().mockReturnValue({ data: mockData });

    const { container } = render(<Chart />);

    // Sprawdzenie, czy komponent RoundChart został poprawnie wyrenderowany
    expect(container.querySelector("RoundChart")).toBeInTheDocument();

    // Dodaj inne asercje w celu sprawdzenia poprawności danych wyświetlanych na wykresie
  });
});
