const formatDate = (date, format = "uk-UA") => {
  const dateToFormat = new Date(date);

  const dateFormat = new Intl.DateTimeFormat(format);
  const formattedDate = dateFormat.format(dateToFormat);

  return formattedDate;
};

export default formatDate;
