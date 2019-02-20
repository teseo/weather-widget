import ApiService, { ForecastService } from "../../utils";
import {
  FETCH_FORECAST_LIST_FULFILLED,
  FETCH_FORECAST_LIST_START,
  UPDATE_CURRENT_FORECAST_FULFILLED,
  UPDATE_CURRENT_FORECAST_START
} from "./types";

export const fetchForecastList = () => async dispatch => {
  dispatch({
    type: FETCH_FORECAST_LIST_START
  });
  const weatherData: any = await ApiService.getWeatherForecast();
  const processedForecastData = ForecastService.processForecastData(
    weatherData
  );

  dispatch({
    type: FETCH_FORECAST_LIST_FULFILLED,
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
  dispatch({ type: UPDATE_CURRENT_FORECAST_START });
  dispatch({
    type: UPDATE_CURRENT_FORECAST_FULFILLED,
    payload: {
      current: ForecastService.getFormattedForecastItem(item, city)
    }
  });
};
