import { useMemo } from "react";
import formatTemp from "../../../utils/formatTemp";

const Temp = ({ temp: initialTemp, short = true, className }) => {
  const formattedTemp = useMemo(() => formatTemp(initialTemp), [initialTemp]);

  const temp = formattedTemp.slice(0, -2);
  const units = formattedTemp.slice(-2);

  return (
    <span className={className}>
      {temp}
      <sup>{short ? units[0] : units}</sup>
    </span>
  );
};

export default Temp;
