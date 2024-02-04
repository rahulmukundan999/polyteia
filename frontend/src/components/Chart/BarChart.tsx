// src/components/Chart/BarChart.tsx
import React, { useEffect, useState } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { ApiService } from "../../services/ApiService";

const BarChart: React.FC = () => {
  const [numericData, setNumericData] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await ApiService.getNumericData();
      // Map API response to BarDatum array
      const formattedData = response.map((item) => ({
        day: new Date(item.timestamp).toLocaleDateString(), // Format to show only the date part
        value: item.value,
      }));
      setNumericData(formattedData);
    } catch (error) {
      console.error("Error fetching numeric data:", error);
    }
  };

  return (
    <div style={{ height: "70vh" }}>
      {numericData?.length > 0 ? (
        <ResponsiveBar
          data={numericData}
          keys={["value"]}
          indexBy="day"
          margin={{ top: 50, right: 130, bottom: 70, left: 60 }}
          padding={0.4}
          valueScale={{ type: "linear" }}
          colors="#3182CE"
          animate={true}
          enableLabel={false}
          axisTop={null}
          axisRight={null}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Value",
            legendPosition: "middle",
            legendOffset: -40,
          }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -45, // Rotate x-axis labels by -45 degrees
            legend: "Category",
            legendPosition: "middle",
            legendOffset: 36,
          }}
          labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          isInteractive={true}
        />
      ) : (
        <p>No numeric data available.</p>
      )}
    </div>
  );
};

export default BarChart;
