import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

import BerlinImage from "../mock/berlin.jpeg";

const initialTrips = [
  {
    id: uuid(),
    city: "Berlin",
    startDate: new Date(),
    endDate: new Date(),
    image: BerlinImage,
  },
  {
    id: uuid(),
    city: "Berlin",
    startDate: new Date(),
    endDate: new Date(),
    image: BerlinImage,
  },
];

const TripsContext = createContext({
  trips: initialTrips,
  addTrip: (trip) => {},
});

const TripsProvider = ({ children }) => {
  const [trips, setTrips] = useState(initialTrips);

  const tripsState = {
    trips,
    addTrip: () => {
      setTrips([...initialTrips, ...initialTrips]);
    },
  };

  return (
    <TripsContext.Provider value={tripsState}>{children}</TripsContext.Provider>
  );
};

export { TripsContext, TripsProvider };