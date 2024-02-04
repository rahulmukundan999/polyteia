import React, { useEffect, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Box from "@mui/material/Box";
import BarChart from "../../common/Chart/BarChart/BarChart";
import LineChart from "../../common/Chart/LineChart/LineChart";
import DateFilter from "../../common/DateFilter/DateFilter";
import { ApiService } from "../../../services/ApiService";
import { ChartData } from "../../../interface/chart";
import { DateRange } from "@mui/x-date-pickers-pro";
import dayjs, { Dayjs } from "dayjs";

const Dashboard: React.FC = () => {
  const [chartType, setChartType] = useState<"bar" | "line">("bar");
  const [selectedDate, setSelectedDate] = useState<DateRange<Dayjs>>([
    dayjs(),
    dayjs().add(4, "day"),
  ]);
  const [chartData, setChartData] = useState<ChartData[]>([]);

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
      const response = await ApiService.getNumericData(date);
      const formattedData = response.map((item) => ({
        timestamp: new Date(item.timestamp).toLocaleDateString(),
        value: item.value,
      }));
      setChartData(formattedData);
    } catch (error) {
      console.error(`Error fetching data:`, error);
    }
  };

  return (
    <div>
      <Box>
        <DateFilter
          onDateChange={handleDateChange}
          selectedDate={selectedDate}
        />
      </Box>
      <Box marginTop={2}>
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
      </Box>
      <Box marginTop={2}>
        {chartType === "bar" ? (
          <BarChart data={chartData} />
        ) : (
          <LineChart data={chartData} />
        )}
      </Box>
    </div>
  );
};

export default Dashboard;
