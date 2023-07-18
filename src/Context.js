import React, { useState, createContext } from "react";
import { Navbar } from "./components";
import { Header } from "./containers";


export const AppContext = createContext(false);

function Context() {

  const [ modalPopup, setModalPopup ] = useState(false);
  const contextValue = { modalPopup, setModalPopup: (value) => setModalPopup(value) };


  return (
    <AppContext.Provider value={contextValue}>
      <Navbar/>
      <Header/>
    </AppContext.Provider>
  );
}

export default Context;
