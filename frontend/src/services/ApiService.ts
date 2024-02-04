// src/services/ApiService.ts
import axios from "axios";
import { ChartData } from "../types";

const BASE_URL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: BASE_URL,
});

export const ApiService = {
  getNumericData: async (): Promise<ChartData[]> => {
    try {
      const response = await api.get("statistics/numeric-data");
      return response.data;
    } catch (error) {
      console.error("Error fetching numeric data:", error);
      throw error;
    }
  },

  getRandomData: async (): Promise<ChartData[]> => {
    try {
      const response = await api.get("statistics/random-data");
      return response.data;
    } catch (error) {
      console.error("Error fetching random data:", error);
      throw error;
    }
  },
};
