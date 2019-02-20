import {Forecast} from "../../components/WeatherWidget/WeatherWidget.Component";
import ApiService, {ForecastService, MAX_HOURLY_DISPLAY_DATE} from "../../utils";
import {FETCH_FORECAST_LIST} from "../actions/types";

const processWeatherForecastData = (weatherData: any): any => {

  const list = weatherData.list;

  let weeklyForecast: any = [];
  let weeklyForecastFormatted: any = [];
  let cityName: string = '';
  let currentWeather: Forecast = {
    city: '',
    day: '',
    degrees: 0,
    description: '',
    hour: '',
    icon: '',
    max: 0,
    min: 0,
    rain: 0,
    wind: 0,
  };
  let pepe;
  let HourlyForecastSummaryList: any = [];

  list.map((item: any) => {
      cityName = weatherData.city.name + ' ' + weatherData.city.country;
      const dayName = ForecastService.getDayName(item.dt_txt);
      const currentForecastItem = ForecastService.getFormattedForecastItem(item, cityName);

      if (currentWeather.city === '') {
        currentWeather = currentForecastItem;
      }
      if (weeklyForecast[dayName] === undefined) {
        weeklyForecast[dayName] = true;
        weeklyForecastFormatted.push(currentForecastItem);
      }
      if (HourlyForecastSummaryList.length <= MAX_HOURLY_DISPLAY_DATE) {
        HourlyForecastSummaryList.push(currentForecastItem);
      }
      /*for (let key in this.state.list) {
        let forecast = this.state.list[key];
        for (let keyForecast in forecast) {
          let dayData = forecast[keyForecast];
          if (HourlyForecastSummaryList.length <= MAX_HOURLY_DISPLAY_DATE) {
            HourlyForecastSummaryList.push(dayData);
          }
        }
      }*/
    }
  );
  return {weeklyForecastFormatted, cityName, currentWeather, HourlyForecastSummaryList};
};
export const fetchForecastList = () => async dispatch => {
  const weatherData: any = await ApiService.getWeatherForecast();
  const pupita = processWeatherForecastData(weatherData);
  const payload = weatherData;
  dispatch({
    type: FETCH_FORECAST_LIST,
    payload: {
      rawList: weatherData.list,
      cityName: pupita.cityName,
      current: pupita.currentWeather,
      hourlyForecast: pupita.HourlyForecastSummaryList,
      weeklyForecast: pupita.weeklyForecastFormatted
    }
  })
};
