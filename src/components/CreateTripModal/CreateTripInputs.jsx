import { useState } from "react";

import Input from "../UI/Input";
import DataList from "../UI/Input/DataList";
import formatDate from "../../utils/formatDate";
import { citiesWithId } from "../../mock/cities";

import styles from "./create-trip-modal.module.css";
import addDays from "../../utils/addDate";

const minDate = formatDate(new Date(), "en-CA");
const maxDate = formatDate(addDays(minDate, 15), "en-CA");

const CreateTripInputs = () => {
  const [maxStartDate, setMaxStartDate] = useState(maxDate);
  const [minEndDate, setMinEndDate] = useState(minDate);

  const handleSelectStartDate = (e) => {
    const newStartDate = e.target.value;
    setMinEndDate(newStartDate);
  };

  const handleSelectEndDate = (e) => {
    const newEndDate = e.target.value;
    setMaxStartDate(newEndDate);
  };

  return (
    <ul className={styles["create-trip-inputs"]}>
      <DataList
        id="city"
        name="city"
        label="City"
        options={citiesWithId}
        wrapper="li"
        placeholder="Please select a city"
        required
      />
      <Input
        id="end-date"
        name="startDate"
        label="Start date"
        type="date"
        wrapper="li"
        placeholder="Select date"
        min={minDate}
        max={maxStartDate}
        onChange={handleSelectStartDate}
        required
      />
      <Input
        id="end-date"
        name="endDate"
        label="End date"
        type="date"
        wrapper="li"
        placeholder="Select date"
        min={minEndDate}
        max={maxDate}
        onChange={handleSelectEndDate}
        required
      />
    </ul>
  );
};

export default CreateTripInputs;
