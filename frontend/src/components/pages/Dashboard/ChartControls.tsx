// ChartControls.tsx
import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";

interface ChartControlsProps {
  chartType: "bar" | "line";
  onChartTypeChange: (
    event: React.MouseEvent<HTMLElement>,
    newChartType: "bar" | "line" | null
  ) => void;
  onRefreshClick: () => void;
}

const ChartControls: React.FC<ChartControlsProps> = ({
  chartType,
  onChartTypeChange,
  onRefreshClick,
}) => (
  <ToggleButtonGroup
    value={chartType}
    exclusive
    onChange={onChartTypeChange}
    aria-label="chart-type"
  >
    <ToggleButton value="bar" aria-label="bar-chart">
      Bar Chart
    </ToggleButton>
    <ToggleButton value="line" aria-label="line-chart">
      Line Chart
    </ToggleButton>
    <IconButton onClick={onRefreshClick} aria-label="refresh">
      <RefreshIcon />
    </IconButton>
  </ToggleButtonGroup>
);

export default ChartControls;
