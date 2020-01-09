import { connect } from "react-redux";
import Header from "../components/Header";
import { fetchWeatherRequestNow, fetchWeatherRequestToday, fetchWeatherRequestForWeek } from "../actions/fetchWeatherActions";
import { enterCityName, changeMode } from "../actions/searchWeatherActions";
import { clearResult } from "../actions/changeResultActions";

const mapStateToProps = (state) => {
    return {
        cityName: state.changeSearchTerms.cityName,
        searchMode: state.changeSearchTerms.searchMode,
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
