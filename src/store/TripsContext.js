import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

import BerlinImage from "../mock/berlin.jpeg";
import addDays from "../utils/addDate";

const initialTrips = [
  {
    id: uuid(),
    city: "Berlin",
    startDate: addDays(new Date(), 3),
    endDate: addDays(new Date(), 6),
    image: BerlinImage,
  },
  {
    id: uuid(),
    city: "Berlin",
    startDate: addDays(new Date(), 3),
    endDate: addDays(new Date(), 6),
    image: BerlinImage,
  },
  {
    id: uuid(),
    city: "Berlin",
    startDate: addDays(new Date(), 3),
    endDate: addDays(new Date(), 6),
    image: BerlinImage,
  },
  {
    id: uuid(),
    city: "Berlin",
    startDate: addDays(new Date(), 3),
    endDate: addDays(new Date(), 6),
    image: BerlinImage,
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
      setTrips((prevTrips) => [
        ...prevTrips,
        { ...trip, id: uuid(), image: BerlinImage },
      ]);
    },
    setSelectedTrip: (trip) => {
      setSelectedTrip(trip);
    },
  };

  return (
    <TripsContext.Provider value={tripsState}>{children}</TripsContext.Provider>
  );
};

export { TripsContext, TripsProvider };
