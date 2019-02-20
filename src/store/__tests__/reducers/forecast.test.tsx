// @flow

import forecastReducer, { initialState } from "../../reducers/forecast";
import {
  FETCH_FORECAST_LIST_FULFILLED,
  UPDATE_CURRENT_FORECAST_FULFILLED
} from "../../actions/types";

const payloadData = require("./../data/payload.json");
const currentData = require("./../data/current.json");
const weeklyForecast = require("./../data/weeklyForecast.json");
const hourlyForecast = require("./../data/hourlyForecast.json");
const storeUpdated = require("./../data/storeUpdated.json");
const stateWithData = require("./../data/stateWithData.json");
const currentPayload = require("./../data/currentPayload.json");

describe("forecast reducer", () => {
  it("sets the state after data is received, in the store", () => {
    expect(
      forecastReducer(initialState, {
        type: FETCH_FORECAST_LIST_FULFILLED,
        payload: {
          rawList: payloadData,
          cityName: "Edinburgh GB",
          current: currentData,
          hourlyForecast: hourlyForecast,
          weeklyForecast: weeklyForecast
        }
      })
    ).toMatchObject({
      list: payloadData,
      city: "Edinburgh GB",
      current: currentData,
      hourlyForecast: hourlyForecast,
      weeklyForecast: weeklyForecast
    });
  });
  it("sets a new current forecast in the store", () => {
    expect(
      forecastReducer(stateWithData, {
        type: UPDATE_CURRENT_FORECAST_FULFILLED,
        payload: currentPayload
      })
    ).toMatchObject(storeUpdated);
  });
});
