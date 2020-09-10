import { TypeOpenWeatherData } from 'apis';

export const sampleWeatherData: {
    [id: string]: TypeOpenWeatherData
} = {
    "360630": {
        "coord": {
            "lon": 31.25,
            "lat": 30.06
        },
        "weather": [
            {
                "id": 701,
                "main": "Mist",
                "description": "mist",
                "icon": "50d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 301.13,
            "feels_like": 303.8,
            "temp_min": 300.15,
            "temp_max": 302.04,
            "pressure": 1011,
            "humidity": 74
        },
        "visibility": 4000,
        "wind": {
            "speed": 3.6,
            "deg": 350
        },
        "clouds": {
            "all": 75
        },
        "dt": 1599639064,
        "sys": {
            "type": 1,
            "id": 2514,
            "country": "EG",
            "sunrise": 1599622593,
            "sunset": 1599667699
        },
        "timezone": 7200,
        "id": 360630,
        "name": "Cairo",
        "cod": 200
    },
    "745042": {
        "coord": {
            "lon": 28.98,
            "lat": 41.04
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 298.83,
            "feels_like": 297.54,
            "temp_min": 297.15,
            "temp_max": 300.15,
            "pressure": 1022,
            "humidity": 65
        },
        "visibility": 10000,
        "wind": {
            "speed": 6.2,
            "deg": 30
        },
        "clouds": {
            "all": 40
        },
        "dt": 1599639280,
        "sys": {
            "type": 1,
            "id": 6970,
            "country": "TR",
            "sunrise": 1599622739,
            "sunset": 1599668642
        },
        "timezone": 10800,
        "id": 745042,
        "name": "Istanbul",
        "cod": 200
    },
    "1174872": {
        "coord": {
            "lon": 67.08,
            "lat": 24.91
        },
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 304.46,
            "feels_like": 305.92,
            "temp_min": 304.46,
            "temp_max": 304.46,
            "pressure": 1005,
            "humidity": 64,
            "sea_level": 1005,
            "grnd_level": 1002
        },
        "visibility": 10000,
        "wind": {
            "speed": 5.95,
            "deg": 242
        },
        "clouds": {
            "all": 16
        },
        "dt": 1599638990,
        "sys": {
            "country": "PK",
            "sunrise": 1599614145,
            "sunset": 1599658952
        },
        "timezone": 18000,
        "id": 1174872,
        "name": "Karachi",
        "cod": 200
    },
    "1185241": {
        "coord": {
            "lon": 90.41,
            "lat": 23.71
        },
        "weather": [
            {
                "id": 721,
                "main": "Haze",
                "description": "haze",
                "icon": "50d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 303.15,
            "feels_like": 307.87,
            "temp_min": 303.15,
            "temp_max": 303.15,
            "pressure": 1005,
            "humidity": 70
        },
        "visibility": 4000,
        "wind": {
            "speed": 1.5,
            "deg": 210
        },
        "clouds": {
            "all": 75
        },
        "dt": 1599639076,
        "sys": {
            "type": 1,
            "id": 9145,
            "country": "BD",
            "sunrise": 1599608578,
            "sunset": 1599653323
        },
        "timezone": 21600,
        "id": 1185241,
        "name": "Dhaka",
        "cod": 200
    },
    "1273294": {
        "coord": {
            "lon": 77.22,
            "lat": 28.67
        },
        "weather": [
            {
                "id": 721,
                "main": "Haze",
                "description": "haze",
                "icon": "50d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 307.15,
            "feels_like": 310.77,
            "temp_min": 307.15,
            "temp_max": 307.15,
            "pressure": 1005,
            "humidity": 56
        },
        "visibility": 3500,
        "wind": {
            "speed": 3.1,
            "deg": 290
        },
        "clouds": {
            "all": 40
        },
        "dt": 1599639210,
        "sys": {
            "type": 1,
            "id": 9165,
            "country": "IN",
            "sunrise": 1599611599,
            "sunset": 1599656632
        },
        "timezone": 19800,
        "id": 1273294,
        "name": "Delhi",
        "cod": 200
    },
    "1275004": {
        "coord": {
            "lon": 88.37,
            "lat": 22.57
        },
        "weather": [
            {
                "id": 721,
                "main": "Haze",
                "description": "haze",
                "icon": "50d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 307.06,
            "feels_like": 313.6,
            "temp_min": 305.93,
            "temp_max": 308.15,
            "pressure": 1004,
            "humidity": 71
        },
        "visibility": 3500,
        "wind": {
            "speed": 2.6,
            "deg": 180
        },
        "clouds": {
            "all": 75
        },
        "dt": 1599638833,
        "sys": {
            "type": 1,
            "id": 9114,
            "country": "IN",
            "sunrise": 1599609100,
            "sunset": 1599653781
        },
        "timezone": 19800,
        "id": 1275004,
        "name": "Kolkata",
        "cod": 200
    },
    "1275339": {
        "coord": {
            "lon": 72.85,
            "lat": 19.01
        },
        "weather": [
            {
                "id": 721,
                "main": "Haze",
                "description": "haze",
                "icon": "50d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 304.15,
            "feels_like": 310.43,
            "temp_min": 304.15,
            "temp_max": 304.15,
            "pressure": 1005,
            "humidity": 89
        },
        "visibility": 3000,
        "wind": {
            "speed": 4.1,
            "deg": 280
        },
        "clouds": {
            "all": 40
        },
        "dt": 1599638968,
        "sys": {
            "type": 1,
            "id": 9052,
            "country": "IN",
            "sunrise": 1599612920,
            "sunset": 1599657409
        },
        "timezone": 19800,
        "id": 1275339,
        "name": "Mumbai",
        "cod": 200
    },
    "1796236": {
        "coord": {
            "lon": 121.46,
            "lat": 31.22
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 305.38,
            "feels_like": 306.57,
            "temp_min": 304.26,
            "temp_max": 306.15,
            "pressure": 1007,
            "humidity": 46
        },
        "visibility": 10000,
        "wind": {
            "speed": 3,
            "deg": 240
        },
        "clouds": {
            "all": 40
        },
        "dt": 1599639153,
        "sys": {
            "type": 1,
            "id": 9659,
            "country": "CN",
            "sunrise": 1599600897,
            "sunset": 1599646104
        },
        "timezone": 28800,
        "id": 1796236,
        "name": "Shanghai",
        "cod": 200
    },
    "1814906": {
        "coord": {
            "lon": 106.55,
            "lat": 29.56
        },
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 307.89,
            "feels_like": 309.81,
            "temp_min": 307.04,
            "temp_max": 308.71,
            "pressure": 1006,
            "humidity": 44
        },
        "visibility": 10000,
        "wind": {
            "speed": 3,
            "deg": 0
        },
        "clouds": {
            "all": 40
        },
        "dt": 1599638900,
        "sys": {
            "type": 1,
            "id": 9673,
            "country": "CN",
            "sunrise": 1599604530,
            "sunset": 1599649626
        },
        "timezone": 28800,
        "id": 1814906,
        "name": "Chongqing",
        "cod": 200
    },
    "1816670": {
        "coord": {
            "lon": 116.4,
            "lat": 39.91
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 304.07,
            "feels_like": 302.64,
            "temp_min": 303.71,
            "temp_max": 304.26,
            "pressure": 1007,
            "humidity": 27
        },
        "visibility": 10000,
        "wind": {
            "speed": 2,
            "deg": 0
        },
        "clouds": {
            "all": 2
        },
        "dt": 1599638800,
        "sys": {
            "type": 1,
            "id": 9609,
            "country": "CN",
            "sunrise": 1599601792,
            "sunset": 1599647638
        },
        "timezone": 28800,
        "id": 1816670,
        "name": "Beijing",
        "cod": 200
    },
    "1850144": {
        "coord": {
            "lon": 139.69,
            "lat": 35.69
        },
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 304.09,
            "feels_like": 306.83,
            "temp_min": 303.15,
            "temp_max": 305.37,
            "pressure": 1011,
            "humidity": 70
        },
        "visibility": 10000,
        "wind": {
            "speed": 5.1,
            "deg": 190
        },
        "clouds": {
            "all": 20
        },
        "dt": 1599639360,
        "sys": {
            "type": 1,
            "id": 8077,
            "country": "JP",
            "sunrise": 1599596364,
            "sunset": 1599641889
        },
        "timezone": 32400,
        "id": 1850144,
        "name": "Tokyo",
        "cod": 200
    },
    "1853909": {
        "coord": {
            "lon": 135.5,
            "lat": 34.69
        },
        "weather": [
            {
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 299.22,
            "feels_like": 302.62,
            "temp_min": 298.15,
            "temp_max": 301.48,
            "pressure": 1011,
            "humidity": 83
        },
        "visibility": 10000,
        "wind": {
            "speed": 2.6,
            "deg": 10
        },
        "rain": {
            "1h": 0.32
        },
        "clouds": {
            "all": 75
        },
        "dt": 1599639006,
        "sys": {
            "type": 1,
            "id": 8032,
            "country": "JP",
            "sunrise": 1599597407,
            "sunset": 1599642857
        },
        "timezone": 32400,
        "id": 1853909,
        "name": "Osaka",
        "cod": 200
    },
    "1880252": {
        "coord": {
            "lon": 103.85,
            "lat": 1.29
        },
        "weather": [
            {
                "id": 520,
                "main": "Rain",
                "description": "light intensity shower rain",
                "icon": "09d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 303.15,
            "feels_like": 307.31,
            "temp_min": 303.15,
            "temp_max": 303.15,
            "pressure": 1007,
            "humidity": 74
        },
        "visibility": 10000,
        "wind": {
            "speed": 3.1,
            "deg": 130
        },
        "rain": {
            "1h": 1.69
        },
        "clouds": {
            "all": 40
        },
        "dt": 1599639214,
        "sys": {
            "type": 1,
            "id": 9479,
            "country": "SG",
            "sunrise": 1599605897,
            "sunset": 1599649555
        },
        "timezone": 28800,
        "id": 1880252,
        "name": "Singapore",
        "cod": 200
    },
    "2988507": {
        "coord": {
            "lon": 2.35,
            "lat": 48.85
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 292.84,
            "feels_like": 292.86,
            "temp_min": 291.15,
            "temp_max": 293.71,
            "pressure": 1024,
            "humidity": 82
        },
        "visibility": 10000,
        "wind": {
            "speed": 3.1,
            "deg": 290
        },
        "clouds": {
            "all": 0
        },
        "dt": 1599639272,
        "sys": {
            "type": 1,
            "id": 6550,
            "country": "FR",
            "sunrise": 1599628755,
            "sunset": 1599675406
        },
        "timezone": 7200,
        "id": 2988507,
        "name": "Paris",
        "cod": 200
    },
    "3435910": {
        "coord": {
            "lon": -58.38,
            "lat": -34.61
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 287.3,
            "feels_like": 286.88,
            "temp_min": 286.48,
            "temp_max": 288.15,
            "pressure": 1016,
            "humidity": 87
        },
        "visibility": 10000,
        "wind": {
            "speed": 1.5,
            "deg": 40
        },
        "clouds": {
            "all": 100
        },
        "dt": 1599639279,
        "sys": {
            "type": 1,
            "id": 8224,
            "country": "AR",
            "sunrise": 1599645653,
            "sunset": 1599687651
        },
        "timezone": -10800,
        "id": 3435910,
        "name": "Buenos Aires",
        "cod": 200
    },
    "3448439": {
        "coord": {
            "lon": -46.64,
            "lat": -23.55
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 291.27,
            "feels_like": 290.36,
            "temp_min": 290.93,
            "temp_max": 292.04,
            "pressure": 1020,
            "humidity": 82
        },
        "visibility": 10000,
        "wind": {
            "speed": 3.6,
            "deg": 110
        },
        "clouds": {
            "all": 90
        },
        "dt": 1599638848,
        "sys": {
            "type": 1,
            "id": 8446,
            "country": "BR",
            "sunrise": 1599642551,
            "sunset": 1599685119
        },
        "timezone": -10800,
        "id": 3448439,
        "name": "São Paulo",
        "cod": 200
    },
    "3530597": {
        "coord": {
            "lon": -99.13,
            "lat": 19.43
        },
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 289.37,
            "feels_like": 288.23,
            "temp_min": 288.71,
            "temp_max": 290.15,
            "pressure": 1023,
            "humidity": 77
        },
        "visibility": 10000,
        "wind": {
            "speed": 2.6,
            "deg": 60
        },
        "clouds": {
            "all": 75
        },
        "dt": 1599639237,
        "sys": {
            "type": 1,
            "id": 7146,
            "country": "MX",
            "sunrise": 1599654189,
            "sunset": 1599698669
        },
        "timezone": -18000,
        "id": 3530597,
        "name": "Mexico City",
        "cod": 200
    }
}

export const sampleSearchResults = {
    "singapore": {
        "data": {
            "coord": {
                "lon": 103.85,
                "lat": 1.29
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 304.84,
                "feels_like": 308.43,
                "temp_min": 303.71,
                "temp_max": 306.15,
                "pressure": 1009,
                "humidity": 59
            },
            "visibility": 10000,
            "wind": {
                "speed": 2.1,
                "deg": 90
            },
            "clouds": {
                "all": 75
            },
            "dt": 1599629682,
            "sys": {
                "type": 1,
                "id": 9470,
                "country": "SG",
                "sunrise": 1599605897,
                "sunset": 1599649555
            },
            "timezone": 28800,
            "id": 1880252,
            "name": "Singapore",
            "cod": 200
        },
        "timeStamp": 1599630149247
    },
}

export const samplePosition = {
    coords: {
        accuracy: 442089,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        latitude: 10.9379584,
        longitude: 106.86300159999999,
        speed: null
    },
    timestamp: 1000
}