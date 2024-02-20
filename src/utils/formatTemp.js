const formatTemp = (temp) => {
  const tempFormat = new Intl.NumberFormat("en-UK", {
    style: "unit",
    unit: "celsius",
  });

  const formattedTemp = tempFormat.format(temp);

  return formattedTemp;
};

export default formatTemp;
