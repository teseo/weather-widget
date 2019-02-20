import { updateCurrentForecast } from "../../store/actions/forecast";
import { connect } from "react-redux";

import ForecastUnit from "./ForecastUnit.Component";

const mapStateToProps = state => ({
  city: state.forecast.city,
  current: state.forecast.current
});
const mapDispatchToProps = (dispatch: any): any => ({
  updateCurrentForecast: (item: any, city: string) => dispatch(updateCurrentForecast(item, city))
});
export default connect(mapStateToProps, mapDispatchToProps)(ForecastUnit);
