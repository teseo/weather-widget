export type Forecast = {
  city: string;
  day: string;
  degrees: number;
  description: string;
  hour: string;
  icon: string;
  max: number;
  min: number;
  rain: number;
  wind: number;
  item: object;
};
export type ForecastList = {
  [index: string]: Forecast;
};
