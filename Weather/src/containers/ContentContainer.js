import { connect } from "react-redux";
import Content from "../components/Content";

const mapStateToProps = (state) => {
    return {
        cityName: state.cityName,
        mode: state.mode,
        result: state.result,
    };
};

export default connect(mapStateToProps)(Content);
