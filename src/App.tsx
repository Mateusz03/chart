import React, { useState, useEffect } from "react";
import {
  CreateCanal,
  Chart,
  CanalsTable,
} from "./components/provider.components";
import { StyledApp } from "./App.style";
import { DataInterface, DataContext } from "./contexts/Data.context";
import ReadItem from "./connections/ReadItem.connection";

const App = () => {
  const [data, setData] = useState<DataInterface[]>([
    { canal: "Canal", qty: "qty" },
  ]);

  useEffect(() => {
    (async () => {
      const itemsData = await ReadItem();
      setData([...data, ...itemsData]);
    })();
  }, []);

  return (
    <StyledApp>
      <DataContext.Provider value={{ data, setData }}>
        <CreateCanal />
        <CanalsTable />
        <Chart />
      </DataContext.Provider>
    </StyledApp>
  );
};

export default App;
