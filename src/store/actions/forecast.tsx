import ApiService, {
  ForecastService,
  MAX_HOURLY_DISPLAY_DATE
} from "../../utils";
import { FETCH_FORECAST_LIST } from "./types";

export const fetchForecastList = () => async dispatch => {
  const weatherData: any = await ApiService.getWeatherForecast();
  const processedForecastData = ForecastService.processForecastData(
    weatherData
  );
  dispatch({
    type: FETCH_FORECAST_LIST,
    payload: {
      rawList: weatherData.list,
      cityName: processedForecastData.cityName,
      current: processedForecastData.currentWeather,
      hourlyForecast: processedForecastData.HourlyForecastSummaryList,
      weeklyForecast: processedForecastData.weeklyForecastFormatted
    }
  });
};
