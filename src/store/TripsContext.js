import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

import addDays from "../utils/addDate";

const initialTrips = [
  {
    id: uuid(),
    city: "Rome",
    startDate: addDays(new Date(), 3),
    endDate: addDays(new Date(), 6),
  },
  {
    id: uuid(),
    city: "Berlin",
    startDate: addDays(new Date(), 4),
    endDate: addDays(new Date(), 8),
  },
  {
    id: uuid(),
    city: "Madrid",
    startDate: addDays(new Date(), 5),
    endDate: addDays(new Date(), 12),
  },
  {
    id: uuid(),
    city: "Kyiv",
    startDate: addDays(new Date(), 6),
    endDate: addDays(new Date(), 10),
  },
];

const TripsContext = createContext({
  trips: initialTrips,
  selectedTripId: initialTrips[0].id,
  addTrip: (trip) => {},
  setSelectedTrip: (trip) => {},
});

const TripsProvider = ({ children }) => {
  const [trips, setTrips] = useState(initialTrips);
  const [selectedTrip, setSelectedTrip] = useState(trips[0]);

  const tripsState = {
    trips,
    selectedTrip,
    addTrip: (trip) => {
      setTrips((prevTrips) => [...prevTrips, { ...trip, id: uuid() }]);
    },
    setSelectedTrip,
  };

  return (
    <TripsContext.Provider value={tripsState}>{children}</TripsContext.Provider>
  );
};

export { TripsContext, TripsProvider };
