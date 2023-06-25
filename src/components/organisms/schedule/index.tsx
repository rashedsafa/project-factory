import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Text } from "../../atoms/text";
import { Image } from "../../atoms/image";
import ScheduleImage from "../../../images/components/schedule.jpg";
import { Button } from "../../atoms/button";

interface ScheduleProps {}

export const Schedule: (props: ScheduleProps) => JSX.Element = () => {
  const today = new Date();
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const handleStartDateChange = (date: any) => {
    setSelectedStartDate(date);
  };
  const handleEndDateChange = (date: any) => {
    setSelectedEndDate(date);
  };

  const calculateDateDifference = () => {
    if (selectedStartDate) {
      const today = new Date();
      const differenceInTime =
        new Date(selectedStartDate).getTime() - today.getTime();
      const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
      return differenceInDays;
    }
    return 0;
  };
  const getMinEndDate = () => {
    if (selectedStartDate) {
      const minEndDate = new Date(selectedStartDate);
      minEndDate.setDate(minEndDate.getDate() + 1);
      return minEndDate;
    }
    return null;
  };

  return (
    <div className="o-schedule">
      <div className="o-schedule__heading">
        <Text>Start of Course</Text>
        <Image src={ScheduleImage} />
        <Text>End of Course</Text>
      </div>
      <div className="o-schedule__date">
        <DatePicker
          selected={selectedStartDate}
          onChange={handleStartDateChange}
          dateFormat="yyyy / MM / dd"
          placeholderText="YYYY / MM / DD"
          minDate={today}
        />
        <DatePicker
          selected={selectedEndDate}
          onChange={handleEndDateChange}
          dateFormat="yyyy / MM / dd"
          placeholderText="YYYY / MM / DD"
          minDate={getMinEndDate()}
        />
      </div>
      <div className="o-schedule__remaining">
        <span className="o-schedule__remainingDay">
          {calculateDateDifference()}
        </span>
        <span className="o-schedule__remainingString">
          Days left to sign up
        </span>
        <Button size="medium" mode="primary">
          Register
        </Button>
      </div>
    </div>
  );
};
