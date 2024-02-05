// Dashboard.tsx
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import DateFilter from "../../common/DateFilter/DateFilter";
import LinearProgress from "@mui/material/LinearProgress";
import { ApiService } from "../../../services/ApiService";
import ChartControls from "./ChartControls";
import Chart from "./Chart";
import { DateRange } from "@mui/x-date-pickers-pro";
import dayjs, { Dayjs } from "dayjs";
import { ChartData } from "../../../interface/chart";
import Grid from "@mui/material/Grid";

const Dashboard: React.FC = () => {
  const [chartType, setChartType] = useState<"bar" | "line">("bar");
  const [selectedDate, setSelectedDate] = useState<DateRange<Dayjs>>([
    dayjs(),
    dayjs().add(4, "day"),
  ]);
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData(selectedDate);
  }, []);

  const handleChartTypeChange = (
    event: React.MouseEvent<HTMLElement>,
    newChartType: "bar" | "line" | null
  ) => {
    if (newChartType !== null) {
      setChartType(newChartType);
    }
  };

  const handleDateChange = (date: DateRange<Dayjs>) => {
    setSelectedDate(date);
    fetchData(date);
  };

  const fetchData = async (date: DateRange<Dayjs>) => {
    try {
      setLoading(true);
      const response = await ApiService.getNumericData(date);
      const formattedData = response.map((item) => ({
        timestamp: new Date(item.timestamp).toLocaleDateString(),
        value: item.value,
      }));
      setChartData(formattedData);
    } catch (error) {
      console.error(`Error fetching data:`, error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefreshClick = () => {
    fetchData(selectedDate);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <DateFilter
          onDateChange={handleDateChange}
          selectedDate={selectedDate}
        />
      </Grid>
      <Grid item xs={12}>
        <ChartControls
          chartType={chartType}
          onChartTypeChange={handleChartTypeChange}
          onRefreshClick={handleRefreshClick}
        />
      </Grid>
      <Grid item xs={12}>
        {loading ? (
          <LinearProgress />
        ) : (
          <Chart chartType={chartType} chartData={chartData} />
        )}
      </Grid>
    </Grid>
  );
};

export default Dashboard;
