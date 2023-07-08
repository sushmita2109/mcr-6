import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, resturantReducer } from "../Reducer/resturantReducer";
import { cuisineData, restaurantsData } from "../Data/data";

export const ResturantContext = createContext();

export const ResturantProvider = ({ children }) => {
  const [resturantStates, resturantDispatch] = useReducer(
    resturantReducer,
    initialState
  );
  const getData = () => {
    resturantDispatch({ type: "GET_DATA", payload: restaurantsData });
    resturantDispatch({ type: "GET_CUSINE", payload: cuisineData });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <ResturantContext.Provider value={{ resturantStates, resturantDispatch }}>
      {children}
    </ResturantContext.Provider>
  );
};

export const useResturant = () => useContext(ResturantContext);
