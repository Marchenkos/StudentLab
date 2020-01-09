import { connect } from "react-redux";
import Content from "../components/Content";
import { selectCityNameSelector, selectSearchModeSelector } from "../selectors/selector";

const mapStateToProps = (state) => {
    return {
        cityName: selectCityNameSelector(state),
        searchMode: selectSearchModeSelector(state),
        result: state.fetchWeather.result,
    };
};

export default connect(mapStateToProps)(Content);
