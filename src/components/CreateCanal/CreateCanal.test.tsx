import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CreateCanal from "./CreateCanal.component";
import { DataContext } from "../../contexts/Data.context";

describe("CreateCanal", () => {
  it("should update text state on input change", () => {
    const { getByLabelText } = render(<CreateCanal />);

    fireEvent.change(getByLabelText("Canal"), {
      target: { value: "New Canal" },
    });
    fireEvent.change(getByLabelText("Quantity"), { target: { value: "5" } });

    expect(getByLabelText("Canal")).toHaveValue("New Canal");
    expect(getByLabelText("Quantity")).toHaveValue("5");
  });

  it("should add new canal to data on submit", async () => {
    const mockData = [
      { canal: "Canal 1", qty: 5 },
      { canal: "Canal 2", qty: 10 },
    ];

    const setDataMock = jest.fn();
    React.useContext = jest
      .fn()
      .mockReturnValue({ data: mockData, setData: setDataMock });

    const { getByText, getByLabelText } = render(<CreateCanal />);

    fireEvent.change(getByLabelText("Canal"), {
      target: { value: "New Canal" },
    });
    fireEvent.change(getByLabelText("Quantity"), { target: { value: "5" } });

    fireEvent.click(getByText("Add"));

    expect(setDataMock).toHaveBeenCalledTimes(1);
    expect(setDataMock).toHaveBeenCalledWith([
      ...mockData,
      { canal: "New Canal", qty: 5 },
    ]);
  });

  // Dodaj inne testy w celu sprawdzenia poprawności działania komponentu
});
