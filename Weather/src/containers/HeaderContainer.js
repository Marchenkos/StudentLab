import { connect } from "react-redux";
import Header from "../components/Header";
import { fetchWeatherRequest } from "../actions/fetchWeatherAction";
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
        onFetchWeatherRequest: () => dispatch(fetchWeatherRequest()),
        onEnterCityName: name => dispatch(enterCityName(name)),
        onChangeMode: mode => dispatch(changeMode(mode))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
