import { useContext, useMemo } from "react";
import { TripsContext } from "../../store/TripsContext";
import DataList from "../UI/Input/DataList";

import formatDate from "../../utils/formatDate";
import searchIcon from "../../assets/search.png";
import styles from "./searchbar.module.css";

const SearchBar = () => {
  const { trips } = useContext(TripsContext);

  const list = useMemo(
    () =>
      trips.map(({ id, city, startDate, endDate }) => ({
        id,
        value: `${city}: ${formatDate(startDate)} - ${formatDate(endDate)}`,
      })),
    [trips]
  );

  return (
    <section>
      <img src={searchIcon} alt="Search icon" />
      <DataList
        id="trip-options"
        name="trip-options"
        options={list}
        placeholder="Search your trip"
        className={styles["search-bar"]}
      />
    </section>
  );
};

export default SearchBar;
