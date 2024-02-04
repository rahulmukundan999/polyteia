// src/services/ApiService.ts
import axios from "axios";
import { ChartData } from "../interface/chart";
import { DateRange } from "@mui/x-date-pickers-pro";
import { Dayjs } from "dayjs";

const BASE_URL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: BASE_URL,
});

export const ApiService = {
  getNumericData: async (date: DateRange<Dayjs>): Promise<ChartData[]> => {
    try {
      const response = await api.get("statistics/numeric-data", {
        params: { dateFrom: date[0]?.toDate(), dateTo: date[1]?.toDate() },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching numeric data:", error);
      throw error;
    }
  },

  getRandomData: async (date: Date | null): Promise<ChartData[]> => {
    try {
      const response = await api.get("statistics/random-data", {
        params: { date: date?.toISOString() },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching random data:", error);
      throw error;
    }
  },
};
