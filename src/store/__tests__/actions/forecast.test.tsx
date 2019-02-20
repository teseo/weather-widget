import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import expect from "expect";
import { fetchForecastList } from "../../actions/forecast";

import {
  FETCH_FORECAST_LIST_FULFILLED,
  FETCH_FORECAST_LIST_START
} from "../../actions/types";

const rawResponse = require("./../data/rawResponse.json");

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Forecast actions", () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it("creates FETCH_FORECAST_LIST_FULFILLED after successfuly fetching data", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: rawResponse
      });
    });
    const mockPayload = {
      rawList: [
        {
          dt: 1550577600,
          main: {
            temp: 7.23,
            temp_min: 6.86,
            temp_max: 7.23,
            pressure: 999.26,
            sea_level: 1024.84,
            grnd_level: 999.26,
            humidity: 84,
            temp_kf: 0.37
          },
          weather: [
            {
              id: 500,
              main: "Rain",
              description: "light rain",
              icon: "10d"
            }
          ],
          clouds: {
            all: 64
          },
          wind: {
            speed: 5.47,
            deg: 238.5
          },
          rain: {
            "3h": 0.0975
          },
          sys: {
            pod: "d"
          },
          dt_txt: "2019-02-19 12:00:00"
        },
        {
          dt: 1550588400,
          main: {
            temp: 6.08,
            temp_min: 5.83,
            temp_max: 6.08,
            pressure: 999.14,
            sea_level: 1024.69,
            grnd_level: 999.14,
            humidity: 79,
            temp_kf: 0.25
          },
          weather: [
            {
              id: 500,
              main: "Rain",
              description: "light rain",
              icon: "10d"
            }
          ],
          clouds: {
            all: 92
          },
          wind: {
            speed: 5.22,
            deg: 225.007
          },
          rain: {
            "3h": 0.2975
          },
          sys: {
            pod: "d"
          },
          dt_txt: "2019-02-19 15:00:00"
        },
        {
          dt: 1550599200,
          main: {
            temp: 5.8,
            temp_min: 5.68,
            temp_max: 5.8,
            pressure: 998.08,
            sea_level: 1023.7,
            grnd_level: 998.08,
            humidity: 85,
            temp_kf: 0.12
          },
          weather: [
            {
              id: 500,
              main: "Rain",
              description: "light rain",
              icon: "10n"
            }
          ],
          clouds: {
            all: 88
          },
          wind: {
            speed: 4.96,
            deg: 196.003
          },
          rain: {
            "3h": 0.2675
          },
          sys: {
            pod: "n"
          },
          dt_txt: "2019-02-19 18:00:00"
        },
        {
          dt: 1550610000,
          main: {
            temp: 6.32,
            temp_min: 6.32,
            temp_max: 6.32,
            pressure: 996.41,
            sea_level: 1022.1,
            grnd_level: 996.41,
            humidity: 93,
            temp_kf: 0
          },
          weather: [
            {
              id: 500,
              main: "Rain",
              description: "light rain",
              icon: "10n"
            }
          ],
          clouds: {
            all: 92
          },
          wind: {
            speed: 6.77,
            deg: 195.501
          },
          rain: {
            "3h": 1.045
          },
          sys: {
            pod: "n"
          },
          dt_txt: "2019-02-19 21:00:00"
        },
        {
          dt: 1550620800,
          main: {
            temp: 7,
            temp_min: 7,
            temp_max: 7,
            pressure: 994.74,
            sea_level: 1020.37,
            grnd_level: 994.74,
            humidity: 95,
            temp_kf: 0
          },
          weather: [
            {
              id: 500,
              main: "Rain",
              description: "light rain",
              icon: "10n"
            }
          ],
          clouds: {
            all: 92
          },
          wind: {
            speed: 8.32,
            deg: 202.001
          },
          rain: {
            "3h": 1.37
          },
          sys: {
            pod: "n"
          },
          dt_txt: "2019-02-20 00:00:00"
        },
        {
          dt: 1550631600,
          main: {
            temp: 8.3,
            temp_min: 8.3,
            temp_max: 8.3,
            pressure: 993.93,
            sea_level: 1019.22,
            grnd_level: 993.93,
            humidity: 94,
            temp_kf: 0
          },
          weather: [
            {
              id: 500,
              main: "Rain",
              description: "light rain",
              icon: "10n"
            }
          ],
          clouds: {
            all: 68
          },
          wind: {
            speed: 7.66,
            deg: 213.5
          },
          rain: {
            "3h": 0.635
          },
          sys: {
            pod: "n"
          },
          dt_txt: "2019-02-20 03:00:00"
        },
        {
          dt: 1550642400,
          main: {
            temp: 8.68,
            temp_min: 8.68,
            temp_max: 8.68,
            pressure: 993.88,
            sea_level: 1019.2,
            grnd_level: 993.88,
            humidity: 94,
            temp_kf: 0
          },
          weather: [
            {
              id: 500,
              main: "Rain",
              description: "light rain",
              icon: "10n"
            }
          ],
          clouds: {
            all: 80
          },
          wind: {
            speed: 7.96,
            deg: 215.004
          },
          rain: {
            "3h": 0.235
          },
          sys: {
            pod: "n"
          },
          dt_txt: "2019-02-20 06:00:00"
        },
        {
          dt: 1550653200,
          main: {
            temp: 9.13,
            temp_min: 9.13,
            temp_max: 9.13,
            pressure: 994.7,
            sea_level: 1020.07,
            grnd_level: 994.7,
            humidity: 94,
            temp_kf: 0
          },
          weather: [
            {
              id: 500,
              main: "Rain",
              description: "light rain",
              icon: "10d"
            }
          ],
          clouds: {
            all: 56
          },
          wind: {
            speed: 8.42,
            deg: 213.001
          },
          rain: {
            "3h": 0.29
          },
          sys: {
            pod: "d"
          },
          dt_txt: "2019-02-20 09:00:00"
        },
        {
          dt: 1550664000,
          main: {
            temp: 10.26,
            temp_min: 10.26,
            temp_max: 10.26,
            pressure: 996.1,
            sea_level: 1021.32,
            grnd_level: 996.1,
            humidity: 92,
            temp_kf: 0
          },
          weather: [
            {
              id: 500,
              main: "Rain",
              description: "light rain",
              icon: "10d"
            }
          ],
          clouds: {
            all: 68
          },
          wind: {
            speed: 9.26,
            deg: 218.012
          },
          rain: {
            "3h": 0.21
          },
          sys: {
            pod: "d"
          },
          dt_txt: "2019-02-20 12:00:00"
        },
        {
          dt: 1550674800,
          main: {
            temp: 10.46,
            temp_min: 10.46,
            temp_max: 10.46,
            pressure: 996.9,
            sea_level: 1022.14,
            grnd_level: 996.9,
            humidity: 89,
            temp_kf: 0
          },
          weather: [
            {
              id: 500,
              main: "Rain",
              description: "light rain",
              icon: "10d"
            }
          ],
          clouds: {
            all: 64
          },
          wind: {
            speed: 8.82,
            deg: 223.503
          },
          rain: {
            "3h": 0.43
          },
          sys: {
            pod: "d"
          },
          dt_txt: "2019-02-20 15:00:00"
        },
        {
          dt: 1550685600,
          main: {
            temp: 9.47,
            temp_min: 9.47,
            temp_max: 9.47,
            pressure: 998.83,
            sea_level: 1024.11,
            grnd_level: 998.83,
            humidity: 88,
            temp_kf: 0
          },
          weather: [
            {
              id: 500,
              main: "Rain",
              description: "light rain",
              icon: "10n"
            }
          ],
          clouds: {
            all: 64
          },
          wind: {
            speed: 7.17,
            deg: 224.505
          },
          rain: {
            "3h": 0.335
          },
          sys: {
            pod: "n"
          },
          dt_txt: "2019-02-20 18:00:00"
        },
        {
          dt: 1550696400,
          main: {
            temp: 8.53,
            temp_min: 8.53,
            temp_max: 8.53,
            pressure: 1000.33,
            sea_level: 1025.75,
            grnd_level: 1000.33,
            humidity: 92,
            temp_kf: 0
          },
          weather: [
            {
              id: 500,
              main: "Rain",
              description: "light rain",
              icon: "10n"
            }
          ],
          clouds: {
            all: 24
          },
          wind: {
            speed: 6.35,
            deg: 217.503
          },
          rain: {
            "3h": 0.23
          },
          sys: {
            pod: "n"
          },
          dt_txt: "2019-02-20 21:00:00"
        },
        {
          dt: 1550707200,
          main: {
            temp: 8.44,
            temp_min: 8.44,
            temp_max: 8.44,
            pressure: 1001.39,
            sea_level: 1026.86,
            grnd_level: 1001.39,
            humidity: 92,
            temp_kf: 0
          },
          weather: [
            {
              id: 500,
              main: "Rain",
              description: "light rain",
              icon: "10n"
            }
          ],
          clouds: {
            all: 32
          },
          wind: {
            speed: 6.56,
            deg: 219.001
          },
          rain: {
            "3h": 0.15
          },
          sys: {
            pod: "n"
          },
          dt_txt: "2019-02-21 00:00:00"
        },
        {
          dt: 1550718000,
          main: {
            temp: 8.73,
            temp_min: 8.73,
            temp_max: 8.73,
            pressure: 1002.42,
            sea_level: 1027.92,
            grnd_level: 1002.42,
            humidity: 92,
            temp_kf: 0
          },
          weather: [
            {
              id: 500,
              main: "Rain",
              description: "light rain",
              icon: "10n"
            }
          ],
          clouds: {
            all: 44
          },
          wind: {
            speed: 6.5,
            deg: 219.003
          },
          rain: {
            "3h": 0.13
          },
          sys: {
            pod: "n"
          },
          dt_txt: "2019-02-21 03:00:00"
        },
        {
          dt: 1550728800,
          main: {
            temp: 8.78,
            temp_min: 8.78,
            temp_max: 8.78,
            pressure: 1003.29,
            sea_level: 1028.68,
            grnd_level: 1003.29,
            humidity: 92,
            temp_kf: 0
          },
          weather: [
            {
              id: 500,
              main: "Rain",
              description: "light rain",
              icon: "10n"
            }
          ],
          clouds: {
            all: 32
          },
          wind: {
            speed: 6.46,
            deg: 215.003
          },
          rain: {
            "3h": 0.12
          },
          sys: {
            pod: "n"
          },
          dt_txt: "2019-02-21 06:00:00"
        },
        {
          dt: 1550739600,
          main: {
            temp: 9.88,
            temp_min: 9.88,
            temp_max: 9.88,
            pressure: 1004.72,
            sea_level: 1030.33,
            grnd_level: 1004.72,
            humidity: 90,
            temp_kf: 0
          },
          weather: [
            {
              id: 500,
              main: "Rain",
              description: "light rain",
              icon: "10d"
            }
          ],
          clouds: {
            all: 12
          },
          wind: {
            speed: 6.91,
            deg: 215.001
          },
          rain: {
            "3h": 0.09
          },
          sys: {
            pod: "d"
          },
          dt_txt: "2019-02-21 09:00:00"
        },
        {
          dt: 1550750400,
          main: {
            temp: 11.83,
            temp_min: 11.83,
            temp_max: 11.83,
            pressure: 1006.71,
            sea_level: 1032.13,
            grnd_level: 1006.71,
            humidity: 87,
            temp_kf: 0
          },
          weather: [
            {
              id: 500,
              main: "Rain",
              description: "light rain",
              icon: "10d"
            }
          ],
          clouds: {
            all: 8
          },
          wind: {
            speed: 7.86,
            deg: 219.501
          },
          rain: {
            "3h": 0.06
          },
          sys: {
            pod: "d"
          },
          dt_txt: "2019-02-21 12:00:00"
        },
        {
          dt: 1550761200,
          main: {
            temp: 12.1,
            temp_min: 12.1,
            temp_max: 12.1,
            pressure: 1008.09,
            sea_level: 1033.65,
            grnd_level: 1008.09,
            humidity: 77,
            temp_kf: 0
          },
          weather: [
            {
              id: 500,
              main: "Rain",
              description: "light rain",
              icon: "10d"
            }
          ],
          clouds: {
            all: 20
          },
          wind: {
            speed: 8.12,
            deg: 220.004
          },
          rain: {
            "3h": 0.010000000000001
          },
          sys: {
            pod: "d"
          },
          dt_txt: "2019-02-21 15:00:00"
        },
        {
          dt: 1550772000,
          main: {
            temp: 10.15,
            temp_min: 10.15,
            temp_max: 10.15,
            pressure: 1009.71,
            sea_level: 1035.38,
            grnd_level: 1009.71,
            humidity: 79,
            temp_kf: 0
          },
          weather: [
            {
              id: 801,
              main: "Clouds",
              description: "few clouds",
              icon: "02n"
            }
          ],
          clouds: {
            all: 24
          },
          wind: {
            speed: 7.27,
            deg: 211.501
          },
          rain: {},
          sys: {
            pod: "n"
          },
          dt_txt: "2019-02-21 18:00:00"
        },
        {
          dt: 1550782800,
          main: {
            temp: 8.81,
            temp_min: 8.81,
            temp_max: 8.81,
            pressure: 1011.37,
            sea_level: 1037.27,
            grnd_level: 1011.37,
            humidity: 81,
            temp_kf: 0
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "02n"
            }
          ],
          clouds: {
            all: 8
          },
          wind: {
            speed: 7.16,
            deg: 207.001
          },
          rain: {},
          sys: {
            pod: "n"
          },
          dt_txt: "2019-02-21 21:00:00"
        },
        {
          dt: 1550793600,
          main: {
            temp: 8.49,
            temp_min: 8.49,
            temp_max: 8.49,
            pressure: 1012.53,
            sea_level: 1038.47,
            grnd_level: 1012.53,
            humidity: 83,
            temp_kf: 0
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "02n"
            }
          ],
          clouds: {
            all: 8
          },
          wind: {
            speed: 7.36,
            deg: 201.503
          },
          rain: {},
          sys: {
            pod: "n"
          },
          dt_txt: "2019-02-22 00:00:00"
        },
        {
          dt: 1550804400,
          main: {
            temp: 8.44,
            temp_min: 8.44,
            temp_max: 8.44,
            pressure: 1012.5,
            sea_level: 1038.57,
            grnd_level: 1012.5,
            humidity: 79,
            temp_kf: 0
          },
          weather: [
            {
              id: 801,
              main: "Clouds",
              description: "few clouds",
              icon: "02n"
            }
          ],
          clouds: {
            all: 20
          },
          wind: {
            speed: 7.26,
            deg: 199.502
          },
          rain: {},
          sys: {
            pod: "n"
          },
          dt_txt: "2019-02-22 03:00:00"
        },
        {
          dt: 1550815200,
          main: {
            temp: 8.47,
            temp_min: 8.47,
            temp_max: 8.47,
            pressure: 1012.87,
            sea_level: 1038.9,
            grnd_level: 1012.87,
            humidity: 82,
            temp_kf: 0
          },
          weather: [
            {
              id: 801,
              main: "Clouds",
              description: "few clouds",
              icon: "02n"
            }
          ],
          clouds: {
            all: 12
          },
          wind: {
            speed: 7.82,
            deg: 203.503
          },
          rain: {},
          sys: {
            pod: "n"
          },
          dt_txt: "2019-02-22 06:00:00"
        },
        {
          dt: 1550826000,
          main: {
            temp: 9.77,
            temp_min: 9.77,
            temp_max: 9.77,
            pressure: 1014.51,
            sea_level: 1040.39,
            grnd_level: 1014.51,
            humidity: 74,
            temp_kf: 0
          },
          weather: [
            {
              id: 804,
              main: "Clouds",
              description: "overcast clouds",
              icon: "04d"
            }
          ],
          clouds: {
            all: 100
          },
          wind: {
            speed: 8.05,
            deg: 209
          },
          rain: {},
          sys: {
            pod: "d"
          },
          dt_txt: "2019-02-22 09:00:00"
        },
        {
          dt: 1550836800,
          main: {
            temp: 12.17,
            temp_min: 12.17,
            temp_max: 12.17,
            pressure: 1015.66,
            sea_level: 1041.41,
            grnd_level: 1015.66,
            humidity: 68,
            temp_kf: 0
          },
          weather: [
            {
              id: 802,
              main: "Clouds",
              description: "scattered clouds",
              icon: "03d"
            }
          ],
          clouds: {
            all: 32
          },
          wind: {
            speed: 8.41,
            deg: 208.502
          },
          rain: {},
          sys: {
            pod: "d"
          },
          dt_txt: "2019-02-22 12:00:00"
        },
        {
          dt: 1550847600,
          main: {
            temp: 12.21,
            temp_min: 12.21,
            temp_max: 12.21,
            pressure: 1015.52,
            sea_level: 1041.19,
            grnd_level: 1015.52,
            humidity: 65,
            temp_kf: 0
          },
          weather: [
            {
              id: 803,
              main: "Clouds",
              description: "broken clouds",
              icon: "04d"
            }
          ],
          clouds: {
            all: 80
          },
          wind: {
            speed: 7.46,
            deg: 200.503
          },
          rain: {},
          sys: {
            pod: "d"
          },
          dt_txt: "2019-02-22 15:00:00"
        },
        {
          dt: 1550858400,
          main: {
            temp: 10.99,
            temp_min: 10.99,
            temp_max: 10.99,
            pressure: 1015.58,
            sea_level: 1041.23,
            grnd_level: 1015.58,
            humidity: 65,
            temp_kf: 0
          },
          weather: [
            {
              id: 803,
              main: "Clouds",
              description: "broken clouds",
              icon: "04n"
            }
          ],
          clouds: {
            all: 68
          },
          wind: {
            speed: 6.51,
            deg: 190.001
          },
          rain: {},
          sys: {
            pod: "n"
          },
          dt_txt: "2019-02-22 18:00:00"
        },
        {
          dt: 1550869200,
          main: {
            temp: 10.73,
            temp_min: 10.73,
            temp_max: 10.73,
            pressure: 1015.47,
            sea_level: 1041.33,
            grnd_level: 1015.47,
            humidity: 67,
            temp_kf: 0
          },
          weather: [
            {
              id: 803,
              main: "Clouds",
              description: "broken clouds",
              icon: "04n"
            }
          ],
          clouds: {
            all: 80
          },
          wind: {
            speed: 6.73,
            deg: 189.5
          },
          rain: {},
          sys: {
            pod: "n"
          },
          dt_txt: "2019-02-22 21:00:00"
        },
        {
          dt: 1550880000,
          main: {
            temp: 10.47,
            temp_min: 10.47,
            temp_max: 10.47,
            pressure: 1015.27,
            sea_level: 1041.03,
            grnd_level: 1015.27,
            humidity: 66,
            temp_kf: 0
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "02n"
            }
          ],
          clouds: {
            all: 8
          },
          wind: {
            speed: 6.66,
            deg: 193.502
          },
          rain: {},
          sys: {
            pod: "n"
          },
          dt_txt: "2019-02-23 00:00:00"
        },
        {
          dt: 1550890800,
          main: {
            temp: 9.43,
            temp_min: 9.43,
            temp_max: 9.43,
            pressure: 1015.05,
            sea_level: 1040.79,
            grnd_level: 1015.05,
            humidity: 67,
            temp_kf: 0
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "02n"
            }
          ],
          clouds: {
            all: 8
          },
          wind: {
            speed: 5.28,
            deg: 197
          },
          rain: {},
          sys: {
            pod: "n"
          },
          dt_txt: "2019-02-23 03:00:00"
        },
        {
          dt: 1550901600,
          main: {
            temp: 8.57,
            temp_min: 8.57,
            temp_max: 8.57,
            pressure: 1014.43,
            sea_level: 1040.21,
            grnd_level: 1014.43,
            humidity: 67,
            temp_kf: 0
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01n"
            }
          ],
          clouds: {
            all: 0
          },
          wind: {
            speed: 4.36,
            deg: 188.003
          },
          rain: {},
          sys: {
            pod: "n"
          },
          dt_txt: "2019-02-23 06:00:00"
        },
        {
          dt: 1550912400,
          main: {
            temp: 9.55,
            temp_min: 9.55,
            temp_max: 9.55,
            pressure: 1014.02,
            sea_level: 1039.87,
            grnd_level: 1014.02,
            humidity: 67,
            temp_kf: 0
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01d"
            }
          ],
          clouds: {
            all: 0
          },
          wind: {
            speed: 5.57,
            deg: 188
          },
          rain: {},
          sys: {
            pod: "d"
          },
          dt_txt: "2019-02-23 09:00:00"
        },
        {
          dt: 1550923200,
          main: {
            temp: 12.31,
            temp_min: 12.31,
            temp_max: 12.31,
            pressure: 1013.41,
            sea_level: 1039,
            grnd_level: 1013.41,
            humidity: 69,
            temp_kf: 0
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01d"
            }
          ],
          clouds: {
            all: 0
          },
          wind: {
            speed: 6.56,
            deg: 192.501
          },
          rain: {},
          sys: {
            pod: "d"
          },
          dt_txt: "2019-02-23 12:00:00"
        },
        {
          dt: 1550934000,
          main: {
            temp: 12.65,
            temp_min: 12.65,
            temp_max: 12.65,
            pressure: 1012.13,
            sea_level: 1037.71,
            grnd_level: 1012.13,
            humidity: 66,
            temp_kf: 0
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01d"
            }
          ],
          clouds: {
            all: 0
          },
          wind: {
            speed: 7.31,
            deg: 197.503
          },
          rain: {},
          sys: {
            pod: "d"
          },
          dt_txt: "2019-02-23 15:00:00"
        },
        {
          dt: 1550944800,
          main: {
            temp: 10.74,
            temp_min: 10.74,
            temp_max: 10.74,
            pressure: 1011.93,
            sea_level: 1037.68,
            grnd_level: 1011.93,
            humidity: 63,
            temp_kf: 0
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01n"
            }
          ],
          clouds: {
            all: 0
          },
          wind: {
            speed: 7.07,
            deg: 199.501
          },
          rain: {},
          sys: {
            pod: "n"
          },
          dt_txt: "2019-02-23 18:00:00"
        },
        {
          dt: 1550955600,
          main: {
            temp: 10.35,
            temp_min: 10.35,
            temp_max: 10.35,
            pressure: 1012.36,
            sea_level: 1038.11,
            grnd_level: 1012.36,
            humidity: 66,
            temp_kf: 0
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01n"
            }
          ],
          clouds: {
            all: 0
          },
          wind: {
            speed: 7.27,
            deg: 204.001
          },
          rain: {},
          sys: {
            pod: "n"
          },
          dt_txt: "2019-02-23 21:00:00"
        },
        {
          dt: 1550966400,
          main: {
            temp: 9.88,
            temp_min: 9.88,
            temp_max: 9.88,
            pressure: 1013.44,
            sea_level: 1039.14,
            grnd_level: 1013.44,
            humidity: 78,
            temp_kf: 0
          },
          weather: [
            {
              id: 802,
              main: "Clouds",
              description: "scattered clouds",
              icon: "03n"
            }
          ],
          clouds: {
            all: 44
          },
          wind: {
            speed: 6.86,
            deg: 216.002
          },
          rain: {},
          sys: {
            pod: "n"
          },
          dt_txt: "2019-02-24 00:00:00"
        },
        {
          dt: 1550977200,
          main: {
            temp: 9.34,
            temp_min: 9.34,
            temp_max: 9.34,
            pressure: 1014.88,
            sea_level: 1040.65,
            grnd_level: 1014.88,
            humidity: 91,
            temp_kf: 0
          },
          weather: [
            {
              id: 500,
              main: "Rain",
              description: "light rain",
              icon: "10n"
            }
          ],
          clouds: {
            all: 44
          },
          wind: {
            speed: 3.98,
            deg: 237.502
          },
          rain: {
            "3h": 0.06
          },
          sys: {
            pod: "n"
          },
          dt_txt: "2019-02-24 03:00:00"
        },
        {
          dt: 1550988000,
          main: {
            temp: 7.27,
            temp_min: 7.27,
            temp_max: 7.27,
            pressure: 1016.74,
            sea_level: 1042.49,
            grnd_level: 1016.74,
            humidity: 95,
            temp_kf: 0
          },
          weather: [
            {
              id: 500,
              main: "Rain",
              description: "light rain",
              icon: "10n"
            }
          ],
          clouds: {
            all: 20
          },
          wind: {
            speed: 1.91,
            deg: 239.5
          },
          rain: {
            "3h": 0.02
          },
          sys: {
            pod: "n"
          },
          dt_txt: "2019-02-24 06:00:00"
        },
        {
          dt: 1550998800,
          main: {
            temp: 7,
            temp_min: 7,
            temp_max: 7,
            pressure: 1018.97,
            sea_level: 1044.9,
            grnd_level: 1018.97,
            humidity: 92,
            temp_kf: 0
          },
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01d"
            }
          ],
          clouds: {
            all: 0
          },
          wind: {
            speed: 1.61,
            deg: 220.5
          },
          rain: {},
          sys: {
            pod: "d"
          },
          dt_txt: "2019-02-24 09:00:00"
        }
      ],
      cityName: "Edinburgh GB",
      current: {
        day: "Tuesday",
        city: "Edinburgh GB",
        rain: 0.0975,
        icon: "10d",
        description: "light rain",
        hour: "12:00",
        max: 7,
        min: 7,
        wind: 5,
        degrees: 7,
        item: {
          dt: 1550577600,
          main: {
            temp: 7.23,
            temp_min: 6.86,
            temp_max: 7.23,
            pressure: 999.26,
            sea_level: 1024.84,
            grnd_level: 999.26,
            humidity: 84,
            temp_kf: 0.37
          },
          weather: [
            {
              id: 500,
              main: "Rain",
              description: "light rain",
              icon: "10d"
            }
          ],
          clouds: {
            all: 64
          },
          wind: {
            speed: 5.47,
            deg: 238.5
          },
          rain: {
            "3h": 0.0975
          },
          sys: {
            pod: "d"
          },
          dt_txt: "2019-02-19 12:00:00"
        }
      },
      hourlyForecast: [
        {
          day: "Tuesday",
          city: "Edinburgh GB",
          rain: 0.0975,
          icon: "10d",
          description: "light rain",
          hour: "12:00",
          max: 7,
          min: 7,
          wind: 5,
          degrees: 7,
          item: {
            dt: 1550577600,
            main: {
              temp: 7.23,
              temp_min: 6.86,
              temp_max: 7.23,
              pressure: 999.26,
              sea_level: 1024.84,
              grnd_level: 999.26,
              humidity: 84,
              temp_kf: 0.37
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d"
              }
            ],
            clouds: {
              all: 64
            },
            wind: {
              speed: 5.47,
              deg: 238.5
            },
            rain: {
              "3h": 0.0975
            },
            sys: {
              pod: "d"
            },
            dt_txt: "2019-02-19 12:00:00"
          }
        },
        {
          day: "Tuesday",
          city: "Edinburgh GB",
          rain: 0.2975,
          icon: "10d",
          description: "light rain",
          hour: "15:00",
          max: 6,
          min: 6,
          wind: 5,
          degrees: 6,
          item: {
            dt: 1550588400,
            main: {
              temp: 6.08,
              temp_min: 5.83,
              temp_max: 6.08,
              pressure: 999.14,
              sea_level: 1024.69,
              grnd_level: 999.14,
              humidity: 79,
              temp_kf: 0.25
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d"
              }
            ],
            clouds: {
              all: 92
            },
            wind: {
              speed: 5.22,
              deg: 225.007
            },
            rain: {
              "3h": 0.2975
            },
            sys: {
              pod: "d"
            },
            dt_txt: "2019-02-19 15:00:00"
          }
        },
        {
          day: "Tuesday",
          city: "Edinburgh GB",
          rain: 0.2675,
          icon: "10n",
          description: "light rain",
          hour: "18:00",
          max: 6,
          min: 6,
          wind: 5,
          degrees: 6,
          item: {
            dt: 1550599200,
            main: {
              temp: 5.8,
              temp_min: 5.68,
              temp_max: 5.8,
              pressure: 998.08,
              sea_level: 1023.7,
              grnd_level: 998.08,
              humidity: 85,
              temp_kf: 0.12
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n"
              }
            ],
            clouds: {
              all: 88
            },
            wind: {
              speed: 4.96,
              deg: 196.003
            },
            rain: {
              "3h": 0.2675
            },
            sys: {
              pod: "n"
            },
            dt_txt: "2019-02-19 18:00:00"
          }
        },
        {
          day: "Tuesday",
          city: "Edinburgh GB",
          rain: 1.045,
          icon: "10n",
          description: "light rain",
          hour: "21:00",
          max: 6,
          min: 6,
          wind: 7,
          degrees: 6,
          item: {
            dt: 1550610000,
            main: {
              temp: 6.32,
              temp_min: 6.32,
              temp_max: 6.32,
              pressure: 996.41,
              sea_level: 1022.1,
              grnd_level: 996.41,
              humidity: 93,
              temp_kf: 0
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n"
              }
            ],
            clouds: {
              all: 92
            },
            wind: {
              speed: 6.77,
              deg: 195.501
            },
            rain: {
              "3h": 1.045
            },
            sys: {
              pod: "n"
            },
            dt_txt: "2019-02-19 21:00:00"
          }
        },
        {
          day: "Wednesday",
          city: "Edinburgh GB",
          rain: 1.37,
          icon: "10n",
          description: "light rain",
          hour: "00:00",
          max: 7,
          min: 7,
          wind: 8,
          degrees: 7,
          item: {
            dt: 1550620800,
            main: {
              temp: 7,
              temp_min: 7,
              temp_max: 7,
              pressure: 994.74,
              sea_level: 1020.37,
              grnd_level: 994.74,
              humidity: 95,
              temp_kf: 0
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n"
              }
            ],
            clouds: {
              all: 92
            },
            wind: {
              speed: 8.32,
              deg: 202.001
            },
            rain: {
              "3h": 1.37
            },
            sys: {
              pod: "n"
            },
            dt_txt: "2019-02-20 00:00:00"
          }
        },
        {
          day: "Wednesday",
          city: "Edinburgh GB",
          rain: 0.635,
          icon: "10n",
          description: "light rain",
          hour: "03:00",
          max: 8,
          min: 8,
          wind: 8,
          degrees: 8,
          item: {
            dt: 1550631600,
            main: {
              temp: 8.3,
              temp_min: 8.3,
              temp_max: 8.3,
              pressure: 993.93,
              sea_level: 1019.22,
              grnd_level: 993.93,
              humidity: 94,
              temp_kf: 0
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n"
              }
            ],
            clouds: {
              all: 68
            },
            wind: {
              speed: 7.66,
              deg: 213.5
            },
            rain: {
              "3h": 0.635
            },
            sys: {
              pod: "n"
            },
            dt_txt: "2019-02-20 03:00:00"
          }
        },
        {
          day: "Wednesday",
          city: "Edinburgh GB",
          rain: 0.235,
          icon: "10n",
          description: "light rain",
          hour: "06:00",
          max: 9,
          min: 9,
          wind: 8,
          degrees: 9,
          item: {
            dt: 1550642400,
            main: {
              temp: 8.68,
              temp_min: 8.68,
              temp_max: 8.68,
              pressure: 993.88,
              sea_level: 1019.2,
              grnd_level: 993.88,
              humidity: 94,
              temp_kf: 0
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n"
              }
            ],
            clouds: {
              all: 80
            },
            wind: {
              speed: 7.96,
              deg: 215.004
            },
            rain: {
              "3h": 0.235
            },
            sys: {
              pod: "n"
            },
            dt_txt: "2019-02-20 06:00:00"
          }
        },
        {
          day: "Wednesday",
          city: "Edinburgh GB",
          rain: 0.29,
          icon: "10d",
          description: "light rain",
          hour: "09:00",
          max: 9,
          min: 9,
          wind: 8,
          degrees: 9,
          item: {
            dt: 1550653200,
            main: {
              temp: 9.13,
              temp_min: 9.13,
              temp_max: 9.13,
              pressure: 994.7,
              sea_level: 1020.07,
              grnd_level: 994.7,
              humidity: 94,
              temp_kf: 0
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d"
              }
            ],
            clouds: {
              all: 56
            },
            wind: {
              speed: 8.42,
              deg: 213.001
            },
            rain: {
              "3h": 0.29
            },
            sys: {
              pod: "d"
            },
            dt_txt: "2019-02-20 09:00:00"
          }
        },
        {
          day: "Wednesday",
          city: "Edinburgh GB",
          rain: 0.21,
          icon: "10d",
          description: "light rain",
          hour: "12:00",
          max: 10,
          min: 10,
          wind: 9,
          degrees: 10,
          item: {
            dt: 1550664000,
            main: {
              temp: 10.26,
              temp_min: 10.26,
              temp_max: 10.26,
              pressure: 996.1,
              sea_level: 1021.32,
              grnd_level: 996.1,
              humidity: 92,
              temp_kf: 0
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d"
              }
            ],
            clouds: {
              all: 68
            },
            wind: {
              speed: 9.26,
              deg: 218.012
            },
            rain: {
              "3h": 0.21
            },
            sys: {
              pod: "d"
            },
            dt_txt: "2019-02-20 12:00:00"
          }
        }
      ],
      weeklyForecast: [
        {
          day: "Tuesday",
          city: "Edinburgh GB",
          rain: 0.0975,
          icon: "10d",
          description: "light rain",
          hour: "12:00",
          max: 7,
          min: 7,
          wind: 5,
          degrees: 7,
          item: {
            dt: 1550577600,
            main: {
              temp: 7.23,
              temp_min: 6.86,
              temp_max: 7.23,
              pressure: 999.26,
              sea_level: 1024.84,
              grnd_level: 999.26,
              humidity: 84,
              temp_kf: 0.37
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10d"
              }
            ],
            clouds: {
              all: 64
            },
            wind: {
              speed: 5.47,
              deg: 238.5
            },
            rain: {
              "3h": 0.0975
            },
            sys: {
              pod: "d"
            },
            dt_txt: "2019-02-19 12:00:00"
          }
        },
        {
          day: "Wednesday",
          city: "Edinburgh GB",
          rain: 1.37,
          icon: "10n",
          description: "light rain",
          hour: "00:00",
          max: 7,
          min: 7,
          wind: 8,
          degrees: 7,
          item: {
            dt: 1550620800,
            main: {
              temp: 7,
              temp_min: 7,
              temp_max: 7,
              pressure: 994.74,
              sea_level: 1020.37,
              grnd_level: 994.74,
              humidity: 95,
              temp_kf: 0
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n"
              }
            ],
            clouds: {
              all: 92
            },
            wind: {
              speed: 8.32,
              deg: 202.001
            },
            rain: {
              "3h": 1.37
            },
            sys: {
              pod: "n"
            },
            dt_txt: "2019-02-20 00:00:00"
          }
        },
        {
          day: "Thursday",
          city: "Edinburgh GB",
          rain: 0.15,
          icon: "10n",
          description: "light rain",
          hour: "00:00",
          max: 8,
          min: 8,
          wind: 7,
          degrees: 8,
          item: {
            dt: 1550707200,
            main: {
              temp: 8.44,
              temp_min: 8.44,
              temp_max: 8.44,
              pressure: 1001.39,
              sea_level: 1026.86,
              grnd_level: 1001.39,
              humidity: 92,
              temp_kf: 0
            },
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n"
              }
            ],
            clouds: {
              all: 32
            },
            wind: {
              speed: 6.56,
              deg: 219.001
            },
            rain: {
              "3h": 0.15
            },
            sys: {
              pod: "n"
            },
            dt_txt: "2019-02-21 00:00:00"
          }
        },
        {
          day: "Friday",
          city: "Edinburgh GB",
          rain: 0,
          icon: "02n",
          description: "clear sky",
          hour: "00:00",
          max: 8,
          min: 8,
          wind: 7,
          degrees: 8,
          item: {
            dt: 1550793600,
            main: {
              temp: 8.49,
              temp_min: 8.49,
              temp_max: 8.49,
              pressure: 1012.53,
              sea_level: 1038.47,
              grnd_level: 1012.53,
              humidity: 83,
              temp_kf: 0
            },
            weather: [
              {
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "02n"
              }
            ],
            clouds: {
              all: 8
            },
            wind: {
              speed: 7.36,
              deg: 201.503
            },
            rain: {},
            sys: {
              pod: "n"
            },
            dt_txt: "2019-02-22 00:00:00"
          }
        },
        {
          day: "Saturday",
          city: "Edinburgh GB",
          rain: 0,
          icon: "02n",
          description: "clear sky",
          hour: "00:00",
          max: 10,
          min: 10,
          wind: 7,
          degrees: 10,
          item: {
            dt: 1550880000,
            main: {
              temp: 10.47,
              temp_min: 10.47,
              temp_max: 10.47,
              pressure: 1015.27,
              sea_level: 1041.03,
              grnd_level: 1015.27,
              humidity: 66,
              temp_kf: 0
            },
            weather: [
              {
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "02n"
              }
            ],
            clouds: {
              all: 8
            },
            wind: {
              speed: 6.66,
              deg: 193.502
            },
            rain: {},
            sys: {
              pod: "n"
            },
            dt_txt: "2019-02-23 00:00:00"
          }
        },
        {
          day: "Sunday",
          city: "Edinburgh GB",
          rain: 0,
          icon: "03n",
          description: "scattered clouds",
          hour: "00:00",
          max: 10,
          min: 10,
          wind: 7,
          degrees: 10,
          item: {
            dt: 1550966400,
            main: {
              temp: 9.88,
              temp_min: 9.88,
              temp_max: 9.88,
              pressure: 1013.44,
              sea_level: 1039.14,
              grnd_level: 1013.44,
              humidity: 78,
              temp_kf: 0
            },
            weather: [
              {
                id: 802,
                main: "Clouds",
                description: "scattered clouds",
                icon: "03n"
              }
            ],
            clouds: {
              all: 44
            },
            wind: {
              speed: 6.86,
              deg: 216.002
            },
            rain: {},
            sys: {
              pod: "n"
            },
            dt_txt: "2019-02-24 00:00:00"
          }
        }
      ]
    };
    const expectedActions = [
      { type: FETCH_FORECAST_LIST_START },
      {
        type: FETCH_FORECAST_LIST_FULFILLED,
        payload: mockPayload
      }
    ];

    const store = mockStore({});
    return store.dispatch(fetchForecastList()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
