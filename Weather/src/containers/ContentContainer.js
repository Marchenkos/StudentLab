import { connect } from "react-redux";
import Content from "../components/Content";
import { selectCityNameSelector, selectSearchModeSelector } from "../selectors/selectors";

const mapStateToProps = state => {
    return {
        cityName: selectCityNameSelector(state),
        searchMode: selectSearchModeSelector(state),
        result: state.fetchWeather.result,
        error: state.fetchWeather.error
    };
};

export default connect(mapStateToProps)(Content);
