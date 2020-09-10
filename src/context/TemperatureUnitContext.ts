import React from 'react';

export const TemperatureUnitContext = React.createContext({
    isCelcius: true,
    toggleTempUnit: (): void => {} 
});