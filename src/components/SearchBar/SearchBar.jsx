import { useContext } from "react";
import { TripsContext } from "../../store/TripsContext";

import formatDate from "../../utils/formatDate";

const SearchBar = () => {
  const { trips } = useContext(TripsContext);

  return (
    <section>
      <input
        list="trip-options"
        name="trip-options"
        placeholder="Search your trip"
      />
      <datalist id="trip-options">
        {trips.map(({ id, city, startDate, endDate }) => (
          <option
            key={id}
            value={`${city}: ${formatDate(startDate)} - ${formatDate(endDate)}`}
          ></option>
        ))}
      </datalist>
    </section>
  );
};

export default SearchBar;
