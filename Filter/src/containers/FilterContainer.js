import { connect } from "react-redux";
import Filters from "../components/Filters";
import { checkedTable, checkedCell, checkedElement } from "../actions/checkedElements";
import { uncheckedTable, uncheckedCell, uncheckedElement } from "../actions/uncheckedElements";

const mapStateToProps = state => {
    return {
        filters: { music: {
            rock: ["Three Days Grace", "Linkin Park", "AC/DC"],
            pop: ["Sia", "Ed Sheeran", "Michael Jackson"],
            jazz: ["Kenny G", "Bill Evans"],
            rap: ["Eminem", "Noize MC", "Atmosphere"]
        },
        icons: {
            rock: ["Three Days Grace", "Linkin Park", "AC/DC"],
            pop: ["Sia", "Ed Sheeran", "Michael Jackson"],
            jazz: ["Kenny G", "Bill Evans"],
            rap: ["Eminem", "Noize MC", "Atmosphere"]
        },
        films: {
            rock: ["Three Days Grace", "Linkin Park", "AC/DC"],
            pop: ["Sia", "Ed Sheeran", "Michael Jackson"],
            jazz: ["Kenny G", "Bill Evans"],
            rap: ["Eminem", "Noize MC", "Atmosphere"]
        } },
        currentTables: state.filterTables.currentTables,
        currentCells: state.filterCells.currentCells,
        result: state.filterEements.result
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addTable: tableName => dispatch(checkedTable(tableName)),
        addCell: cellName => dispatch(checkedCell(cellName)),
        addElement: elementName => dispatch(checkedElement(elementName)),
        removeTable: tableName => dispatch(uncheckedTable(tableName)),
        removeCell: cellName => dispatch(uncheckedCell(cellName)),
        removeElement: elementName => dispatch(uncheckedElement(elementName)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
