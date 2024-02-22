import { API_URL, API_OPTIONS, TODAY_API_OPTIONS } from "../constants/api";
import formatDate from "./formatDate";

const getApiUrl = (trip, today = false) => {
  if (today) {
    return `${API_URL}/${trip.city}${TODAY_API_OPTIONS}`;
  }

  const startDate = formatDate(trip.startDate, "en-CA");
  const endDate = formatDate(trip.endDate, "en-CA");

  return `${API_URL}/${trip.city}/${startDate}/${endDate}${API_OPTIONS}`;
};

export default getApiUrl;
