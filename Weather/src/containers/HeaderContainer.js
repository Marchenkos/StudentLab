import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Header from "../components/Header";
import { fetchUserRequest } from "../actions/fetchWeatherAction";
import { enterCityName, changeMode } from "../actions/searchWeatherAction";

const mapStateToProps = (state, props) => {
    return {
        cityName: props.cityName,
        mode: state.mode,
        result: state.result,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUserRequest, enterCityName, changeMode
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
