import { useMemo } from "react";
import formatTemp from "../../../utils/formatTemp";

const Temp = ({ temp, short = true, className }) => {
  const units = useMemo(() => formatTemp(temp).slice(-2), [temp]);

  return (
    <span className={className}>
      {temp}
      <sup>{short ? units[0] : units}</sup>
    </span>
  );
};

export default Temp;
