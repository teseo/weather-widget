import axios from "axios";
import {Forecast} from "./components/WeatherWidget/WeatherWidget.Component";

const DATA_URL = "http://api.openweathermap.org/data/2.5/forecast?q=Edinburgh,uk&APPID=5902e987084211ae3f2fe0ed9fbafca9&units=metric";
export const MAX_HOURLY_DISPLAY_DATE = 8;
export default class ApiService {

  static async getWeatherForecast(): Promise<Array<any>> {
    const response = await axios.get(DATA_URL);
    return response.data;
  }
}

export class ForecastService {

  static getDayName(date: string) {
    return new Date(date).toLocaleDateString('EN-GB', {weekday: 'long'});
  }

  static getFormattedForecastItem(item: any, city: string): Forecast {
    const dateData = item.dt_txt.split(' ');
    const day = dateData[0];
    const hour = dateData[1].slice(0, -3);
    return {
      day: this.getDayName(item.dt_txt),
      city: city,
      rain: item.rain['3h'] ? item.rain['3h'] : 0,
      icon: item.weather[0].icon,
      description: item.weather[0].description,
      hour: hour,
      max: Math.round(item.main.temp_max),
      min: Math.round(item.main.temp_min),
      wind: Math.round(item.wind.speed),
      degrees: Math.round(item.main.temp),
      item
    };
  }
}
