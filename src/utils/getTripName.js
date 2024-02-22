import formatDate from "./formatDate";

const getTripName = ({ city, startDate, endDate }) => {
  return `${city}: ${formatDate(startDate)} - ${formatDate(endDate)}`;
};

export default getTripName;
