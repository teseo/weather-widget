import axios from "axios";

const DATA_URL = "http://api.openweathermap.org/data/2.5/forecast?q=Edinburgh,uk&APPID=5902e987084211ae3f2fe0ed9fbafca9&units=metric";

export default class ApiService {

  static async getWeatherForecast(): Promise<Array<any>> {
    const response = await axios.get(DATA_URL);
    return response.data;
  }
}
