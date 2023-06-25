import React, { useContext, useState, useEffect, useCallback } from "react";
import { DataContext } from "../../contexts/Data.context";
import { Chart as RoundChart } from "react-google-charts";

export const options = {
  title: "Clients",
  pieHole: 0.6,
  is3D: true,
};

const Chart = () => {
  const { data } = useContext(DataContext);
  const [chartData, setChartData] = useState([]);

  const handleData = useCallback(() => {
    let elements: any;
    for (let i = 0; i < data.length; i++) {
      if (i === 0) {
        elements = [Object.values(data[i])];
      } else elements.push(Object.values(data[i]));
    }

    return elements;
  }, [data]);

  useEffect(() => {
    if (data) {
      setChartData(handleData());
    } else setChartData(handleData());
  }, [handleData, data]);

  return (
    <>
      <RoundChart
        chartType="PieChart"
        width={"650px"}
        height={"650px"}
        data={chartData}
        options={options}
        style={{ position: "absolute", left: "20%", top: "10vh" }}
      />
    </>
  );
};

export default Chart;
