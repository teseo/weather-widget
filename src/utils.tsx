import axios from "axios";
import { Forecast } from "./types";

const DATA_URL =
  "http://api.openweathermap.org/data/2.5/forecast?q=Edinburgh,uk&APPID=5902e987084211ae3f2fe0ed9fbafca9&units=metric";
export const MAX_HOURLY_DISPLAY_DATE = 8;
export default class ApiService {
  static async getWeatherForecast(): Promise<Array<any>> {
    const response = await axios.get(DATA_URL);
    return response.data;
  }
}

export class ForecastService {
  static getDayName(date: string) {
    return new Date(date).toLocaleDateString("EN-GB", { weekday: "long" });
  }
  static processForecastData(weatherData: any): any {
    const list = weatherData.list;

    let weeklyForecast: any = [];
    let weeklyForecastFormatted: any = [];
    let cityName: string = "";
    let currentWeather: Forecast = {
      city: "",
      day: "",
      degrees: 0,
      description: "",
      hour: "",
      icon: "",
      max: 0,
      min: 0,
      rain: 0,
      wind: 0,
      item: {}
    };
    let HourlyForecastSummaryList: any = [];

    list.map((item: any) => {
      cityName = weatherData.city.name + " " + weatherData.city.country;
      const dayName = ForecastService.getDayName(item.dt_txt);
      const currentForecastItem = ForecastService.getFormattedForecastItem(
        item,
        cityName
      );

      if (currentWeather.city === "") {
        currentWeather = currentForecastItem;
      }
      if (weeklyForecast[dayName] === undefined) {
        weeklyForecast[dayName] = true;
        weeklyForecastFormatted.push(currentForecastItem);
      }
      if (HourlyForecastSummaryList.length <= MAX_HOURLY_DISPLAY_DATE) {
        HourlyForecastSummaryList.push(currentForecastItem);
      }
    });
    return {
      weeklyForecastFormatted,
      cityName,
      currentWeather,
      HourlyForecastSummaryList
    };
  }
  static getHourlyForecast(list: any, currentItem: any): Array<Forecast> {
    const city = currentItem.city;
    let hourlyForecast: Array<Forecast> = [];
    let switchVar = 0;
    list.some((item: any) => {
      if (item.dt == currentItem.item.dt) {
        hourlyForecast.push(this.getFormattedForecastItem(item, city));
        switchVar++;
      } else if (switchVar > 0 && switchVar <= MAX_HOURLY_DISPLAY_DATE) {
        hourlyForecast.push(this.getFormattedForecastItem(item, city));
        switchVar++;
      }
      if (switchVar > MAX_HOURLY_DISPLAY_DATE) {
        return true;
      }
    });
    return hourlyForecast;
  }

  static getFormattedForecastItem(item: any, city: string): Forecast {
    const dateData = item.dt_txt.split(" ");
    const hour = dateData[1].slice(0, -3);
    return {
      day: this.getDayName(item.dt_txt),
      city: city,
      rain: item.rain["3h"] ? item.rain["3h"] : 0,
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
