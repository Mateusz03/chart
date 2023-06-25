import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import CanalsTable from "./CanalsTable";
import { DataContext } from "../../contexts/Data.context";
import UpdateItem from "../../connections/UpdateItem.connection";
import DeleteItem from "../../connections/DeleteItem.connection";

// Mocki dla UpdateItem i DeleteItem
jest.mock("../../connections/UpdateItem.connection", () => jest.fn());
jest.mock("../../connections/DeleteItem.connection", () => jest.fn());

describe("CanalsTable", () => {
  it("should update item on update button click", async () => {
    const mockData = [
      { canal: "Canal 1", qty: 5 },
      { canal: "Canal 2", qty: 10 },
    ];
    const mockSetData = jest.fn();

    // Ustawienie wartości dla useContext
    React.useContext = jest
      .fn()
      .mockReturnValue({ data: mockData, setData: mockSetData });

    const { getByText } = render(<CanalsTable />);

    const updateButton = getByText("Update");

    fireEvent.click(updateButton);

    await waitFor(() => {
      expect(UpdateItem).toHaveBeenCalled();
      expect(mockSetData).toHaveBeenCalled();
    });
  });

  it("should delete item on delete button click", async () => {
    const mockData = [
      { canal: "Canal 1", qty: 5 },
      { canal: "Canal 2", qty: 10 },
    ];
    const mockSetData = jest.fn();

    // Ustawienie wartości dla useContext
    React.useContext = jest
      .fn()
      .mockReturnValue({ data: mockData, setData: mockSetData });

    const { getByText } = render(<CanalsTable />);

    const deleteButton = getByText("Delete");

    fireEvent.click(deleteButton);

    await waitFor(() => {
      expect(DeleteItem).toHaveBeenCalled();
      expect(mockSetData).toHaveBeenCalled();
    });
  });
});
