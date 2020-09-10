import { TemperatureUnitContext } from '../TemperatureUnitContext';

describe('context/TemperatureUnitContext', () => {
    it('should has correct type', () => {
        const context: {
            _currentValue: { isCelcius: Boolean; toggleTempUnit: Function }
        } = TemperatureUnitContext as any;

        const {
            _currentValue: { isCelcius, toggleTempUnit }
        } = context;

        expect(typeof isCelcius).toEqual('boolean');
        expect(typeof toggleTempUnit).toEqual('function');
    });
});