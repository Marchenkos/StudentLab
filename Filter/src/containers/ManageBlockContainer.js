import { connect } from "react-redux";
import ManageBlock from "../components/ManageBlock";
import { loadCells, loadTables, loadElements } from "../actions/loadFilterState";
import "../style/manage-block.less";

const mapStateToProps = state => {
    return {
        currentTables: state.filterTables.currentTables,
        currentCells: state.filterCells.currentCells,
        result: state.filterEements.result
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadSavedStatus: (tables, cells, elements) => {
            dispatch(loadTables(tables));
            dispatch(loadCells(cells));
            dispatch(loadElements(elements));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageBlock);
