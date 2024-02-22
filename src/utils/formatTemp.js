const formatTemp = (temp) => {
  const tempFormat = new Intl.NumberFormat("en-UK", {
    style: "unit",
    unit: "celsius",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

  const formattedTemp = tempFormat.format(temp);

  return formattedTemp;
};

export default formatTemp;
