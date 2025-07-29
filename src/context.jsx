import React from 'react';
import { useState } from 'react';
import { createContext, useEffect } from "react";
const AppContext = React.createContext();
export const AppContextProvider = ({ children }) => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  return (
    <AppContext.Provider value={{ isDisplayed, setIsDisplayed }}>
      {children}
    </AppContext.Provider>
  );
};
