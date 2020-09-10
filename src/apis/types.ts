export interface TypeOpenWeatherItem {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface TypeOpenWeatherData {
    id: number;
    coord: {
        lon: number;
        lat: number;
    };
    weather: TypeOpenWeatherItem[];
    base: string;
    dt: number;
    timezone: number;
    cod: number;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level?: number;
        grnd_level?: number;
    };
    rain?: {
        [hour: string]: number;
    }
    visibility: number;
    wind: {
        speed: number;
        deg: number;
    },
    clouds: { all: number };
    sys: {
        type?: number;
        id?: number;
        country: string;
        sunrise?: number;
        sunset?: number;
    }
    name: string;
}

export interface TypeSearchResultItem {
    data: TypeOpenWeatherData | null;
    timeStamp: number;
}

export interface TypeSearchResults {
    [searchTerm: string]: TypeSearchResultItem
}

export interface TypeNote {
    id: string;
    content: string;
    createdTime: number;
    updatedTime: number;
}