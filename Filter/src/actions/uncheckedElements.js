export const UNCHECKED_ELEMENT = "UNCHECKED_ELEMENT";
export const UNCHECKED_CELL = "UNCHECKED_CELL";
export const UNCHECKED_TABLE = "UNCHECKED_TABLE";

export const uncheckedTable = tableName => {
    return {
        type: UNCHECKED_TABLE,
        uncheckedTable: tableName
    };
};

export const uncheckedCell = cellName => {
    return {
        type: UNCHECKED_CELL,
        uncheckedCell: cellName
    };
};

export const uncheckedElement = elementName => {
    return {
        type: UNCHECKED_ELEMENT,
        uncheckedElement: elementName
    };
};
