import { API_URL, API_OPTIONS } from "../constants/api";
import formatDate from "./formatDate";

const getApiUrl = (trip) => {
  const startDate = formatDate(trip.startDate, "en-CA");
  const endDate = formatDate(trip.endDate, "en-CA");

  return `${API_URL}/${trip.city}/${startDate}/${endDate}${API_OPTIONS}`;
};

export default getApiUrl;
