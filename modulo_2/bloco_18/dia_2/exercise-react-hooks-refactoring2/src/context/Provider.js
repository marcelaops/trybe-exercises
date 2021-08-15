// src/context/Provider.js
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,    
  });

  // tava fazendo no mesmo useState ai de cima, tava dando erro e vi o gabarito então separei:
  const [signal, setChangeSignal] = useState({
    color: 'red',
  })
  
  const moveCar = (car, side) => {
    setCars({
      cars: {
        ...cars,
        [car]: side,
      },
    });
  };

  const changeSignal = (signalColor) => {
    setChangeSignal({
      color: signalColor,
    });
  };
  
  const contextValue = { cars, moveCar, signal, changeSignal }
  
  return (
    <CarsContext.Provider value={contextValue}>
      {children}
    </CarsContext.Provider>
  );
}

export default Provider;
// Provider.propTypes = {
//   children: PropTypes.node.isRequired,
// };
