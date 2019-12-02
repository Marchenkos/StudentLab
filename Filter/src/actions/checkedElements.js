export const CHECKED_ELEMENT = "CHECKED_ELEMENT";
export const CHECKED_CELL = "CHECKED_CELL";
export const CHECKED_TABLE = "CHECKED_TABLE";

export const checkedTable = table => {
    return {
        type: CHECKED_TABLE,
        checkedTable: table
    };
};

export const checkedCell = cell => {
    return {
        type: CHECKED_CELL,
        checkedCell: cell
    };
};

export const checkedElement = element => {
    return {
        type: CHECKED_ELEMENT,
        checkedElement: element
    };
};
