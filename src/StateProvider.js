import React, { createContext, useReducer, useContext } from "react";

// prepare data layer
export const StateContext = createContext();

//Build provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);
