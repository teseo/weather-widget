import ApiService, { ForecastService } from "../../utils";
import { FETCH_FORECAST_LIST, UPDATE_CURRENT_FORECAST } from "./types";

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

export const updateCurrentForecast = (item: any, city: string) => dispatch => {
  dispatch({
    type: UPDATE_CURRENT_FORECAST,
    payload: {
      current: ForecastService.getFormattedForecastItem(item, city)
    }
  });
};
