import { FETCH_FORECAST_LIST, UPDATE_CURRENT_FORECAST } from "../actions/types";

const initialState = {
  list: [],
  current: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_FORECAST_LIST:
      return {
        ...state,
        list: action.payload.rawList,
        city: action.payload.cityName,
        weeklyForecast: action.payload.weeklyForecast,
        hourlyForecast: action.payload.hourlyForecast,
        current: action.payload.current
      };
    case UPDATE_CURRENT_FORECAST:
      return {
        ...state,
        current: action.payload
      };
    default:
      return state;
  }
}
