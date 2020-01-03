import { connect } from "react-redux";
import Header from "../components/Header";
import { fetchWeatherRequestNow, fetchWeatherRequestToday, fetchWeatherRequestForWeek } from "../actions/fetchWeatherAction";
import { enterCityName, changeMode } from "../actions/searchWeatherAction";

const mapStateToProps = (state) => {
    return {
        cityName: state.cityName,
        mode: state.mode,
        result: state.result,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchWeatherRequestNow: () => dispatch(fetchWeatherRequestNow()),
        onFetchWeatherRequestToday: () => dispatch(fetchWeatherRequestToday()),
        onFetchWeatherRequestForWeek: () => dispatch(fetchWeatherRequestForWeek()),
        onEnterCityName: name => dispatch(enterCityName(name)),
        onChangeMode: mode => dispatch(changeMode(mode))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
