export interface ChartData {
  timestamp: string;
  value: number;
}

export interface ApiResponse {
  data: ChartData[];
}
