import { Geolocation } from '../Geolocation';

describe('services/Geolocation', () => {
    let fn: jest.Mock;

    beforeEach(() => {
        fn = jest.fn();
        const { navigator } = global as any;
        navigator.geolocation = {
            watchPosition: fn
        };
    });

    afterEach(() => {
        if (fn) fn.mockRestore();
    });

    it('should support singleton', () => {
        const instance1 = Geolocation.getInstance();
        const instance2 = Geolocation.getInstance();
        expect(instance1).toEqual(instance2);
    });

    it('should call callback when got data', () => {
        let dataCount = 0;
        let errorCount = 0;
        const onData = (data: any) => {
            if (data.position) dataCount += 1;
            if (data.error) errorCount += 1;
        }

        fn.mockImplementation((fn: Function) => fn(1));

        const instance1 = Geolocation.getInstance();
        instance1.registerCallback(onData);
        instance1.init();

        expect(dataCount).toEqual(1);
    });

    it('should call callback when got error', () => {
        let dataCount = 0;
        let errorCount = 0;
        const onData = (data: any) => {
            if (data.position) dataCount += 1;
            if (data.error) errorCount += 1;
        }

        fn.mockImplementation(( _,fn: Function) => fn(1));

        const instance1 = Geolocation.getInstance();
        instance1.registerCallback(onData);
        instance1.init();

        expect(errorCount).toEqual(1);
    });
});