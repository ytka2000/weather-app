const formatDate = (date) => {
  const dateToFormat = new Date(date);

  const dateFormat = new Intl.DateTimeFormat("uk-UA");
  const formattedDate = dateFormat.format(dateToFormat);

  return formattedDate;
};

export default formatDate;
