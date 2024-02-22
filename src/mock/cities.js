export const cities = [
  "Brussels",
  "Copenhagen",
  "Helsinki",
  "Berlin",
  "Athens",
  "Dublin",
  "Rome",
  "Vilnius",
  "Luxembourg",
  "Monaco",
  "Amsterdam",
  "Oslo",
  "Warsaw",
  "Madrid",
  "Stockholm",
  "Bern",
  "Ankara",
  "Kyiv",
  "London",
];

export const citiesWithId = cities.map((city) => ({
  id: city.replace(/\s+/g, "").toLowerCase(),
  value: city,
}));
