import {fetchForecastList} from "../../store/actions/forecast";
import {connect} from 'react-redux';

import WeatherWidget from './WeatherWidget.Component';

const mapStateToProps = state => ({
  list: state.forecast.list,
  city: state.forecast.city,
  weekly: state.forecast.weeklyForecast,
  hourly: state.forecast.hourlyForecast,
  current: state.forecast.current
});
const mapDispatchToProps = (dispatch: any): any => ({
  fetchForecastList: () => dispatch(fetchForecastList())
});
export default connect(mapStateToProps, mapDispatchToProps)(WeatherWidget);
