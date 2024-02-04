import React, { useEffect, useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import { ChartData } from "../../types";

interface LineChartProps {
  data: ChartData[];
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const [numericData, setNumericData] = useState<ChartData[]>([]);

  useEffect(() => {
    setNumericData(data);
  }, [data]);

  return (
    <div style={{ height: "70vh" }}>
      {numericData.length > 0 ? (
        <ResponsiveLine
          data={[
            {
              id: "value",
              data: numericData.map((point) => ({
                x: point.timestamp,
                y: point.value,
              })),
            },
          ]}
          margin={{ top: 50, right: 110, bottom: 70, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          axisBottom={{
            tickRotation: -45,
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Value",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          colors={{ scheme: "nivo" }}
          enableGridX={false}
          enableGridY={false}
          enablePoints={false}
          enableArea={true}
          enablePointLabel={true}
          pointLabelYOffset={-12}
          useMesh={true}
          enableSlices="x"
          tooltip={(tooltip) => (
            <div
              style={{
                background: "#fff",
                padding: "5px",
                border: "1px solid #ccc",
              }}
            >
              <div>
                <strong>Date:</strong> {tooltip.point.data.xFormatted}
              </div>
              <div>
                <strong>Value:</strong> {tooltip.point.data.yFormatted}
              </div>
            </div>
          )}
        />
      ) : (
        <p>No numeric data available.</p>
      )}
    </div>
  );
};

export default LineChart;
