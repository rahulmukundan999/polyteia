// src/types.ts
export interface ChartData {
  timestamp: string;
  value: number;
  _id: string;
}

export interface ApiResponse {
  data: ChartData[];
}
