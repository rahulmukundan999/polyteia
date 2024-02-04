import React, { useEffect, useState } from "react";
import { ResponsiveBar, BarDatum } from "@nivo/bar";
import { ChartData } from "../../types";

interface BarChartProps {
  data: ChartData[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const [numericData, setNumericData] = useState<BarDatum[]>([]);

  useEffect(() => {
    setNumericData(data as unknown as BarDatum[]);
  }, [data]);

  return (
    <div style={{ height: "70vh" }}>
      {numericData?.length > 0 ? (
        <ResponsiveBar
          data={numericData}
          keys={["value"]}
          indexBy="timestamp"
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
