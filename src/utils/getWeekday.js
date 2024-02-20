const getWeekday = (date) => {
  const fullDate = new Date(date);
  const weekday = fullDate.toLocaleString("en", { weekday: "long" });

  return weekday;
};

export default getWeekday;
