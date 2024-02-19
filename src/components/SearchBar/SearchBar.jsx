import { useContext, useMemo } from "react";
import { TripsContext } from "../../store/TripsContext";
import Input from "../UI/Input";

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
      <Input
        id="trip-options"
        name="trip-options"
        type="datalist"
        list={list}
        placeholder="Search your trip"
        className={styles["search-bar"]}
      />
    </section>
  );
};

export default SearchBar;
