import { MESSAGES } from 'configs';

export type GeolocationCallbackData = {
    position: Position | null,
    error?: PositionError | Error,
}

export type GeolocationCallbackFn = (
    data: GeolocationCallbackData
) => any;


export class Geolocation {
    private static instance: Geolocation;
    static getInstance(): Geolocation {
        if (!Geolocation.instance) {
            Geolocation.instance = new Geolocation();
        }
        return Geolocation.instance;
    }

    private callbacks: GeolocationCallbackFn[] = [];

    init = () => {
        if ('geolocation' in navigator) {
            navigator.geolocation.watchPosition(
                this.onData,
                this.onError
            )
        } else {
            this.onError(new Error(
                MESSAGES.geolocationNotSupported
            ));
        }
    }

    registerCallback = (fn: GeolocationCallbackFn) => {
        this.callbacks.push(fn);
    }

    private onData = (position: Position) => {
        this.callbacks.forEach(callback => {
            callback({ position });
        });
    }

    private onError = (error: PositionError | Error) => {
        this.callbacks.forEach(callback => {
            callback({
                position: null,
                error,
            });
        });
    }
}