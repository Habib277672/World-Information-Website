export const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputChange = (evt) => {
    evt.preventDefault();
    setSearch(evt.target.value);
  };

  const handleSelectChange = (evt) => {
    evt.preventDefault();
    setFilter(evt.target.value);
  };

  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountry);
  };
  return (
    <section className="section-searchFilter container">
      <input
        className="search"
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleInputChange}
      />

      <div
        className="search-assets assets-main"
        onClick={() => sortCountries("asc")}
      >
        <button className="search-assets">ASC</button>
      </div>

      <div
        className="search-assets assets-main"
        onClick={() => sortCountries("dsc")}
      >
        <button className="search-assets">DSC</button>
      </div>

      <div className="search-assets assets-main">
        <select
          className="select-section search-assets"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};
