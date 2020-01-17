import { connect } from "react-redux";
import Header from "../components/Header";
import { fetchWeatherRequestNow, fetchWeatherRequestToday, fetchWeatherRequestForWeek } from "../actions/fetchWeatherActions";
import { enterCityName, changeMode } from "../actions/searchWeatherActions";
import { clearResult } from "../actions/changeResultActions";
import { selectCityNameSelector, selectSearchModeSelector } from "../selectors/selector";

const mapStateToProps = state => {
    return {
        cityName: selectCityNameSelector(state),
        searchMode: selectSearchModeSelector(state),
        result: state.fetchWeather.result,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchWeatherRequestNow: () => dispatch(fetchWeatherRequestNow()),
        onFetchWeatherRequestToday: () => dispatch(fetchWeatherRequestToday()),
        onFetchWeatherRequestForWeek: () => dispatch(fetchWeatherRequestForWeek()),
        onEnterCityName: name => dispatch(enterCityName(name)),
        onChangeMode: mode => dispatch(changeMode(mode)),
        onClearResult: () => dispatch(clearResult())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
