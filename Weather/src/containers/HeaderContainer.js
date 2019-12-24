import { connect } from "react-redux";

import Header from "../components/Header";

const mapStateToProps = state => {
    return {
        totalResult: state.metadata.totalResult,
        nextPageToken: state.metadata.nextPageToken,
        errorMessage: state.error.errorMessage
    };
};

export default connect(mapStateToProps)(Header);
