// Chart.tsx
import React from "react";
import BarChart from "../../common/Chart/BarChart/BarChart";
import LineChart from "../../common/Chart/LineChart/LineChart";
import { ChartData } from "../../../interface/chart";
import { useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";

interface ChartProps {
  chartType: "bar" | "line";
  chartData: ChartData[];
}

const Chart: React.FC<ChartProps> = ({ chartType, chartData }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {chartType === "bar" ? (
          <BarChart data={chartData} isSmallScreen={isSmallScreen} />
        ) : (
          <LineChart data={chartData} isSmallScreen={isSmallScreen} />
        )}
      </Grid>
    </Grid>
  );
};

export default Chart;
