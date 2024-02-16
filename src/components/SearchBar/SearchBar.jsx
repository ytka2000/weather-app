const SearchBar = () => {
  return (
    <section>
      <input
        list="trip-options"
        name="trip-options"
        placeholder="Search your trip"
      />
      <datalist id="trip-options">
        <option value="Berlin"></option>
        <option value="Tokyo"></option>
        <option value="Barcelona"></option>
      </datalist>
    </section>
  );
};

export default SearchBar;
