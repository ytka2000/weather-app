import { useContext, useMemo } from "react";
import { TripsContext } from "../../store/TripsContext";
import DataList from "../UI/Input/DataList";
import getTripName from "../../utils/getTripName";

import searchIcon from "../../assets/search.png";
import styles from "./searchbar.module.css";

const SearchBar = () => {
  const { trips, setSelectedTrip } = useContext(TripsContext);

  const list = useMemo(
    () =>
      trips.map(({ id, city, startDate, endDate }) => ({
        id,
        value: getTripName({ city, startDate, endDate }),
      })),
    [trips]
  );

  const handleSelectOption = (e) => {
    const selectedTripName = e.target.value;

    if (selectedTripName) {
      const selectedTrip = trips.find(
        (trip) => getTripName(trip) === e.target.value
      );
      if (selectedTrip) {
        setSelectedTrip(selectedTrip);
      }
    }
  };

  return (
    <section>
      <DataList
        id="trip-options"
        name="trip-options"
        options={list}
        placeholder="Search your trip"
        className={styles["search-bar"]}
        icon={<img src={searchIcon} alt="Search icon" />}
        onOptionSelect={handleSelectOption}
      />
    </section>
  );
};

export default SearchBar;
