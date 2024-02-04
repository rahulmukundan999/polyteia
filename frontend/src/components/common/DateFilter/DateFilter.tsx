// src/components/common/DateFilter/DateFilter.tsx
import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { DateRange } from "@mui/x-date-pickers-pro";
import { Dayjs } from "dayjs";

interface DateFilterProps {
  onDateChange: (date: DateRange<Dayjs>) => void;
  selectedDate: DateRange<Dayjs>;
}

const DateFilter: React.FC<DateFilterProps> = ({
  onDateChange,
  selectedDate,
}) => {
  const handleDateChange = (date: DateRange<Dayjs>) => {
    onDateChange(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        label="Select Date"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </LocalizationProvider>
  );
};

export default DateFilter;
