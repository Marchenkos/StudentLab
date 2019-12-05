import { connect } from "react-redux";
import Filters from "../components/Filters";
import { uncheckedFilter, checkedFilter } from "../actions/checkedFilter";

const mapStateToProps = state => {
    return {
        filters: { music: {
            rock: ["Three Days Grace", "Linkin Park", "AC/DC"],
            pop: ["Sia", "Ed Sheeran", "Michael Jackson"],
            jazz: ["Kenny G", "Bill Evans"],
            rap: ["Eminem", "Noize MC", "Atmosphere"]
        },
        icons: {
            png: ["Three Days Grace", "Linkin Park", "AC/DC"],
            jpeg: ["Sia", "Ed Sheeran", "Michael Jackson"],
            svg: ["Kenny G", "Bill Evans"],
        },
        films: {
            comedy: ["Three Days Grace", "Linkin Park", "AC/DC"],
            horror: ["Sia", "Ed Sheeran", "Michael Jackson"],
            fantasy: ["Kenny G", "Bill Evans"],
            advantage: ["Eminem", "Noize MC", "Atmosphere"]
        } },
        currentFilters: state.currentFilters
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addFilters: filterNames => dispatch(checkedFilter(filterNames)),
        removeFilters: filterNames => dispatch(uncheckedFilter(filterNames)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
