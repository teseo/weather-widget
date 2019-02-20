import {
  FETCH_FORECAST_LIST_FULFILLED,
  UPDATE_CURRENT_FORECAST_FULFILLED
} from "../actions/types";
import { ForecastService } from "../../utils";

export const initialState = {
  list: [],
  current: {},
  city: "",
  weeklyForecast: [],
  hourlyForecast: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_FORECAST_LIST_FULFILLED:
      return {
        ...state,
        list: action.payload.rawList,
        city: action.payload.cityName,
        weeklyForecast: action.payload.weeklyForecast,
        hourlyForecast: action.payload.hourlyForecast,
        current: action.payload.current
      };
    case UPDATE_CURRENT_FORECAST_FULFILLED:
      const hourlyForecast = ForecastService.getHourlyForecast(
        state.list,
        action.payload.current
      );
      return {
        ...state,
        current: action.payload.current,
        hourlyForecast
      };
    default:
      return state;
  }
}
