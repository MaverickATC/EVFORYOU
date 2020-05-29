import { createContext } from "react";

function noop() {}

export const CarsContext = createContext({
  cars: []
});
