// src/components/Chart/ChartSwitcher.tsx
import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

const ChartSwitcher: React.FC = () => {
  const [chartType, setChartType] = useState<"bar" | "line">("bar");

  const handleChartTypeChange = (
    event: React.MouseEvent<HTMLElement>,
    newChartType: "bar" | "line" | null
  ) => {
    if (newChartType !== null) {
      setChartType(newChartType);
    }
  };

  return (
    <div>
      <ToggleButtonGroup
        value={chartType}
        exclusive
        onChange={handleChartTypeChange}
        aria-label="chart-type"
      >
        <ToggleButton value="bar" aria-label="bar-chart">
          Bar Chart
        </ToggleButton>
        <ToggleButton value="line" aria-label="line-chart">
          Line Chart
        </ToggleButton>
      </ToggleButtonGroup>

      {chartType === "bar" ? <BarChart /> : <LineChart />}
    </div>
  );
};

export default ChartSwitcher;
