import { useEffect, useState, useTransition } from "react";
import { getCountriesData } from "../Api/postApi";
import { Loader } from "../Components/UI/Loader";
import { CountryCard } from "../Components/UI/CountryCard";
import { SearchFilter } from "../Components/UI/SearchFilter";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    getCountriesData().then((res) => {
      startTransition(() => {
        setCountries(res.data);
      });
    });
  }, []);

  // Show loader while data is loading
  if (!countries.length || isPending) {
    return <Loader />;
  }

  // Correct Search + Region Filter Logic
  const filteredCountries = countries.filter((country) => {
    const matchesSearch =
      !search ||
      country.name.common.toLowerCase().includes(search.toLowerCase());

    const matchesRegion =
      filter === "all" ||
      country.region?.toLowerCase() === filter.toLowerCase();

    return matchesSearch && matchesRegion;
  });

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      <ul className="grid grid-four-cols">
        {filteredCountries.map((curCountry) => (
          <CountryCard key={curCountry.cca3} curCountry={curCountry} />
        ))}
      </ul>
    </section>
  );
};
